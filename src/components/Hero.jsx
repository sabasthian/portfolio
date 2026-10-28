import { motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { profile } from '../data/profile.js';
import CodeCard from './CodeCard.jsx';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0.3, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = usePrefs();
  const [before, strong, after] = t('hero.intro');

  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="hero-dots relative isolate pb-[60px] pt-14 md:pb-[76px] md:pt-20"
    >
      <motion.p variants={item} className="font-mono text-[13px] text-muted">
        {profile.role} · {profile.location}
      </motion.p>
      <motion.h1 variants={item} className="mt-[18px] text-[clamp(40px,7.4vw,78px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
        {profile.name}
      </motion.h1>

      <div className="mt-[30px] grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-12">
        <motion.div variants={item} className="min-w-0">
          <p className="max-w-[52ch] text-[clamp(17px,2vw,19px)] text-muted">
            {before}<strong className="font-semibold text-ink">{strong}</strong>{after}
          </p>
          <p className="mt-[26px] inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-3.5 text-sm font-medium">
            <span aria-hidden="true" className="size-2 shrink-0 animate-ping-soft rounded-full bg-ok" />
            {t('hero.status')}
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-x-6 gap-y-3">
            <motion.a
              href="/CV_William_Sabasthian_Hutapea_ATS.pdf"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-on-primary"
            >
              {t('hero.cta')} <span aria-hidden="true">→</span>
            </motion.a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="border-b border-line pb-0.5 text-[15px] font-semibold transition-colors hover:border-accent hover:text-accent">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="border-b border-line pb-0.5 text-[15px] font-semibold transition-colors hover:border-accent hover:text-accent">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
        <motion.div variants={item} className="min-w-0">
          <CodeCard />
        </motion.div>
      </div>
    </motion.section>
  );
}
