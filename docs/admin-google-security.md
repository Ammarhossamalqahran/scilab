# Owner sign-in with Google and owner alerts: security notes

## How owner sign-in works
1. /admin has a "Sign in with Google (owner)" button. It sends the browser to Google (same Client ID and redirect as the existing link flow) asking for `openid email`, with a random nonce kept in this browser.
2. The browser sends the returned ID token and nonce to `POST /api/admin/google`.
3. The Worker checks: RS256 signature against Google's published keys, issuer, audience = our Client ID, expiry, the nonce, and `email_verified` = true. Then the SHA-256 of the lower-cased email must equal the owner's. Only the hash is in the repo (`worker/adminAuth.ts`), the address is not.
4. On success the Worker creates a random 256-bit session token, stores only its SHA-256 and an expiry (7 days) in D1 table `admin_sessions`, and returns the token. The browser keeps it and sends it in the same `x-admin-key` header the old key used.
5. Every admin endpoint checks that header on the server: either the old ADMIN_KEY (unchanged, still works) or a live session. The "Admin" nav link only appears if a token is stored, and is a hint only: editing localStorage shows the link but grants nothing.
- Wrong account, unverified email, wrong nonce/audience/issuer/expiry, forged signature: refused (tested).
- Rate limits: 10 attempts per 10 minutes per IP on the Google endpoint; the existing lockout (10 failures per 10 minutes) covers bad sessions and bad keys.
- Regular users' Google linking is unchanged and does not request the email scope. Only the owner button asks for it, and the email is never stored.
- Logout deletes the session (`/api/admin/logout`).

## Owner alerts
- A device receives alerts only after `POST /api/admin/push` succeeded with owner credentials (session or key). Max 5 devices. Table `admin_push`.
- Pushes are empty. The service worker asks `/api/push/kind?endpoint=...`; the Worker answers with counts (new record, new user, needs approval) only if that endpoint is an owner device. Other endpoints never get them. No names or text are sent.
- Triggers: a score above the current highest score (not on an empty board), a new player (new name), a new pending opinion, a new or replaced pending photo.
- Abuse limit: at most one push per kind per 5 minutes in total, so spamming sign-ups or opinions cannot flood the phone. Events are stored only while an owner device exists and are deleted after 7 days.
- A failed push never fails the user's own action.

## What is NOT verified
- A real Google sign-in with the owner account has not been run (no one could in testing). The token checks are tested with locally made tokens and a fake key set.
- Real push delivery to a phone is not tested. The tests use a fake push service.
- If Google shows an "unverified app" screen for the email scope, the owner can continue; if the OAuth consent screen blocks the email scope, owner sign-in will fail and the old key still works.

## Owner session from the normal Google link / sign-in
The normal flow asks Google only for `openid`, so the token has no email and regular users are never asked for it. After the owner signs in once with the owner button on /admin, the Worker stores a salted hash of the owner's Google user id (not the email) in `kv`. From then on, when the normal link or sign-in verifies a token with that same user id, the response also carries an owner session, and the Admin tab appears. Any other Google account never gets one. The very first time still needs the owner button on /admin once, because the Worker cannot know the owner's Google user id before it has seen a token with the verified owner email.
