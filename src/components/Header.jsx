import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons.jsx';

const LINKS = [
  ['about', 'nav.about'],
  ['skills', 'nav.skills'],
  ['projects', 'nav.projects'],
  ['experience', 'nav.experience'],
  ['certifications', 'nav.certs'],
  ['contact', 'nav.contact'],
];
const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];

function IconButton({ label, onClick, className = '', expanded, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={expanded === undefined ? undefined : 'menu'}
      className={`grid size-[34px] place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </button>
  );
}

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = usePrefs();
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // tutup menu HP: Esc, klik di luar, atau layar melebar
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onPointer = (e) => !headerRef.current?.contains(e.target) && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-bg">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <a href="#top" aria-label={t('a.logo')} className="whitespace-nowrap font-mono text-base font-medium">
          &lt;wi<span className="text-accent">//</span>iam&gt;
        </a>

        <div className="flex items-center gap-[22px]">
          <nav aria-label={t('a.sections')} className="hidden gap-5 text-sm font-medium text-muted lg:flex">
            {LINKS.map(([id, key]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className="relative py-1 transition-colors hover:text-ink aria-[current=true]:text-ink"
              >
                {t(key)}
                {active === id && (
                  <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-accent" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div role="group" aria-label={t('a.lang')} className="inline-flex rounded-full border border-line bg-surface p-0.5">
              {['en', 'id'].map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                  className="relative rounded-full px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide text-muted transition-colors aria-pressed:text-on-primary"
                >
                  {lang === code && (
                    <motion.span layoutId="lang-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: 'spring', stiffness: 500, damping: 35 }} />
                  )}
                  <span className="relative">{code}</span>
                </button>
              ))}
            </div>
            <IconButton label={theme === 'dark' ? t('ui.toLight') : t('ui.toDark')} onClick={toggleTheme}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </IconButton>
            <IconButton
              className="lg:hidden"
              label={menuOpen ? t('ui.menuClose') : t('ui.menuOpen')}
              expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="menu"
            aria-label={t('a.sections')}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full border-b border-line bg-bg shadow-card lg:hidden"
          >
            <div className="wrap grid pb-3 pt-1">
              {LINKS.map(([id, key]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3.5 text-[17px] font-semibold last:border-b-0"
                >
                  {t(key)}
                  <span aria-hidden="true" className="font-normal text-muted">→</span>
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
