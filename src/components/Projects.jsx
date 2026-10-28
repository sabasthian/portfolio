import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { useDetail } from '../context/DetailContext.jsx';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Section from './Section.jsx';

const FILTERS = ['all', 'fullstack', 'iot', 'academic'];
const countFor = (f) => (f === 'all' ? projects.length : projects.filter((p) => p.cats.includes(f)).length);

export default function Projects() {
  const { t } = usePrefs();
  const { open } = useDetail();
  const [filter, setFilter] = useState('all');
  const railRef = useRef(null);

  const visible = useMemo(() => projects.filter((p) => filter === 'all' || p.cats.includes(filter)), [filter]);
  const slugs = visible.map((p) => p.slug);

  // jumlah ganjil: kartu unggulan (atau kartu terakhir) dibuat lebar agar grid rapi
  const wideSlug = useMemo(() => {
    if (visible.length % 2 === 0) return null;
    return (visible.find((p) => p.featured) ?? visible[visible.length - 1]).slug;
  }, [visible]);

  useEffect(() => {
    if (railRef.current) railRef.current.scrollLeft = 0;
  }, [filter]);

  return (
    <Section id="projects" label={t('sec.projects')} full>
      <div role="group" aria-label={t('a.filter')} className="mb-[22px] flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className="relative inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-[7px] text-sm font-semibold text-ink transition-colors hover:border-accent aria-pressed:border-primary aria-pressed:text-on-primary"
          >
            {filter === f && (
              <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: 'spring', stiffness: 450, damping: 34 }} />
            )}
            <span className="relative">{t(`f.${f}`)}</span>
            <span className="relative font-mono text-[11.5px] font-medium opacity-70">{countFor(f)}</span>
          </button>
        ))}
      </div>

      {/* desktop: grid 2 kolom · HP: slider geser ke samping */}
      <motion.div
        ref={railRef}
        layoutScroll
        className="no-scrollbar grid gap-[18px] sm:grid-cols-2 max-sm:-mx-4 max-sm:auto-cols-[84%] max-sm:grid-flow-col max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-auto max-sm:scroll-px-4 max-sm:px-4 max-sm:pb-3 max-sm:pt-1"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} wide={p.slug === wideSlug} onOpen={(el) => open('project', p.slug, slugs, el)} />
          ))}
        </AnimatePresence>
      </motion.div>
      {visible.length > 1 && <p className="mt-2.5 font-mono text-xs text-muted sm:hidden">{t('p.hint')}</p>}
    </Section>
  );
}
