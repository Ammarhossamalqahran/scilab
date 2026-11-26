import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePreferences } from './PreferencesContext';
import { routeMeta, type RouteKey } from './routeMeta';

export function RouteTitle() {
  const { pathname } = useLocation();
  const { locale: lang } = usePreferences();
  useEffect(() => {
    const segment = pathname.split('/')[1] ?? '';
    const key: RouteKey = segment in routeMeta ? (segment as RouteKey) : 'home';
    document.title = routeMeta[key][lang].title;
  }, [pathname, lang]);
  return null;
}
