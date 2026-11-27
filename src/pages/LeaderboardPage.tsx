import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { Avatar } from '../data/avatars';
import { fetchBoard, photoUrl, savedNick, type Entry } from '../lib/leaderboardApi';

// Top players by best score in the 60-second challenge. Only name and avatar are shown (an uploaded photo
// only after the owner approved it). Players can hide themselves in their profile. No emails anywhere.
export function LeaderboardPage() {
  const { locale } = usePreferences();
  const ar = locale === 'ar';
  const [period, setPeriod] = useState<'week' | 'all'>('week');
  const [board, setBoard] = useState<Entry[] | null | undefined>(undefined);
  const me = savedNick().toLowerCase();

  useEffect(() => { let live = true; setBoard(undefined); fetchBoard(period, 50).then((b) => { if (live) setBoard(b); }); return () => { live = false; }; }, [period]);

  return (
    <div className="page leaderboard-page">
      <div className="module-page-head">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" />{ar ? 'المتصدرين' : 'TOP PLAYERS'}</div>
          <h1 className="page-title">{ar ? 'لوحة الشرف' : 'Leaderboard'}</h1>
          <p className="page-intro">{ar ? 'الترتيب بأحسن نتيجة في تحدي الـ 60 ثانية. النقط بتتراجع على السيرفر قبل ما تظهر.' : 'Ranked by best score in the 60-second challenge. Scores are checked on the server before they appear.'}</p>
        </div>
        <div className="module-head-actions">
          <Link to="/challenge" className="button button-primary">{ar ? 'العب التحدي' : 'Play the challenge'}</Link>
        </div>
      </div>
      <div className="chal-tabs" role="tablist">
        <button className={period === 'week' ? 'is-active' : ''} onClick={() => setPeriod('week')}>{ar ? 'الأسبوع' : 'This week'}</button>
        <button className={period === 'all' ? 'is-active' : ''} onClick={() => setPeriod('all')}>{ar ? 'كل الأوقات' : 'All time'}</button>
      </div>
      {board === undefined && <p className="chal-hint">{ar ? 'بنحمّل...' : 'Loading...'}</p>}
      {board === null && <p className="chal-hint">{ar ? 'اللوحة مش متاحة دلوقتي.' : 'The leaderboard is not available right now.'}</p>}
      {board && board.length === 0 && <p className="chal-hint">{ar ? 'لسه محدش سجل. كن الأول!' : 'No scores yet. Be the first!'}</p>}
      {board && board.length > 0 && (
        <ol className="chal-rows lb-page-rows">
          {board.map((e, i) => (
            <li key={`${e.nick}-${i}`} className={e.nick.toLowerCase() === me ? 'is-me' : ''}>
              <span>{i + 1}</span>
              <b><Avatar id={e.avatar} photo={photoUrl(e.photo)} size={30} className="lb-avatar" />{e.nick}</b>
              <em>{e.score}</em>
            </li>
          ))}
        </ol>
      )}
      <p className="chal-hint">{ar ? 'بيظهر الاسم والشخصية بس. تقدر تخفي اسمك من البروفايل.' : 'Only name and character are shown. You can hide your name from your profile.'}</p>
    </div>
  );
}
