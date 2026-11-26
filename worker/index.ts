import type { Env } from './types';
import { handleLeaderboard, purgeLeaderboard } from './leaderboard';
import { handlePush, sendDaily } from './push';

const MONTHLY_CRON = '0 3 1 * *'; // keep in sync with wrangler.jsonc

// Serves /api/* only (wrangler.jsonc run_worker_first). Everything else is static assets.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (!env.DB) return new Response(JSON.stringify({ error: 'no_database' }), { status: 503, headers: { 'content-type': 'application/json' } });
    try {
      if (url.pathname.startsWith('/api/push/')) return await handlePush(request, env.DB, url);
      return await handleLeaderboard(request, env.DB, url);
    } catch {
      return new Response(JSON.stringify({ error: 'server_error' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }
  },
  // Daily reminder (cron in wrangler.jsonc).
  async scheduled(event: { cron?: string }, env: Env): Promise<void> {
    if (!env.DB) return;
    if (event.cron === MONTHLY_CRON) await purgeLeaderboard(env.DB);
    else await sendDaily(env.DB);
  },
};
