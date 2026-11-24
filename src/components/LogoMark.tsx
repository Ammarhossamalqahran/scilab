export function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <img className={small ? 'logo-mark logo-mark--small' : 'logo-mark'} src="/scilab-logo.svg" alt="SciLab" width="39" height="39" />
  );
}
