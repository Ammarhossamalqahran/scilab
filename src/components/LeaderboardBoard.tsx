import { useEffect, useState } from 'react';
import { usePreferences } from '../app/PreferencesContext';
import { FramedAvatar } from './FramedAvatar';
import { fetchBoard, photoUrl, type Entry, type Mode } from '../lib/leaderboardApi';

// Leaderboard for one game mode. `refreshKey` changes after a score is posted.
export function LeaderboardBoard({ mode, refreshKey }: { mode: Mode; refreshKey: string }) {
  const { locale: lang } = usePreferences();
  const ar = lang === 'ar';
  const [period, setPeriod] = useState<'week' | 'all'>('week');
  const [board, setBoard] = useState<Entry[] | null>(null);
  const [boardDone, setBoardDone] = useState(false);
  useEffect(() => { let live = true; fetchBoard(period, mode).then((b) => { if (live) { setBoard(b); setBoardDone(true); } }); return () => { live = false; }; }, [period, mode, refreshKey]);
  return (
    <>
      {!boardDone && (
        <section className="chal-board" aria-busy="true" aria-label={ar ? 'بنحمّل لوحة الشرف' : 'Loading the leaderboard'}>
          <div className="skeleton-line skeleton-title" />
          <div className="skeleton-rows">{[0, 1, 2, 3, 4].map((i) => <div key={i} className="skeleton-line" />)}</div>
        </section>
      )}
      {board !== null && (
        <section className="chal-board">
          <div className="chal-board-head">
            <h2 className="chal-sub">{ar ? 'لوحة الشرف' : 'Leaderboard'}</h2>
            <div className="chal-tabs">
              <button className={period === 'week' ? 'is-active' : ''} onClick={() => setPeriod('week')}>{ar ? 'الأسبوع' : 'This week'}</button>
              <button className={period === 'all' ? 'is-active' : ''} onClick={() => setPeriod('all')}>{ar ? 'كل الأوقات' : 'All time'}</button>
            </div>
          </div>
          {board.length === 0 ? <p className="chal-hint">{ar ? 'لسه محدش سجل. كن الأول!' : 'No scores yet. Be the first!'}</p> : (
            <ol className="chal-rows">{board.map((e, i) => <li key={`${e.nick}-${i}`} className={`${i === 0 ? 'is-doctor' : ''}${e.owner ? ' is-owner' : ''}`.trim()}><span>{i + 1}</span><b><span className="lb-framed"><FramedAvatar frame={e.frame || 'gold'} id={e.avatar} photo={photoUrl(e.photo)} size={34} full /></span>{e.nick}{e.owner ? <svg className="owner-badge" viewBox="0 0 24 24" width="18" height="18" role="img" aria-label={ar ? 'مالك الموقع' : 'Site owner'}><path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z" fill="#d4a017" stroke="#8a6508" strokeWidth="1" /><path d="M12 7l1.6 3.4 3.6.4-2.7 2.5.8 3.6L12 15l-3.3 1.9.8-3.6L6.8 10.8l3.6-.4z" fill="#fff6d6" /></svg> : null}</b><em>{e.score}</em></li>)}</ol>
          )}
          <p className="chal-hint">{ar ? 'النقط بتتراجع على السيرفر قبل ما تظهر.' : 'Scores are checked on the server before they appear.'}</p>
        </section>
      )}

    </>
  );
}
