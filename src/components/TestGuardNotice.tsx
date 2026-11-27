import { usePreferences } from '../app/PreferencesContext';

// Banner shown during a monitored test, and a cover that hides the questions while the page is not in front.
export function TestGuardNotice({ away, leaves, keys }: { away: boolean; leaves: number; keys: number }) {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  return (
    <>
      <div className="test-guard-note" role="status">
        <b>{ar ? 'الاختبار تحت المراقبة' : 'This test is monitored'}</b>
        <span>{ar ? ' خروجك من الصفحة بيتسجل ويظهر في نتيجتك. النسخ والطباعة متقفلين.' : ' Leaving the page is recorded and shown with your result. Copy and print are off.'}</span>
        {(leaves > 0 || keys > 0) && <em>{ar ? `خرجت ${leaves} مرة${keys ? `، وزرار طباعة الشاشة ${keys}` : ''}` : `Left ${leaves} time${leaves === 1 ? '' : 's'}${keys ? `, PrintScreen key ${keys}` : ''}`}</em>}
      </div>
      {away && (
        <div className="test-guard-cover" role="alert">
          <p>{ar ? 'رجّع الصفحة قدامك عشان تكمل. الخروج اتسجّل.' : 'Bring this page back to continue. Leaving was recorded.'}</p>
        </div>
      )}
    </>
  );
}
