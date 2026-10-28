// Ikon kecil (SVG inline) yang dipakai di beberapa komponen.

export function MedalIcon({ size = 44 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" focusable="false" className="shrink-0">
      <path className="fill-accent" opacity=".5" d="M22 36 L16 60 L25 55 L31 62 L35 40 Z" />
      <path className="fill-accent" opacity=".5" d="M42 36 L48 60 L39 55 L33 62 L29 40 Z" />
      <circle className="fill-surface stroke-accent" strokeWidth="3" cx="32" cy="26" r="18" />
      <circle className="fill-accent" cx="32" cy="26" r="9" />
    </svg>
  );
}

// Maskot gecko garis (tanda tangan di footer)
export function GeckoMark() {
  return (
    <svg viewBox="0 0 84 44" width="42" height="22" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
      <path d="M30 22 C 22 22, 14 21, 10 26 C 7 30, 9 35, 14 34 C 17 33.4, 17.4 30, 14.6 29.6" />
      <path d="M30 22 C 34 16.5, 49 15.5, 55 19 C 57.5 20.5, 57.5 23.5, 55 25 C 49 28.5, 34 27.5, 30 22 Z" />
      <path d="M55 19 C 58 14, 70 13.5, 75 18.5 C 77.5 21, 77.5 23, 75 25.5 C 70 30.5, 58 30, 55 25" />
      <path d="M50 17.5 Q 52 12 55.5 9.5 M50 26.5 Q 52 32 55.5 34.5 M36 17.5 Q 33.5 12 30 9.5 M36 26.5 Q 33.5 32 30 34.5" />
      <g fill="currentColor" stroke="none">
        <circle cx="55.5" cy="9.5" r="2" /><circle cx="55.5" cy="34.5" r="2" /><circle cx="30" cy="9.5" r="2" /><circle cx="30" cy="34.5" r="2" />
        <circle cx="69" cy="17.6" r="1.7" /><circle cx="69" cy="26.4" r="1.7" />
      </g>
    </svg>
  );
}

const base = { viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false, fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };

export const SunIcon = () => (
  <svg {...base} width="17" height="17" strokeWidth="1.8">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
  </svg>
);

export const MoonIcon = () => (
  <svg {...base} width="17" height="17" strokeWidth="1.8">
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
  </svg>
);

export const MenuIcon = () => (
  <svg {...base} width="18" height="18" strokeWidth="1.8">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = () => (
  <svg {...base} width="18" height="18" strokeWidth="1.8">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ExpandIcon = () => (
  <svg {...base} width="16" height="16" strokeWidth="1.9">
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </svg>
);

export const PhotosIcon = () => (
  <svg {...base} width="13" height="13" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="10" r="1.6" />
    <path d="M21 16l-5-5-8 8" />
  </svg>
);

export const ArrowUpIcon = () => (
  <svg {...base} width="18" height="18" strokeWidth="2">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);
