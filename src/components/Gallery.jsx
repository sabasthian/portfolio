import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { ProjectVisual, photosOf } from './Illustrations.jsx';
import { CloseIcon, ExpandIcon } from './icons.jsx';

// Arah animasi geser: masuk dari kanan saat "berikutnya", dari kiri saat "sebelumnya"
const slide = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

function NavButton({ side, label, onClick, dark = false }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={[
        'absolute top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border text-base shadow-card transition-colors',
        side === 'left' ? 'left-2.5' : 'right-2.5',
        dark
          ? 'border-white/20 bg-black/50 text-white hover:bg-black/70'
          : 'border-line bg-surface/90 text-ink backdrop-blur hover:border-accent hover:text-accent',
      ].join(' ')}
    >
      {side === 'left' ? '←' : '→'}
    </button>
  );
}

// Tampilan layar penuh untuk melihat screenshot dengan jelas
function Lightbox({ photos, index, onIndex, onClose, title }) {
  const { t, pick } = usePrefs();
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const [dir, setDir] = useState(1);
  const many = photos.length > 1;
  const go = (d) => {
    setDir(d);
    onIndex((i) => (i + d + photos.length) % photos.length);
  };

  // simpan handler terbaru di ref supaya listener cukup dipasang sekali
  const actions = useRef({ go, onClose });
  actions.current = { go, onClose };

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);

  // tangkap keyboard lebih dulu supaya popup proyek di belakangnya tidak ikut bereaksi
  useEffect(() => {
    const onKey = (e) => {
      if (!['Escape', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) return;
      e.stopPropagation();
      if (e.key === 'Escape') actions.current.onClose();
      else if (e.key === 'ArrowLeft' && many) actions.current.go(-1);
      else if (e.key === 'ArrowRight' && many) actions.current.go(1);
      else if (e.key === 'Tab') {
        const items = rootRef.current?.querySelectorAll('button');
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [many]);

  const photo = photos[index];
  return (
    <motion.div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[60] flex flex-col bg-[rgba(8,10,9,.94)] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 pb-2 pt-[calc(env(safe-area-inset-top,0px)+12px)] md:px-6" onClick={(e) => e.stopPropagation()}>
        <p className="min-w-0 truncate text-sm text-white/80">
          <span className="font-mono text-white/60">{index + 1} / {photos.length}</span>
          {photo.caption && <span className="ml-3">{pick(photo.caption)}</span>}
        </p>
        <button
          ref={closeRef}
          type="button"
          aria-label={t('ui.closePhoto')}
          onClick={onClose}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 transition-colors hover:bg-white/20"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="relative min-h-0 flex-1 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+16px)] md:px-16">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.caption ? pick(photo.caption) : title}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            drag={many ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, info) => {
              if (info.offset.x < -70) go(1);
              else if (info.offset.x > 70) go(-1);
            }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto block h-full max-h-full w-auto max-w-full cursor-grab select-none rounded-lg object-contain active:cursor-grabbing"
            draggable={false}
          />
        </AnimatePresence>
        {many && (
          <>
            <NavButton side="left" dark label={t('ui.photoPrev')} onClick={() => go(-1)} />
            <NavButton side="right" dark label={t('ui.photoNext')} onClick={() => go(1)} />
          </>
        )}
      </div>
    </motion.div>
  );
}

// Galeri foto di popup proyek: foto utama, panah, caption, thumbnail, dan mode layar penuh
export default function Gallery({ project, title }) {
  const { t, pick } = usePrefs();
  const photos = photosOf(project);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [zoom, setZoom] = useState(false);

  if (!photos.length) {
    return (
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <ProjectVisual project={project} alt={title} className="block h-auto w-full" />
      </div>
    );
  }

  const many = photos.length > 1;
  const photo = photos[index];
  const go = (d) => {
    setDir(d);
    setIndex((i) => (i + d + photos.length) % photos.length);
  };
  const jump = (k) => {
    setDir(k > index ? 1 : -1);
    setIndex(k);
  };

  return (
    <div>
      <div className="group/gal relative aspect-[8/5] overflow-hidden rounded-xl border border-line bg-surface">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.caption ? pick(photo.caption) : title}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            drag={many ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(e, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            onTap={() => setZoom(true)}
            draggable={false}
            className="absolute inset-0 size-full cursor-zoom-in select-none object-cover object-top"
          />
        </AnimatePresence>
        <button
          type="button"
          aria-label={t('ui.zoom')}
          onClick={() => setZoom(true)}
          className="absolute right-2.5 top-2.5 z-10 grid size-9 place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-card backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          <ExpandIcon />
        </button>
        {many && (
          <>
            <NavButton side="left" label={t('ui.photoPrev')} onClick={() => go(-1)} />
            <NavButton side="right" label={t('ui.photoNext')} onClick={() => go(1)} />
          </>
        )}
      </div>

      <p className="mt-2.5 flex items-baseline justify-between gap-3 text-[13px] text-muted">
        <span className="min-w-0">{photo.caption ? pick(photo.caption) : title}</span>
        {many && <span className="shrink-0 font-mono text-xs tabular-nums">{index + 1} / {photos.length}</span>}
      </p>

      {many && (
        <div className="no-scrollbar mt-2.5 flex gap-2 overflow-x-auto pb-1">
          {photos.map((p, k) => (
            <button
              key={p.src}
              type="button"
              aria-label={`${t('ui.photo')} ${k + 1}`}
              aria-current={k === index ? 'true' : undefined}
              onClick={() => jump(k)}
              className="relative h-14 w-[88px] shrink-0 overflow-hidden rounded-lg border-2 border-transparent opacity-60 transition-[opacity,border-color] hover:opacity-100 aria-[current=true]:border-accent aria-[current=true]:opacity-100"
            >
              <img src={p.src} alt="" loading="lazy" decoding="async" className="size-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {zoom && <Lightbox photos={photos} index={index} onIndex={setIndex} onClose={() => setZoom(false)} title={title} />}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}
