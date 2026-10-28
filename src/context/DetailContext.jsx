import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '../data/projects.js';
import { certificates } from '../data/certificates.js';

// Mengatur popup detail proyek/sertifikat + link langsung (#project-krb, #cert-git).
const DetailContext = createContext(null);
const HASH_RE = /^#(project|cert)-([a-z]+)$/;
const allSlugs = { project: projects.map((p) => p.slug), cert: certificates.map((c) => c.slug) };

const replaceHash = (hash) => {
  try {
    history.replaceState(null, '', hash ? `#${hash}` : location.pathname + location.search);
  } catch { /* sandbox tertentu menolak replaceState */ }
};

export function DetailProvider({ children }) {
  const [state, setState] = useState(null); // { kind, list, index }
  const triggerRef = useRef(null);
  const skipFirstSync = useRef(true);

  const open = useCallback((kind, slug, list, trigger) => {
    const base = list?.includes(slug) ? list : allSlugs[kind];
    if (!base?.includes(slug)) return;
    triggerRef.current = trigger ?? document.querySelector(`[data-open="${kind}:${slug}"]`);
    setState({ kind, list: base, index: base.indexOf(slug) });
  }, []);

  const close = useCallback(() => setState(null), []);

  const step = useCallback((delta) => {
    setState((s) => (s ? { ...s, index: (s.index + delta + s.list.length) % s.list.length } : s));
  }, []);

  // buka dari hash saat halaman dimuat / hash berubah
  useEffect(() => {
    const fromHash = () => {
      const m = HASH_RE.exec(location.hash);
      if (m) open(m[1], m[2]);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, [open]);

  // sinkronkan hash, kunci scroll halaman, kembalikan fokus saat ditutup
  useEffect(() => {
    if (skipFirstSync.current) {
      skipFirstSync.current = false;
      if (!state) return;
    }
    if (state) {
      replaceHash(`${state.kind}-${state.list[state.index]}`);
      document.documentElement.style.overflow = 'hidden';
    } else {
      if (HASH_RE.test(location.hash)) replaceHash('');
      document.documentElement.style.overflow = '';
      triggerRef.current?.focus?.({ preventScroll: true });
    }
  }, [state]);

  const value = useMemo(() => ({
    current: state ? { kind: state.kind, slug: state.list[state.index], index: state.index, total: state.list.length } : null,
    open,
    close,
    step,
  }), [state, open, close, step]);
  return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

export const useDetail = () => useContext(DetailContext);
