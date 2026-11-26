import type { ReactNode } from 'react';

// Lab-themed avatars drawn as inline SVG (64x64), no images to download. The id is what gets stored.
const SKIN = ['#f1c9a5', '#e0a97c', '#b9794f', '#8a5636'];
type P = { skin: string; hair?: ReactNode; coat: string; extra?: ReactNode; hat?: ReactNode };
function Person({ skin, hair, coat, extra, hat }: P) {
  return (
    <>
      <path d="M8 64c0-14 10-22 24-22s24 8 24 22z" fill={coat} />
      <path d="M26 42l6 10 6-10" fill="#fff" opacity=".9" />
      {extra}
      <rect x="28" y="34" width="8" height="9" rx="3" fill={skin} />
      {hair}
      <circle cx="32" cy="26" r="11" fill={skin} />
      <circle cx="28" cy="26" r="1.4" fill="#2b2b2b" /><circle cx="36" cy="26" r="1.4" fill="#2b2b2b" />
      <path d="M28.5 31q3.5 3 7 0" stroke="#7a3b2e" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {hat}
    </>
  );
}
const Obj = ({ children }: { children: ReactNode }) => <g strokeLinecap="round" strokeLinejoin="round">{children}</g>;

export type AvatarDef = { id: string; bg: string; label: { en: string; ar: string }; art: ReactNode };
export const AVATARS: AvatarDef[] = [
  { id: 'doctor', bg: '#cfe8e4', label: { en: 'Doctor', ar: 'دكتور' }, art: <Person skin={SKIN[0]} coat="#fff" hair={<path d="M21 24c0-9 6-13 11-13s11 4 11 13c-3-5-8-6-11-6s-8 1-11 6z" fill="#3b2a20" />} extra={<path d="M22 44c-2 8 2 12 8 10M42 44c2 8-2 12-8 10" stroke="#2b7a78" strokeWidth="2" fill="none" />} /> },
  { id: 'doctor-f', bg: '#f3d9e4', label: { en: 'Doctor (she)', ar: 'دكتورة' }, art: <Person skin={SKIN[1]} coat="#fff" hair={<path d="M19 36c-3-16 3-26 13-26s16 10 13 26c-2-8-3-14-13-14s-11 6-13 14z" fill="#2a1d18" />} extra={<path d="M22 44c-2 8 2 12 8 10M42 44c2 8-2 12-8 10" stroke="#c0455f" strokeWidth="2" fill="none" />} /> },
  { id: 'nurse', bg: '#d8e9fb', label: { en: 'Nurse', ar: 'ممرضة' }, art: <Person skin={SKIN[0]} coat="#6fb1e6" hair={<path d="M21 28c0-8 5-11 11-11s11 3 11 11c-3-4-8-5-11-5s-8 1-11 5z" fill="#6b4a2b" />} hat={<g><path d="M22 18c2-7 18-7 20 0z" fill="#fff" /><path d="M32 11v6M29 14h6" stroke="#e0364d" strokeWidth="2" /></g>} /> },
  { id: 'nurse-m', bg: '#d6f0e0', label: { en: 'Nurse (he)', ar: 'ممرض' }, art: <Person skin={SKIN[2]} coat="#4fb286" hair={<path d="M21 24c0-9 6-12 11-12s11 3 11 12c-3-5-8-6-11-6s-8 1-11 6z" fill="#1d1612" />} extra={<path d="M40 48h6M43 45v6" stroke="#fff" strokeWidth="2" />} /> },
  { id: 'labtech', bg: '#e6f3d0', label: { en: 'Lab tech', ar: 'فني معمل' }, art: <Person skin={SKIN[1]} coat="#fff" hair={<path d="M21 24c0-9 6-12 11-12s11 3 11 12c-3-5-8-6-11-6s-8 1-11 6z" fill="#3a2a1d" />} hat={<g><rect x="20" y="20" width="24" height="4" rx="2" fill="#4a4a4a" /><rect x="22" y="17" width="8" height="8" rx="3" fill="#bfe6ff" stroke="#4a4a4a" strokeWidth="1.5" /><rect x="34" y="17" width="8" height="8" rx="3" fill="#bfe6ff" stroke="#4a4a4a" strokeWidth="1.5" /></g>} /> },
  { id: 'scientist', bg: '#e8dcf7', label: { en: 'Scientist', ar: 'عالمة' }, art: <Person skin={SKIN[0]} coat="#fff" hair={<g><circle cx="32" cy="12" r="5" fill="#4a2e1c" /><path d="M21 26c0-9 5-13 11-13s11 4 11 13c-3-5-8-6-11-6s-8 1-11 6z" fill="#4a2e1c" /></g>} extra={<g><rect x="42" y="44" width="8" height="12" rx="2" fill="#9be3c4" stroke="#2b7a78" strokeWidth="1.5" /></g>} /> },
  { id: 'professor', bg: '#f5e6c9', label: { en: 'Professor', ar: 'بروفيسور' }, art: <Person skin={SKIN[0]} coat="#7c8aa5" hair={<path d="M21 26c-2-10 4-15 11-15s13 5 11 15c-2-6-6-8-11-8s-9 2-11 8z" fill="#d9d9d9" />} hat={<g stroke="#333" strokeWidth="1.6" fill="none"><circle cx="28" cy="26" r="4" /><circle cx="36" cy="26" r="4" /><path d="M32 26h0" /></g>} extra={<path d="M28 44l4 3 4-3-1 5h-6z" fill="#b32f3f" />} /> },
  { id: 'student', bg: '#fbe0c8', label: { en: 'Student', ar: 'طالب' }, art: <Person skin={SKIN[3]} coat="#e5a14a" hair={<path d="M21 26c0-8 5-11 11-11s11 3 11 11c-3-4-8-5-11-5s-8 1-11 5z" fill="#15100c" />} hat={<g><path d="M14 17l18-8 18 8-18 8z" fill="#222" /><path d="M24 22v6c4 3 12 3 16 0v-6" fill="#333" /><path d="M48 18v8" stroke="#e5a14a" strokeWidth="2" /></g>} /> },
  { id: 'surgeon', bg: '#cfe9e0', label: { en: 'Surgeon', ar: 'جرّاح' }, art: <Person skin={SKIN[1]} coat="#3fa99b" hair={null} hat={<g><path d="M20 24c0-9 5-13 12-13s12 4 12 13z" fill="#2f8f82" /><path d="M23 29h18v8c-4 3-14 3-18 0z" fill="#e8f7f4" stroke="#bfe0da" strokeWidth="1" /></g>} /> },
  { id: 'microscope', bg: '#dfe7ee', label: { en: 'Microscope', ar: 'ميكروسكوب' }, art: <Obj><path d="M24 54h24M28 54c0-8 4-10 8-10" stroke="#34495e" strokeWidth="4" fill="none" /><rect x="29" y="12" width="8" height="22" rx="3" transform="rotate(25 33 23)" fill="#5b7a99" /><path d="M24 36l14-5" stroke="#34495e" strokeWidth="4" /><circle cx="42" cy="40" r="9" fill="none" stroke="#34495e" strokeWidth="4" /></Obj> },
  { id: 'cell', bg: '#d9f0e3', label: { en: 'Cell', ar: 'خلية' }, art: <Obj><ellipse cx="32" cy="33" rx="22" ry="19" fill="#8fd6a8" stroke="#2f8f58" strokeWidth="3" /><circle cx="30" cy="31" r="8" fill="#5d4fb3" /><circle cx="28" cy="29" r="2.5" fill="#a89be0" /><circle cx="46" cy="42" r="3" fill="#e57b4f" /><circle cx="19" cy="42" r="2.5" fill="#e5c14f" /></Obj> },
  { id: 'dna', bg: '#e4e1fa', label: { en: 'DNA', ar: 'DNA' }, art: <Obj><path d="M22 8c0 14 20 16 20 24S22 42 22 56M42 8c0 14-20 16-20 24s20 10 20 24" stroke="#5b4fc4" strokeWidth="4" fill="none" /><path d="M25 16h14M24 32h16M25 48h14" stroke="#e46a8a" strokeWidth="3" /></Obj> },
  { id: 'flask', bg: '#d5f1f5', label: { en: 'Flask', ar: 'دورق' }, art: <Obj><path d="M26 10h12M28 10v16L14 50c-2 4 0 6 4 6h28c4 0 6-2 4-6L36 26V10" fill="#fff" stroke="#2b7a8a" strokeWidth="3" /><path d="M19 44h26l5 8c1 2 0 4-3 4H17c-3 0-4-2-3-4z" fill="#4fc4b0" /><circle cx="30" cy="38" r="2" fill="#fff" /></Obj> },
  { id: 'leaf', bg: '#dcf0cc', label: { en: 'Leaf', ar: 'ورقة' }, art: <Obj><path d="M14 50C10 26 28 10 52 12c2 24-12 42-34 40z" fill="#58b368" stroke="#2f7d3f" strokeWidth="3" /><path d="M16 50C26 38 34 28 44 20M28 38l-1 8M36 30l7 1" stroke="#2f7d3f" strokeWidth="2.5" fill="none" /></Obj> },
  { id: 'bacteria', bg: '#f1e3f5', label: { en: 'Bacteria', ar: 'بكتيريا' }, art: <Obj><rect x="12" y="24" width="40" height="18" rx="9" fill="#c98fd9" stroke="#8a3fa3" strokeWidth="3" /><path d="M10 22l-4-6M18 20l-2-7M30 19v-8M42 20l2-7M54 22l4-6M10 44l-4 6M30 45v8M54 44l4 6" stroke="#8a3fa3" strokeWidth="2.5" /><circle cx="26" cy="33" r="2" fill="#fff" /><circle cx="38" cy="33" r="2" fill="#fff" /></Obj> },
  { id: 'brain', bg: '#fbdde4', label: { en: 'Brain', ar: 'مخ' }, art: <Obj><path d="M32 14c-6-6-18-2-18 8-6 2-6 12 0 14-2 8 8 14 14 10 2 2 6 2 8 0 6 4 16-2 14-10 6-2 6-12 0-14 0-10-12-14-18-8z" fill="#f2a2b6" stroke="#c0455f" strokeWidth="3" /><path d="M32 16v34M22 26c4 0 6 2 8 4M42 26c-4 0-6 2-8 4M22 40c4 0 6-2 8-4M42 40c-4 0-6-2-8-4" stroke="#c0455f" strokeWidth="2.5" fill="none" /></Obj> },
  { id: 'heart', bg: '#fddada', label: { en: 'Heart', ar: 'قلب' }, art: <Obj><path d="M32 54C8 38 8 18 20 14c6-2 10 2 12 6 2-4 6-8 12-6 12 4 12 24-12 40z" fill="#e5484d" stroke="#a82a30" strokeWidth="3" /><path d="M20 26c0-4 3-6 6-5" stroke="#fff" strokeWidth="3" fill="none" opacity=".7" /></Obj> },
  { id: 'bone', bg: '#ece8dd', label: { en: 'Bone', ar: 'عظمة' }, art: <Obj><path d="M18 20a6 6 0 1 1 8-6l20 20a6 6 0 1 1 6 8 6 6 0 1 1-8 6L24 28a6 6 0 1 1-6-8z" fill="#f4efe2" stroke="#a89a7a" strokeWidth="3" transform="translate(0 -2)" /></Obj> },
  { id: 'beetle', bg: '#e1efd2', label: { en: 'Beetle', ar: 'خنفساء' }, art: <Obj><ellipse cx="32" cy="38" rx="15" ry="18" fill="#3f8f5a" stroke="#1f5a37" strokeWidth="3" /><circle cx="32" cy="17" r="7" fill="#2a2a2a" /><path d="M32 22v32M24 12l-4-6M40 12l4-6M17 32l-8-3M47 32l8-3M17 44l-8 4M47 44l8 4" stroke="#1f5a37" strokeWidth="2.5" /></Obj> },
  { id: 'fish', bg: '#d5ecf7', label: { en: 'Fish', ar: 'سمكة' }, art: <Obj><path d="M8 32c10-16 28-16 38 0-10 16-28 16-38 0z" fill="#4fa6e0" stroke="#256ba0" strokeWidth="3" /><path d="M46 32l12-10v20z" fill="#4fa6e0" stroke="#256ba0" strokeWidth="3" /><circle cx="20" cy="29" r="2.5" fill="#fff" /><circle cx="20" cy="29" r="1" fill="#222" /></Obj> },
  { id: 'frog', bg: '#dcf2d0', label: { en: 'Frog', ar: 'ضفدعة' }, art: <Obj><ellipse cx="32" cy="40" rx="22" ry="16" fill="#6cc46a" stroke="#2f7d3f" strokeWidth="3" /><circle cx="20" cy="24" r="8" fill="#6cc46a" stroke="#2f7d3f" strokeWidth="3" /><circle cx="44" cy="24" r="8" fill="#6cc46a" stroke="#2f7d3f" strokeWidth="3" /><circle cx="20" cy="24" r="3" fill="#222" /><circle cx="44" cy="24" r="3" fill="#222" /><path d="M22 44q10 6 20 0" stroke="#2f7d3f" strokeWidth="3" fill="none" /></Obj> },
  { id: 'mushroom', bg: '#f7e3d6', label: { en: 'Mushroom', ar: 'فطر' }, art: <Obj><path d="M10 34c0-14 10-22 22-22s22 8 22 22z" fill="#e5584d" stroke="#a82a30" strokeWidth="3" /><path d="M24 34h16v14c0 6-16 6-16 0z" fill="#f4ead4" stroke="#b9a77c" strokeWidth="3" /><circle cx="22" cy="26" r="3" fill="#fff" /><circle cx="36" cy="22" r="3" fill="#fff" /><circle cx="44" cy="30" r="2.5" fill="#fff" /></Obj> },
  { id: 'atom', bg: '#dfe3fb', label: { en: 'Atom', ar: 'ذرة' }, art: <Obj><g fill="none" stroke="#4a55c9" strokeWidth="3"><ellipse cx="32" cy="32" rx="24" ry="9" /><ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(60 32 32)" /><ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(120 32 32)" /></g><circle cx="32" cy="32" r="5" fill="#e5484d" /></Obj> },
];
export const DEFAULT_AVATAR = 'cell';
const byId = new Map(AVATARS.map((a) => [a.id, a]));
export const isAvatar = (id: string | null | undefined): id is string => !!id && byId.has(id);

export function Avatar({ id, size = 36, className = '', photo }: { id?: string | null; size?: number; className?: string; photo?: string | null }) {
  if (photo) return <img className={`avatar avatar-photo ${className}`} src={photo} width={size} height={size} alt="" />;
  const a = byId.get(id ?? '') ?? byId.get(DEFAULT_AVATAR)!;
  return (
    <svg className={`avatar ${className}`} viewBox="0 0 64 64" width={size} height={size} role="img" aria-label={a.label.en} style={{ background: a.bg }}>
      {a.art}
    </svg>
  );
}
