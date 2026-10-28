import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { useDetail } from '../context/DetailContext.jsx';
import { certificates } from '../data/certificates.js';
import CertificateCard from './CertificateCard.jsx';
import Section from './Section.jsx';

function ArrowButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-controls="cert-rail"
      disabled={disabled}
      onClick={onClick}
      className="grid size-[38px] place-items-center rounded-full border border-line bg-surface text-base text-ink transition-[border-color,color,opacity] enabled:hover:border-accent enabled:hover:text-accent disabled:cursor-default disabled:opacity-35"
    >
      {children}
    </button>
  );
}

export default function Certificates() {
  const { t } = usePrefs();
  const { open } = useDetail();
  const reduceMotion = useReducedMotion();
  const railRef = useRef(null);
  const trackRef = useRef(null);
  const frame = useRef(0);
  const [rail, setRail] = useState({ atStart: true, atEnd: false, thumb: 40, offset: 0 });
  const slugs = certificates.map((c) => c.slug);

  // posisi tombol panah + bar progres geser
  const update = useCallback(() => {
    const el = railRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const max = el.scrollWidth - el.clientWidth;
    const width = track.clientWidth;
    const thumb = Math.max(28, width * (el.clientWidth / Math.max(el.scrollWidth, 1)));
    setRail({
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= max - 2,
      thumb,
      offset: max > 0 ? (el.scrollLeft / max) * (width - thumb) : 0,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(update);
  };

  const scrollByCard = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 18;
    const step = (card?.getBoundingClientRect().width ?? el.clientWidth * 0.8) + gap;
    el.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <Section id="certifications" label={t('sec.certs')} full>
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-mono text-[12.5px] text-muted">{t('cert.count')}</p>
        <div className="flex gap-2">
          <ArrowButton label={t('a.left')} disabled={rail.atStart} onClick={() => scrollByCard(-1)}>←</ArrowButton>
          <ArrowButton label={t('a.right')} disabled={rail.atEnd} onClick={() => scrollByCard(1)}>→</ArrowButton>
        </div>
      </div>

      <div
        id="cert-rail"
        ref={railRef}
        onScroll={onScroll}
        className="no-scrollbar -mb-2 grid auto-cols-[max(260px,calc((100%_-_36px)/2.6))] grid-flow-col gap-[18px] overflow-x-auto overscroll-x-contain px-0.5 pb-[22px] pt-1.5 snap-x snap-mandatory max-sm:-mx-4 max-sm:auto-cols-[84%] max-sm:scroll-px-4 max-sm:px-4"
      >
        {certificates.map((cert) => (
          <CertificateCard key={cert.slug} cert={cert} onOpen={(el) => open('cert', cert.slug, slugs, el)} />
        ))}
      </div>

      <div ref={trackRef} aria-hidden="true" className="relative h-[3px] overflow-hidden rounded-[3px] bg-line">
        <span className="absolute inset-y-0 left-0 rounded-[3px] bg-accent" style={{ width: rail.thumb, transform: `translateX(${rail.offset}px)` }} />
      </div>
    </Section>
  );
}
