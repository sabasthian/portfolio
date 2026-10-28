import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { ProjectVisual, photosOf } from './Illustrations.jsx';
import { PhotosIcon } from './icons.jsx';
import Tags, { OpenButton } from './Tags.jsx';

// Kartu proyek ("jendela"). forwardRef dibutuhkan AnimatePresence mode="popLayout".
const ProjectCard = forwardRef(function ProjectCard({ project, wide, onOpen }, ref) {
  const { t, lang } = usePrefs();
  const tx = project[lang] ?? project.en;
  const photoCount = photosOf(project).length;

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
      transition={{ duration: 0.3, layout: { type: 'spring', stiffness: 380, damping: 36 } }}
      whileHover={{ y: -3 }}
      className={[
        'group relative flex min-w-0 snap-start flex-col overflow-hidden rounded-[14px] border bg-surface',
        'transition-[box-shadow,border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--line))] hover:shadow-card',
        project.featured ? 'border-[color-mix(in_srgb,var(--accent)_30%,var(--line))]' : 'border-line',
        wide ? 'sm:col-span-2 sm:flex-row' : '',
      ].join(' ')}
    >
      <div
        className={[
          'relative aspect-[8/5] overflow-hidden border-b border-line bg-bg',
          wide ? 'sm:aspect-auto sm:min-h-[240px] sm:w-1/2 sm:shrink-0 sm:border-b-0 sm:border-r' : '',
        ].join(' ')}
      >
        <ProjectVisual project={project} alt={tx.title} className="block size-full transition-transform duration-300 group-hover:scale-[1.025]" />
        {photoCount > 1 && (
          <span aria-hidden="true" className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] font-medium text-white backdrop-blur">
            <PhotosIcon />
            {photoCount}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2 px-5 pb-5 pt-[18px]">
        <p className="font-mono text-[12.5px] text-muted">
          {project.featured && (<><span className="text-accent">{t('p.featured')}</span> · </>)}
          {tx.meta}
        </p>
        <h3 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] transition-colors group-hover:text-accent">{tx.title}</h3>
        <p className="text-[14.5px] text-muted">{tx.desc}</p>
        <Tags items={project.cardTags} className="mt-1" />
        <OpenButton kind="project" slug={project.slug} title={tx.title} onOpen={onOpen} />
      </div>
    </motion.article>
  );
});

export default ProjectCard;
