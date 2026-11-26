import { specimens } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';

export const PROD_URL = 'https://scilab.amarhossam0000.workers.dev';
// Most newer specimens only carry a generic template fact ("This is a single microscope field...").
// The daily pick uses specimens with specific facts when there are enough of them.
const isTemplate = (s: (typeof specimens)[number]) => s.facts.some((f) => /single microscope field/i.test(f.en));
export function dailyPool() {
  const withPhoto = specimens.filter((s) => specimenMedia[s.id]);
  const specific = withPhoto.filter((s) => !isTemplate(s) && s.facts.length > 0);
  return specific.length >= 20 ? specific : withPhoto;
}

// One specimen per local calendar day. 7919 is prime and coprime with the pool size,
// so every specimen appears once before any repeats, and the order looks shuffled.
export function dayNumber(date = new Date()): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}
export function specimenOfTheDay(date = new Date()) {
  const pool = dailyPool();
  return pool[(dayNumber(date) * 7919) % pool.length];
}
