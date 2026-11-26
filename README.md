# Faculty of Science Virtual Lab (معمل عمار التعليمي)

A free bilingual (Arabic / English) virtual biology lab for Faculty of Science students: a virtual microscope with **996 licensed specimens**, practical-exam practice, and labelled study diagrams (schemas, **198 so far, more are being added**).

**Live sites:** https://scilab-wheat.vercel.app/ and https://scilab.amarhossam0000.workers.dev

> **Designed and built by Ammar Hossam Alqahran.** The interface, layout, interactions, exam logic and bilingual content structure are my own work. The specimen photographs are **not** mine: they come from Wikimedia Commons and other open sources, credited below.

| Home | Virtual microscope |
| --- | --- |
| ![Home page](docs/screenshots/home.png) | ![Virtual microscope](docs/screenshots/microscope.png) |

| Practical exams | Study diagrams |
| --- | --- |
| ![Practical exam room](docs/screenshots/exams.png) | ![Interactive heart diagram](docs/screenshots/schemas.png) |

## Features

- **Virtual microscope** with 996 real photomicrographs: histology (249), botany (171), microbiology (205), zoology (160), hematology (58), aquatic life (128) and genetics (25). Search, favorites, objective, focus and light controls, drag to move (the specimen always stays covering the field), pinch-to-zoom on touch screens, a blood-stain bench (digital filters) and a blind identification challenge.
- **Practical exam room:** identify specimens, compare slides, stain-selection questions, preparation workflow and a browser-local lab notebook.
- **Schemas:** 198 labelled diagrams (slide drawings on specimen photos plus plates such as heart, animal cell, dicot leaf and lab apparatus) with study and exam modes. Pins are placed by eye and marked "needs review".
- **Licence credits:** every photo has its author, free licence (CC0, CC BY, CC BY-SA or public domain) and source link in [`docs/specimen-photo-credits.md`](docs/specimen-photo-credits.md) and under the specimen in the app.
- **Request box:** a search box that checks whether a specimen or schema exists, and lets students send a request for a missing one.
- **Design:** new cell logo, SciLab character and loading screen; El Messiri headings and IBM Plex Sans Arabic body text (SIL OFL, self-hosted); light and dark theme; Arabic and English with right-to-left layout.
- **Speed:** specimen photos are WebP, and the share image is a small 1200x630 JPG for link previews.
- **Sharing and SEO:** title, description and Open Graph / Twitter tags; clear titles in the browser tab.
- **Profiles and leaderboard:** pick a nickname and avatar (or upload a photo), play the daily and challenge games and appear on a monthly leaderboard. The leaderboard is reset on the 1st of each month (the top 50 are archived); nicknames, avatars and photos are kept.
- **Photo upload with owner approval:** a player sees their own photo at once, but it becomes public only after the site owner approves it in a private admin page. Moderation is manual.
- **Name + code login:** a player can restore their profile on another device with a short code. No email or phone number is collected.
- **Optional Google link:** a player can link a Google account to recover the profile. Only a salted hash of Google's account ID is stored (no email, no name). One Google account links to one profile.
- **Push notifications (Arabic / English):** an optional daily reminder and winner announcements, sent in the language the student uses in the app. On iPhone, push works only after the site is added to the Home Screen.
- **Update bar and smooth transitions:** the app tells the student when a new version is ready, and pages use smooth transitions and skeleton loaders while loading.
- **Offline use:** after a first visit the app shell opens offline. Photos you opened before are cached. The photos are not all preloaded.
- **Backend:** a small Cloudflare Worker with a D1 database handles only the leaderboard, profiles, photos, codes and push subscriptions. The learning content itself (specimens, exams, schemas) is static and works without the backend.

**Built with:** React 19, TypeScript, Vite 7, Tailwind CSS 4, React Router 7, Framer Motion. The microscope field is drawn with the 2D Canvas API (not WebGL). Cloudflare Workers (static assets plus the API in `worker/`) with D1, and Web Push. A static copy is also deployed on Vercel.

## Run locally

Requirements: Node.js 22 LTS and pnpm 11.25.0 (the package manager version is pinned in `package.json`).

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Vite serves the app on `http://localhost:3000`. Create an optimized static build with `corepack pnpm run build`; the output is in `dist/`. The build also writes one HTML page per route (`scripts/route-pages.mjs`) so shared links get their own title.

To preview the Cloudflare deployment locally after a build: `npx wrangler dev` (the D1 database, admin key and push keys are configured in Cloudflare and are not in this repository; without them the leaderboard, photo and push features are disabled locally). To deploy: `npx wrangler deploy` (Cloudflare also builds from `main`). `npm` works too (`npm install`, `npm run dev`).

## Learning modules

- **Microscope** (`/microscope`): browse 996 photomicrographs across histology, botany, microbiology, zoology, blood cells, aquatic life and genetics. Search the collection, save favorites in this browser, or use a blind identification challenge. The blood collection includes sickle-cell, target-cell, eosinophil, reticulocyte, and malaria films. A blood-stain bench previews Wright-Giemsa, Giemsa, new methylene blue, and brilliant cresyl blue color treatments; these are digital filters, not simulated chemical binding or new scientific evidence. The photos load from the local site bundle and appear directly in the microscope field. Objective, focus, illumination, and drag-to-move controls adjust the view. Zoom is illustrative and is not calibrated; selecting 100× displays a note about immersion oil in real microscopy. Photo credits and licenses are listed in `docs/specimen-photo-credits.md` and the microscope's source dialog.
- **Practical exams** (`/exams`): identify randomized specimens from a microscope field, compare two slides and record observations, answer stain-selection questions, order the general thin-film preparation workflow, and keep/export a browser-local notebook. The schema section links directly to the interactive diagram exams.
- **Scientific schemas** (`/schemas`): 198 labelled diagrams, including a heart/circulation plate, generalized leaf section, introductory lab-apparatus plate and typical animal-cell plate, with more being added. Pins are marked "needs review". Study mode connects interactive SVG pins and the structure index to bilingual names, functions, and exam notes. Exam mode hides labels and accepts either a structure click or a typed Arabic/English name, with immediate feedback.
- **Study tools** (`/study`, `/daily`, `/compare`, `/challenge`): specimen flashcards, a daily specimen, side-by-side comparison and a timed challenge.
- **Preferences**: Arabic/English locale and dark/light theme are switchable and stored locally in browser storage.

## Scientific use and limitations

This is an educational viewer, not a live feed from a microscope or a calibrated measurement system. The source photographs come from teaching and research collections; their stain, illumination, framing, and original magnification vary. On-screen objective and focus controls are visual aids. The photographs should not be used for diagnosis.

Each specimen includes an Academic References dialog. Scientific content and source metadata are centralized in `src/data/scientificData.ts` and `src/data/specimenMedia.ts`.

## Licence

The source code is released under the [MIT License](LICENSE) (c) 2026 Ammar Hossam Alqahran. This covers the code only: the specimen photographs and other third-party images keep their own licences, with author and source listed in [`docs/specimen-photo-credits.md`](docs/specimen-photo-credits.md).

## Credits and sources

**Design and code:** Ammar Hossam Alqahran.

**Specimen photographs.** All 996 photomicrographs and the landing-page microscope photo are third-party images bundled locally. Each one is credited to its author with its license and source link in [`docs/specimen-photo-credits.md`](docs/specimen-photo-credits.md). They come mostly from [Wikimedia Commons](https://commons.wikimedia.org/) under CC0, CC BY, CC BY-SA 3.0 and CC BY-SA 4.0 licenses, including photographs by Microrao, Dr Graham Beards, Prof. Osaro Erhabor, Josef Reischig's archive (shared by his heirs), the Department of Pathology at Calicut Medical College, NOAA and others. The author and license are also shown under each specimen inside the app. Images are downscaled to 1000 px wide and stored as WebP; the credits file notes any other change.

**Scientific content.** Specimen descriptions, diagram labels and exam answers cite academic references listed in [`docs/scientific-sources.md`](docs/scientific-sources.md) and in each Academic References dialog. Research notes are in [`docs/research-notes.md`](docs/research-notes.md).

If you are the author of an image used here and want a credit changed or the image removed, please open an issue.

## Project map

```text
src/app/          Routes and persisted locale/theme preferences
src/components/   App shell, controls, reference dialog, logo mark
src/data/         Bilingual specimen/diagram records and source metadata
src/i18n/         Typed English/Arabic interface strings
src/microscope/   Canvas2D microscope field for bundled slide photographs
src/pages/        Landing, microscope, exams, study, daily, challenge, admin, and diagram views
src/schemas/      SVG schema plates and interactive structure pins
public/           Service worker, manifest, logo, character, social preview image, WebP specimen photographs and schema images
worker/           Cloudflare Worker API (leaderboard, profile, photos, codes, Google link, push)
scripts/          Post-build script that writes per-route HTML pages
docs/             Photo credits, sources, research notes and README screenshots
wrangler.jsonc    Cloudflare Workers static-assets config (vercel.json for Vercel)
```

## Routes

- `/` overview and learning pathways
- `/microscope` microscope workspace
- `/exams` practical exam room and lab notebook
- `/schemas` schema atlas
- `/schemas/:diagramId` schema study or exam view
- `/study`, `/daily`, `/compare`, `/challenge` flashcards, daily specimen, comparison, challenge
- `/admin` owner-only photo approval (needs the admin key)
