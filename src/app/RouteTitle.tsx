import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePreferences } from './PreferencesContext';
import { routeMeta } from './routeMeta';

export function RouteTitle() {
  const { pathname } = useLocation();
  const { locale: lang } = usePreferences();
  useEffect(() => {
    const key = pathname.startsWith('/study') ? 'study' : pathname.startsWith('/schemas') ? 'schemas' : pathname.startsWith('/microscope') ? 'microscope' : pathname.startsWith('/exams') ? 'exams' : 'home';
    document.title = routeMeta[key][lang].title;
  }, [pathname, lang]);
  return null;
}
