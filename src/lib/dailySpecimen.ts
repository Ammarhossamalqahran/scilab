import { specimens } from '../data/scientificData';
import { specimenMedia } from '../data/specimenMedia';

// One specimen per local calendar day. 7919 is prime and coprime with the pool size,
// so every specimen appears once before any repeats, and the order looks shuffled.
export function dayNumber(date = new Date()): number {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}
export function specimenOfTheDay(date = new Date()) {
  const pool = specimens.filter((s) => specimenMedia[s.id]);
  return pool[(dayNumber(date) * 7919) % pool.length];
}
