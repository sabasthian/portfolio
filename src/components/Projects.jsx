import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { useDetail } from '../context/DetailContext.jsx';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Section from './Section.jsx';

const FILTERS = ['all', 'Featured Projects', 'Learning & Practice'];
const countFor = (f) => (f === 'all' ? projects.length : projects.filter((p) => p.cats.includes(f)).length);

// jumlah proyek per halaman; kalau lebih dari ini, muncul tombol panah
const PER_PAGE = 6;

function PageButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-[38px] place-items-center rounded-full border border-line bg-surface text-base text-ink transition-[border-color,color,opacity] enabled:hover:border-accent enabled:hover:text-accent disabled:cursor-default disabled:opacity-35"
    >
      {children}
    </button>
  );
}

export default function Projects() {
  const { t, pick } = usePrefs();
  const { open } = useDetail();
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const railRef = useRef(null);

  const visible = useMemo(() => projects.filter((p) => filter === 'all' || p.cats.includes(filter)), [filter]);
  const slugs = visible.map((p) => p.slug);

  // bagi proyek menjadi beberapa halaman (PER_PAGE kartu per halaman)
  const pageCount = Math.max(1, Math.ceil(visible.length / PER_PAGE));
  const current = Math.min(page, pageCount - 1);
  const shown = useMemo(() => visible.slice(current * PER_PAGE, (current + 1) * PER_PAGE), [visible, current]);

  // jumlah ganjil: kartu unggulan (atau kartu terakhir) dibuat lebar agar grid rapi
  const wideSlug = useMemo(() => {
    if (shown.length % 2 === 0) return null;
    return (shown.find((p) => p.featured) ?? shown[shown.length - 1]).slug;
  }, [shown]);

  useEffect(() => {
    if (railRef.current) railRef.current.scrollLeft = 0;
  }, [filter, current]);

  // pindah halaman; kalau judul bagian Proyek sudah terlewat, gulir kembali ke atas bagian ini
  const goTo = (n) => {
    setPage(n);
    const section = document.getElementById('projects');
    if (section && section.getBoundingClientRect().top < 0) section.scrollIntoView({ block: 'start' });
  };

  return (
    <Section id="projects" label={t('sec.projects')} full>
      <div role="group" aria-label={t('a.filter')} className="mb-[22px] flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => { setFilter(f); setPage(0); }}
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
                    {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} wide={p.slug === wideSlug} onOpen={(el) => open('project', p.slug, slugs, el)} />
          ))}
        </AnimatePresence>
      </motion.div>
      {shown.length > 1 && <p className="mt-2.5 font-mono text-xs text-muted sm:hidden">{t('p.hint')}</p>}

      {/* tombol halaman: hanya muncul kalau proyek lebih dari PER_PAGE */}
      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <PageButton label={pick({ en: 'Previous projects', id: 'Proyek sebelumnya' })} disabled={current === 0} onClick={() => goTo(current - 1)}>←</PageButton>
          <span className="font-mono text-[12.5px] tabular-nums text-muted">{current + 1} / {pageCount}</span>
          <PageButton label={pick({ en: 'More projects', id: 'Proyek berikutnya' })} disabled={current === pageCount - 1} onClick={() => goTo(current + 1)}>→</PageButton>
        </div>
      )}
    </Section>
  );
}
