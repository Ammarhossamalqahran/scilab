import type { D1Database } from './types';
import { ensureWinnerSchema } from './admin';

// Private message for one player, shown on the device that holds that player id (a random id kept in
// the browser, never shown publicly). It is not a verified person: whoever has the browser sees it.
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
const ID = /^[0-9a-f-]{36}$/;

export async function handleInbox(request: Request, db: D1Database, url: URL, now = Date.now()): Promise<Response> {
  await ensureWinnerSchema(db);
  if (url.pathname === '/api/inbox' && request.method === 'GET') {
    const player = url.searchParams.get('player') ?? '';
    if (!ID.test(player)) return json({ message: null });
    const row = await db.prepare("SELECT msg FROM winner_msgs WHERE player_id = ? AND msg != '' AND seen_at IS NULL").bind(player).first<{ msg: string }>();
    return json({ message: row?.msg ?? null });
  }
  if (url.pathname === '/api/inbox/ack' && request.method === 'POST') {
    const body = await request.json().catch(() => null) as { player?: unknown } | null;
    if (!body || typeof body.player !== 'string' || !ID.test(body.player)) return json({ error: 'bad_request' }, 400);
    // Text is erased once the player dismisses it; only the "seen" time stays for the owner.
    await db.prepare("UPDATE winner_msgs SET msg = '', seen_at = ? WHERE player_id = ? AND seen_at IS NULL").bind(now, body.player).run();
    return json({ ok: true });
  }
  return json({ error: 'not_found' }, 404);
}
