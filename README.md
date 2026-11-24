# Faculty of Science Virtual Lab (معمل عمار التعليمي)

A bilingual (Arabic / English) virtual biology lab for Faculty of Science students: a virtual microscope with 35 specimens, practical-exam practice, and interactive anatomy and lab diagrams.

**Live site:** https://scilab-wheat.vercel.app/

> **Designed and built by Ammar Hossam Alqahran.** The interface, layout, interactions, exam logic and bilingual content structure are my own work. The specimen photographs are **not** mine: they come from Wikimedia Commons and other open sources, credited below.

| Home | Practical exams |
| --- | --- |
| ![Home page](docs/screenshots/home.png) | ![Practical exam room](docs/screenshots/exams.png) |

| Study diagrams |
| --- |
| ![Interactive heart diagram](docs/screenshots/schemas.png) |

## Features

- Virtual microscope with 35 built-in photomicrographs, search, favorites and a blind identification challenge.
- Practical exam room: identify specimens, compare slides, stain-selection questions, preparation workflow and a browser-local lab notebook.
- Interactive SVG study diagrams (heart, animal cell, dicot leaf, lab apparatus) with study and exam modes.
- Arabic and English interface, light and dark theme, saved locally in the browser.
- Client-side only: no accounts, backend, database or API keys.

**Built with:** React 19, TypeScript, Vite 7, Tailwind CSS 4, React Router 7, Framer Motion. Deployed on Vercel.

## Run locally

Requirements: Node.js 22 LTS and pnpm 11.25.0 (the package manager version is pinned in `package.json`).

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Vite serves the app on `http://localhost:3000`. Create an optimized static build with `corepack pnpm run build`; the output is in `dist/`.

## Learning modules

- **Microscope** (`/microscope`): browse 35 built-in photomicrographs across blood cells, histology, microorganisms, freshwater life, and plant slides. Search the collection, save favorites in this browser, or use a blind identification challenge. The blood collection includes sickle-cell, target-cell, eosinophil, reticulocyte, and malaria films. A blood-stain bench previews Wright-Giemsa, Giemsa, new methylene blue, and brilliant cresyl blue color treatments; these are digital filters, not simulated chemical binding or new scientific evidence. The photos load from the local site bundle and appear directly in the microscope field. Objective, focus, illumination, and drag-to-move controls adjust the view. Zoom is illustrative and is not calibrated; selecting 100× displays a note about immersion oil in real microscopy. Photo credits and licenses are listed in `docs/specimen-photo-credits.md` and the microscope's source dialog.
- **Practical exams** (`/exams`): identify randomized specimens from a microscope field, compare two slides and record observations, answer stain-selection questions, order the general thin-film preparation workflow, and keep/export a browser-local notebook. The schema section links directly to the interactive diagram exams.
- **Scientific schemas** (`/schemas`): four collections—Zoology/Anatomy, Botany, Chemistry/Lab Apparatus, and Cell Biology—with a heart/circulation plate, generalized leaf section, introductory lab-apparatus plate, and typical animal-cell plate. Study mode connects interactive SVG pins and the structure index to bilingual names, functions, and exam notes. Exam mode hides labels and accepts either a structure click or a typed Arabic/English name, with immediate feedback.
- **Preferences**: Arabic/English locale and dark/light theme are switchable and stored locally in browser storage.

## Scientific use and limitations

This is an educational viewer, not a live feed from a microscope or a calibrated measurement system. The source photographs come from teaching and research collections; their stain, illumination, framing, and original magnification vary. On-screen objective and focus controls are visual aids. The photographs should not be used for diagnosis.

Each specimen includes an Academic References dialog. Scientific content and source metadata are centralized in `src/data/scientificData.ts` and `src/data/specimenMedia.ts`.

## Credits and sources

**Design and code:** Ammar Hossam Alqahran.

**Specimen photographs.** All 35 photomicrographs and the landing-page microscope photo are third-party images bundled locally. Each one is credited to its author with its license and source link in [`docs/specimen-photo-credits.md`](docs/specimen-photo-credits.md). They come mostly from [Wikimedia Commons](https://commons.wikimedia.org/) under CC0, CC BY, CC BY-SA 3.0 and CC BY-SA 4.0 licenses, including photographs by Microrao, Dr Graham Beards, Prof. Osaro Erhabor, Josef Reischig's archive (shared by his heirs), the Department of Pathology at Calicut Medical College, NOAA and others. The author and license are also shown under each specimen inside the app. Some images are cropped or color-filtered for teaching; the credits file notes where.

**Scientific content.** Specimen descriptions, diagram labels and exam answers cite academic references listed in [`docs/scientific-sources.md`](docs/scientific-sources.md) and in each Academic References dialog. Research notes are in [`docs/research-notes.md`](docs/research-notes.md).

If you are the author of an image used here and want a credit changed or the image removed, please open an issue.

## Project map

```text
src/app/          Routes and persisted locale/theme preferences
src/components/   App shell, controls, reference dialog, logo mark
src/data/         Bilingual specimen/diagram records and source metadata
src/i18n/         Typed English/Arabic interface strings
src/microscope/   Canvas2D microscope field for bundled slide photographs
src/pages/        Landing, microscope, atlas, and diagram study/exam views
src/schemas/      SVG schema plates and interactive structure pins
public/           Static branding asset and route manifest
```

## Routes

- `/` overview and learning pathways
- `/microscope` microscope workspace
- `/exams` practical exam room and lab notebook
- `/schemas` schema atlas
- `/schemas/:diagramId` schema study or exam view

`public/manus-routes.json` mirrors this route set for Manus Preview.
