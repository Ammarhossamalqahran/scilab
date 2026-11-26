import type { Env } from './types';
import { handleLeaderboard } from './leaderboard';

// Serves /api/* only (wrangler.jsonc run_worker_first). Everything else is static assets.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (!env.DB) return new Response(JSON.stringify({ error: 'no_database' }), { status: 503, headers: { 'content-type': 'application/json' } });
    try {
      return await handleLeaderboard(request, env.DB, url);
    } catch {
      return new Response(JSON.stringify({ error: 'server_error' }), { status: 500, headers: { 'content-type': 'application/json' } });
    }
  },
};
