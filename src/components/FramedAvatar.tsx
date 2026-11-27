import { useId } from 'react';
import { Avatar } from '../data/avatars';
import { frameSpec, type Metal } from '../data/frames';

// Original frame artwork (SVG, drawn for SciLab): layered metal rings, beads, laurels, wings and a crown.
// Tiers: bronze, silver, gold, diamond, ruby. Not based on any game's assets.
const METALS: Record<Metal, { light: string; mid: string; dark: string; glow: string }> = {
  bronze: { light: '#f2c29a', mid: '#b06a32', dark: '#6b3a16', glow: '#d98b4a' },
  silver: { light: '#ffffff', mid: '#aab6c0', dark: '#5d6b77', glow: '#cfe3f2' },
  gold: { light: '#fff0a8', mid: '#d9a41a', dark: '#7a5400', glow: '#ffd24a' },
  diamond: { light: '#e9fbff', mid: '#55c7f0', dark: '#1d5f9e', glow: '#7fe6ff' },
  ruby: { light: '#ffc2cf', mid: '#d41f48', dark: '#6e0a22', glow: '#ff5b7d' },
  emerald: { light: '#c8ffe6', mid: '#16a870', dark: '#075a3a', glow: '#3dffb0' },
  amethyst: { light: '#f0defe', mid: '#9a55e0', dark: '#40176e', glow: '#c48bff' },
};

const leaf = (a: number, r: number, side: 1 | -1) => {
  const rad = (a * Math.PI) / 180;
  const x = 50 + Math.cos(rad) * r, y = 50 + Math.sin(rad) * r;
  return { x, y, rot: a + 90 * side };
};

export function FramedAvatar({ frame, id, photo, size = 36, full = false }: { frame: string; id?: string | null; photo?: string | null; size?: number; full?: boolean }) {
  const spec = frameSpec(frame);
  const m = METALS[spec.metal];
  const uid = useId().replace(/:/g, '');
  const fancy = full || size >= 44; // wings, laurels and crown need room; small sizes get the ring only
  const wide = fancy && (spec.deco === 'wings' || spec.deco === 'wings-crown');
  const rays = fancy && (spec.deco === 'rays' || spec.deco === 'rays-crown');
  const box = rays ? { x: -14, y: -16, w: 128, h: 130 } : wide ? { x: -30, y: -14, w: 160, h: 128 } : fancy ? { x: -6, y: -14, w: 112, h: 120 } : { x: 0, y: 0, w: 100, h: 100 };
  const scale = size / (wide ? 100 : fancy ? 100 : 100); // the ring itself is always `size` wide; decoration spills outside
  const outerW = (box.w * scale), outerH = (box.h * scale);
  const left = -(box.x * scale) , top = -(box.y * scale);
  return (
    <span className="framed-avatar" style={{ width: outerW, height: outerH, display: 'inline-block', position: 'relative', flex: 'none', verticalAlign: 'middle' }}>
      <span style={{ position: 'absolute', left: left + size * 0.17, top: top + size * 0.17, width: size * 0.66, height: size * 0.66, borderRadius: '50%', overflow: 'hidden', display: 'block' }}>
        <Avatar id={id} photo={photo} size={Math.round(size * 0.66)} className="framed-avatar-img" />
      </span>
      <svg viewBox={`${box.x} ${box.y} ${box.w} ${box.h}`} width={outerW} height={outerH} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', filter: spec.glow && fancy ? `drop-shadow(0 0 4px ${m.glow})` : undefined }} aria-hidden="true">
        <defs>
          <linearGradient id={`m${uid}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={m.light} /><stop offset=".45" stopColor={m.mid} /><stop offset=".6" stopColor={m.light} /><stop offset="1" stopColor={m.dark} /></linearGradient>
          <linearGradient id={`d${uid}`} x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor={m.dark} /><stop offset="1" stopColor={m.mid} /></linearGradient>
        </defs>
        {fancy && (spec.deco === 'wings' || spec.deco === 'wings-crown') && [1, -1].map((s) => (
          <g key={s} transform={s === 1 ? '' : 'translate(100 0) scale(-1 1)'}>
            <path d="M92 50 C108 34 124 30 132 14 C130 36 124 52 112 62 C122 60 128 56 134 50 C128 70 112 80 94 76 Z" fill={`url(#d${uid})`} stroke={m.dark} strokeWidth="1" />
            <path d="M92 56 C106 46 118 46 126 36 C124 52 116 62 104 68 C112 68 118 66 124 62 C118 76 106 82 92 80 Z" fill={`url(#m${uid})`} stroke={m.dark} strokeWidth=".8" />
            <path d="M92 64 C102 58 110 58 116 52 C113 64 106 72 94 74 Z" fill={m.light} opacity=".75" />
          </g>
        ))}
        {fancy && (spec.deco === 'laurel' || spec.deco === 'laurel-crown') && [1, -1].map((s) => (
          <g key={s}>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = s === 1 ? 20 + i * 24 : 160 - i * 24; const l = leaf(a, 51, s === 1 ? 1 : -1);
              return <ellipse key={i} cx={l.x} cy={l.y} rx="3.6" ry="8.5" fill={`url(#m${uid})`} stroke={m.dark} strokeWidth=".6" transform={`rotate(${l.rot} ${l.x} ${l.y})`} />;
            })}
          </g>
        ))}
        {rays && Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * 360; const long = i % 2 === 0; return <path key={i} d={`M-2.4 -46 L0 -${long ? 62 : 55} L2.4 -46 Z`} transform={`translate(50 50) rotate(${a})`} fill={`url(#m${uid})`} stroke={m.dark} strokeWidth=".6" />; })}
        {/* ring: dark base, metal body, bright inner line */}
        <circle cx="50" cy="50" r="45" fill="none" stroke={m.dark} strokeWidth="9" />
        <circle cx="50" cy="50" r="45" fill="none" stroke={`url(#m${uid})`} strokeWidth="7" />
        <circle cx="50" cy="50" r="40" fill="none" stroke={m.light} strokeWidth="1.2" opacity=".9" />
        <circle cx="50" cy="50" r="41.5" fill="none" stroke={m.dark} strokeWidth="1" />
        {(spec.deco === 'beads' || spec.beads) && Array.from({ length: 16 }, (_, i) => { const a = (i / 16) * Math.PI * 2; return <circle key={i} cx={50 + Math.cos(a) * 45} cy={50 + Math.sin(a) * 45} r="1.6" fill={m.light} stroke={m.dark} strokeWidth=".4" />; })}
        {/* four diamond studs */}
        {fancy && [0, 90, 180, 270].map((a) => { const r = (a * Math.PI) / 180; return <path key={a} d="M0 -4 L3 0 L0 4 L-3 0 Z" transform={`translate(${50 + Math.cos(r) * 45} ${50 + Math.sin(r) * 45}) rotate(${a})`} fill={m.light} stroke={m.dark} strokeWidth=".7" />; })}
        {fancy && (spec.deco === 'wings-crown' || spec.deco === 'crown' || spec.deco === 'laurel-crown' || spec.deco === 'rays-crown') && (
          <g transform="translate(50 6)">
            <path d="M-14 8 L-14 -4 L-7 3 L0 -9 L7 3 L14 -4 L14 8 Z" fill={`url(#m${uid})`} stroke={m.dark} strokeWidth="1" />
            <circle cx="0" cy="-9" r="2" fill={m.light} /><circle cx="-14" cy="-4" r="1.6" fill={m.light} /><circle cx="14" cy="-4" r="1.6" fill={m.light} />
            <rect x="-14" y="6" width="28" height="3" rx="1" fill={m.dark} />
          </g>
        )}
      </svg>
    </span>
  );
}
