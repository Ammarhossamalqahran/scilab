import type { Env } from './types';
import { handleLeaderboard, purgeLeaderboard } from './leaderboard';
import { handleAdmin, handleAdminWinner, handleAdminCode, handleAdminPhotos, handleAdminPhotoDecision, handleAdminOpinions, handleAdminOpinionDecision } from './admin';
import { handleOpinion } from './opinions';
import { handleInbox } from './inbox';
import { handleProfile } from './profile';
import { handlePhoto } from './photo';
import { handleGoogle } from './google';
import { handleCode, nickForCode } from './code';
import { handlePush, sendDaily, isLastDayOfMonth } from './push';

const MONTHLY_CRON = '0 3 1 * *'; // keep in sync with wrangler.jsonc
const MONTH_END_CRON = '0 18 28-31 * *'; // fires on days 28-31, only the real last day sends

// Serves /api/* only (wrangler.jsonc run_worker_first). Everything else is static assets.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (!env.DB) return new Response(JSON.stringify({ error: 'no_database' }), { status: 503, headers: { 'content-type': 'application/json' } });
    try {
      if (url.pathname === '/api/admin/data' && request.method === 'GET') return await handleAdmin(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/admin/winner' && request.method === 'POST') return await handleAdminWinner(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/admin/code' && request.method === 'POST') return await handleAdminCode(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/photo' || url.pathname.startsWith('/api/photo/')) return await handlePhoto(request, env.DB, url);
      if (url.pathname === '/api/admin/photos' && request.method === 'GET') return await handleAdminPhotos(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/admin/photo' && request.method === 'POST') return await handleAdminPhotoDecision(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/admin/opinions' && request.method === 'GET') return await handleAdminOpinions(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/admin/opinion' && request.method === 'POST') return await handleAdminOpinionDecision(request, env.DB, env.ADMIN_KEY);
      if (url.pathname === '/api/opinions' || url.pathname.startsWith('/api/opinion/') || url.pathname === '/api/opinion') return await handleOpinion(request, env.DB, url);
      if (url.pathname.startsWith('/api/google/')) return await handleGoogle(request, env.DB, url, env.GOOGLE_CLIENT_ID);
      if (url.pathname === '/api/profile') return await handleProfile(request, env.DB);
      if (url.pathname.startsWith('/api/code/')) return await handleCode(request, env.DB, url);
      if (url.pathname.startsWith('/api/inbox')) return await handleInbox(request, env.DB, url);
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
    else if (event.cron === MONTH_END_CRON) { if (isLastDayOfMonth()) await sendDaily(env.DB, fetch, 'monthly'); }
    else await sendDaily(env.DB);
  },
};
