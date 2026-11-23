import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { messages, type Locale, type MessageKey } from '../i18n/messages';

type Theme = 'dark' | 'light';
type Preferences = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
  t: (key: MessageKey) => string;
};

const PreferencesContext = createContext<Preferences | null>(null);

function readStored<T extends string>(key: string, fallback: T, allowed: readonly T[]): T {
  try {
    const value = window.localStorage.getItem(key);
    return allowed.includes(value as T) ? (value as T) : fallback;
  } catch {
    return fallback;
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => readStored('fs-lab-locale', 'ar', ['en', 'ar']));
  const [theme, setTheme] = useState<Theme>(() => readStored('fs-lab-theme', 'light', ['dark', 'light']));

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('fs-lab-locale', locale);
      window.localStorage.setItem('fs-lab-theme', theme);
    } catch {
      // Preferences still work for the current session when storage is unavailable.
    }
  }, [locale, theme]);

  const value = useMemo<Preferences>(() => ({
    locale,
    theme,
    setLocale,
    toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark'),
    t: (key) => messages[locale][key],
  }), [locale, theme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error('usePreferences must be used inside PreferencesProvider');
  return context;
}
