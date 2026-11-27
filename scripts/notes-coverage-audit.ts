// Counts slides with and without an explanation note, per department, from the app's own data.
// Run: npx esbuild scripts/notes-coverage-audit.ts --bundle --platform=node --format=esm --outfile=/tmp/audit.mjs && node /tmp/audit.mjs
import { specimens } from '../src/data/scientificData';
import { clinicalNotes } from '../src/data/clinicalNotes';
import { plantNotes } from '../src/data/plantNotes';
const has = (id: string) => Boolean(clinicalNotes[id] || plantNotes[id]);
const by: Record<string, any[]> = {};
for (const s of specimens) (by[s.department] ??= []).push(s);
let tw = 0, tn = 0;
const lines: string[] = [];
for (const [d, list] of Object.entries(by)) {
  const w = list.filter((s) => has(s.id)).length; tw += w; tn += list.length;
  lines.push(`${d}: ${list.length} slides, ${w} with note, ${list.length - w} without`);
}
console.log(lines.join('\n'));
console.log(`TOTAL: ${tn} slides, ${tw} with note, ${tn - tw} without`);
const noteIdsNotSlides = [...Object.keys(clinicalNotes), ...Object.keys(plantNotes)].filter((id) => !specimens.some((s) => s.id === id));
console.log(`note ids that match no slide: ${noteIdsNotSlides.length}`);
console.log('\nSLIDES WITHOUT A NOTE (department | id | English title)');
for (const [d, list] of Object.entries(by)) for (const s of list) if (!has(s.id)) console.log(`${d} | ${s.id} | ${s.title.en}`);
