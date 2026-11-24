export function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? 'logo-mark logo-mark--small' : 'logo-mark'} viewBox="0 0 44 44" role="img" aria-label="Ammar's Workshop mark">
      <rect x=".5" y=".5" width="43" height="43" rx="10" fill="#0b0b0b" stroke="#3a3a3a" />
      <circle cx="22" cy="22" r="13" fill="none" stroke="#fff" strokeWidth="2" />
      <path d="M15 29 22 12l7 17M17.6 24h8.8" fill="none" stroke="#7bdec3" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
