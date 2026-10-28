import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dict } from '../data/i18n.js';

// Menyimpan pilihan bahasa (EN/ID) dan tema (terang/gelap) pengunjung.
const PreferencesContext = createContext(null);

const read = (key) => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const write = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* storage diblokir: abaikan */ }
};
const themeAttr = () => {
  const v = document.documentElement.getAttribute('data-theme');
  return v === 'dark' || v === 'light' ? v : null;
};
const prefersDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

export function PreferencesProvider({ children }) {
  const [lang, setLangState] = useState(() => (read('wi-lang') === 'id' ? 'id' : 'en'));
  const [attrTheme, setAttrTheme] = useState(themeAttr);
  const [systemDark, setSystemDark] = useState(prefersDark);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // ikuti perubahan tema sistem dan atribut data-theme
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const onChange = (e) => setSystemDark(e.matches);
    mq?.addEventListener?.('change', onChange);
    const observer = new MutationObserver(() => setAttrTheme(themeAttr()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      mq?.removeEventListener?.('change', onChange);
      observer.disconnect();
    };
  }, []);

  const theme = attrTheme ?? (systemDark ? 'dark' : 'light');

  const setLang = useCallback((next) => {
    setLangState(next);
    write('wi-lang', next);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    write('wi-theme', next);
  }, [theme]);

  // t('kunci') untuk teks UI, pick({ en, id }) untuk data dua bahasa
  const t = useCallback((key) => dict[key]?.[lang] ?? dict[key]?.en ?? key, [lang]);
  const pick = useCallback((value) => (value && typeof value === 'object' && 'en' in value ? value[lang] ?? value.en : value), [lang]);

  const value = useMemo(() => ({ lang, setLang, theme, toggleTheme, t, pick }), [lang, setLang, theme, toggleTheme, t, pick]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export const usePrefs = () => useContext(PreferencesContext);
