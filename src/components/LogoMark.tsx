export function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? 'logo-mark logo-mark--small' : 'logo-mark'} viewBox="0 0 44 44" role="img" aria-label="Ammar's Workshop mark">
      <rect x="1" y="1" width="42" height="42" rx="13" fill="currentColor" />
      <path d="M11.5 34 22 9.5 32.5 34" fill="none" stroke="var(--bg)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="26.5" r="3.6" fill="var(--bg)" />
      <circle cx="22" cy="26.5" r="1.3" fill="currentColor" />
    </svg>
  );
}
