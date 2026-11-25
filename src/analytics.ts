// Cloudflare Web Analytics: cookie-free page-view counts, no personal data, no ad tracking.
// Token from Cloudflare dashboard > Web Analytics > scilab.amarhossam0000.workers.dev (public value, it sits in the page HTML).
const CF_BEACON_TOKEN = '018633a6d16541fabbf1fd94ef57c5ba';
// The token is tied to one hostname, so the beacon only loads on the Cloudflare Workers site.
const HOST_SUFFIX = '.workers.dev';

export function startAnalytics() {
  if (!CF_BEACON_TOKEN || !import.meta.env.PROD) return;
  if (!window.location.hostname.endsWith(HOST_SUFFIX)) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
  document.head.appendChild(script);
}
