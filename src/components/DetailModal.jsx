import { Fragment, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDetail } from '../context/DetailContext.jsx';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { projectsBySlug } from '../data/projects.js';
import { certificatesBySlug } from '../data/certificates.js';
import Gallery from './Gallery.jsx';
import { MedalIcon } from './icons.jsx';
import Tags from './Tags.jsx';

// Jaga fokus keyboard tetap di dalam popup
function trapFocus(e, root) {
  if (!root) return;
  const focusable = root.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function ModalSection({ section }) {
  const { h, p, list, layers, figures } = section;
  return (
    <section className="mt-7">
      <h3 className="mb-2.5 font-mono text-[12.5px] font-medium text-muted">
        <span className="text-accent">//</span> {h}
      </h3>
      {p && <p className="text-[15.5px]">{p}</p>}
      {list && (
        <ul className="list-dash text-[15px]">
          {list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {layers && (
        <dl className="grid grid-cols-[110px_minmax(0,1fr)] overflow-hidden rounded-[10px] border border-line">
          {layers.map(([k, v], i) => {
            const border = i < layers.length - 1 ? 'border-b border-line' : '';
            return (
              <Fragment key={k}>
                <dt className={`flex items-center bg-bg px-3.5 py-2.5 font-mono text-xs text-muted ${border}`}>{k}</dt>
                <dd className={`min-w-0 px-3.5 py-2.5 text-[14.5px] ${border}`}>{v}</dd>
              </Fragment>
            );
          })}
        </dl>
      )}
      {figures && (
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {figures.map(([n, label]) => (
            <div key={label}>
              <strong className="block text-[30px] font-bold leading-[1.1] tracking-[-0.02em] tabular-nums">{n}</strong>
              <span className="text-[13px] text-muted">{label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function CertVisual({ cert, tx }) {
  return (
    <div className="cert-pattern grid min-h-[250px] place-items-center rounded-xl border border-line p-[18px]">
      <div className="flex max-w-full flex-col items-start gap-2.5 rounded-xl border border-line bg-surface p-[22px] shadow-card">
        <MedalIcon size={52} />
        <div className="min-w-0">
          <span className="block font-mono text-[11.5px] text-muted">{cert.issuer}</span>
          <span className="block text-[17px] font-bold leading-snug">{tx.plate}</span>
          <span className="mt-1 block text-[13px] text-muted">{tx.note}</span>
        </div>
      </div>
    </div>
  );
}

export default function DetailModal() {
  const { current, close, step } = useDetail();
  const { t, lang } = usePrefs();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const isOpen = Boolean(current);

  const item = current
    ? (current.kind === 'project' ? projectsBySlug[current.slug] : certificatesBySlug[current.slug])
    : null;
  const tx = item ? item[lang] ?? item.en : null;
  const tags = tx?.tags ?? item?.en.tags ?? [];

  useEffect(() => {
    if (!isOpen) return undefined;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'Tab') trapFocus(e, panelRef.current);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close, step]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,13,11,.58)] backdrop-blur-[3px] md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="m-title"
            className="relative h-full w-full overflow-hidden bg-surface text-ink md:h-[min(700px,calc(100dvh-48px))] md:max-w-[1040px] md:rounded-2xl md:border md:border-line md:shadow-[0_24px_70px_rgba(0,0,0,.28)]"
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label={t('ui.close')}
              className="absolute right-3 top-[calc(env(safe-area-inset-top,0px)+12px)] z-10 grid size-10 place-items-center rounded-full border border-line bg-surface text-2xl leading-none transition-colors hover:border-accent hover:text-accent md:right-3.5 md:top-3.5"
            >
              ×
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${current.kind}-${current.slug}`}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.16 }}
                className="h-full overflow-y-auto md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:overflow-hidden"
              >
                {/* kiri: visual, fakta, tombol */}
                <div className="flex min-h-0 flex-col gap-[18px] border-b border-line bg-bg px-5 pb-5 pt-16 md:overflow-y-auto md:border-b-0 md:border-r md:p-7">
                  {current.kind === 'project' ? (
                    <Gallery project={item} title={tx.title} />
                  ) : (
                    <CertVisual cert={item} tx={tx} />
                  )}
                  <div className="grid grid-cols-2 gap-2.5">
                    {tx.facts.map(([k, v, mono]) => (
                      <div key={k} className="min-w-0 rounded-[10px] border border-line bg-surface px-3.5 py-3">
                        <span className="block font-mono text-[11.5px] text-muted">{k}</span>
                        <span className={`mt-0.5 block break-words ${mono ? 'font-mono text-[13.5px] font-medium' : 'text-[15px] font-semibold'}`}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-2.5">
                    {item.links.map((link) => (
                      <motion.a
                        key={link.kind + link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1 }}
                        className={`flex items-center justify-center gap-2 rounded-[10px] border px-[18px] py-[13px] text-[15px] font-semibold transition-colors ${link.primary ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-ink hover:border-accent hover:text-accent'}`}
                      >
                        {t(`ui.${link.kind}`)} ↗
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* kanan: judul, tag, isi, navigasi */}
                <div className="flex min-h-0 flex-col px-5 pt-6 md:overflow-y-auto md:px-10 md:pt-9">
                  <p className="self-start rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-xs text-accent">{tx.badge}</p>
                  <h2 id="m-title" className="mt-3.5 text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-0.03em] md:pr-9">{tx.title}</h2>
                  <p className="mt-2 text-[16.5px] text-muted">{tx.sub}</p>
                  {tags.length > 0 && <Tags items={tags} className="mt-[18px]" />}
                  {tx.sections.map((section) => <ModalSection key={section.h} section={section} />)}
                  <div className="h-8 shrink-0" />
                  <div className="sticky bottom-0 mt-auto flex items-center justify-between gap-3 border-t border-line bg-surface pb-[calc(14px+env(safe-area-inset-bottom,0px))] pt-3.5 md:pb-3.5">
                    <button type="button" onClick={() => step(-1)} aria-label={t('ui.prevL')} className="py-1.5 text-sm font-semibold transition-colors hover:text-accent">{t('ui.prev')}</button>
                    <span className="font-mono text-[12.5px] tabular-nums text-muted">{current.index + 1} / {current.total}</span>
                    <button type="button" onClick={() => step(1)} aria-label={t('ui.nextL')} className="py-1.5 text-sm font-semibold transition-colors hover:text-accent">{t('ui.next')}</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
