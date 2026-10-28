import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { ArrowUpIcon } from './icons.jsx';

// Muncul setelah hero tidak terlihat lagi.
export default function BackToTop() {
  const { t } = usePrefs();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label={t('ui.top')}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -2 }}
          className="fixed bottom-[calc(16px+env(safe-area-inset-bottom,0px))] right-[max(16px,env(safe-area-inset-right,0px))] z-30 grid size-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-card transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUpIcon />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
