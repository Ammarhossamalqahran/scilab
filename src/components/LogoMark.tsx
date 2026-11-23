export function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? 'logo-mark logo-mark--small' : 'logo-mark'} viewBox="0 0 44 44" role="img" aria-label="Faculty of Science Virtual Lab mark">
      <rect x="1" y="1" width="42" height="42" rx="12" fill="currentColor" opacity=".1" />
      <circle cx="22" cy="22" r="12.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="22" cy="22" r="4" fill="currentColor" />
      <path d="M22 3v8M22 33v8M3 22h8M33 22h8M8.6 8.6l5.7 5.7m15.4 15.4 5.7 5.7m0-26.8-5.7 5.7m-15.4 15.4-5.7 5.7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M14.5 22h15" stroke="currentColor" strokeWidth="1" opacity=".55" />
    </svg>
  );
}
