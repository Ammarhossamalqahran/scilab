import type { D1Database } from './types';
import { ensureSchema } from './leaderboard';

// Owner-only view of the leaderboard, for picking giveaway winners. Protected by ADMIN_KEY, a secret
// set in the Cloudflare dashboard (never in the repo). Without it the endpoint stays closed.
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

async function same(a: string, b: string): Promise<boolean> {
  const enc = new TextEncoder();
  const [x, y] = await Promise.all([crypto.subtle.digest('SHA-256', enc.encode(a)), crypto.subtle.digest('SHA-256', enc.encode(b))]);
  const xa = new Uint8Array(x), ya = new Uint8Array(y);
  let d = 0; for (let i = 0; i < xa.length; i++) d |= xa[i] ^ ya[i];
  return d === 0;
}

export async function handleAdmin(request: Request, db: D1Database, adminKey: string | undefined, now = Date.now()): Promise<Response> {
  if (!adminKey || adminKey.length < 8) return json({ error: 'admin_not_configured' }, 503);
  await ensureSchema(db);
  await db.prepare('CREATE TABLE IF NOT EXISTS admin_fails (at INTEGER NOT NULL)').run();
  const fails = await db.prepare('SELECT COUNT(*) AS n FROM admin_fails WHERE at > ?').bind(now - 600_000).first<{ n: number }>();
  if ((fails?.n ?? 0) >= 10) return json({ error: 'locked' }, 429);
  const given = request.headers.get('x-admin-key') ?? '';
  if (!(await same(given, adminKey))) {
    await db.prepare('INSERT INTO admin_fails (at) VALUES (?)').bind(now).run();
    return json({ error: 'forbidden' }, 403);
  }
  const month = new Date(now); month.setUTCDate(1); month.setUTCHours(0, 0, 0, 0);
  const best = (since: number) => db.prepare(
    'SELECT p.nick AS nick, MAX(s.score) AS score, MAX(s.correct) AS correct, COUNT(*) AS games, MAX(s.at) AS last_at FROM scores s JOIN players p ON p.id = s.player_id WHERE s.at >= ? GROUP BY s.player_id ORDER BY score DESC, MIN(s.at) ASC LIMIT 200',
  ).bind(since).all();
  const [thisMonth, archive] = await Promise.all([
    best(month.getTime()),
    db.prepare('SELECT month, nick, score, at FROM leaderboard_archive ORDER BY month DESC, score DESC LIMIT 600').all().catch(() => ({ results: [] })),
  ]);
  return json({ month: month.toISOString().slice(0, 7), thisMonth: thisMonth.results, archive: archive.results });
}
