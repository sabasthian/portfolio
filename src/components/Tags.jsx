import { usePrefs } from '../context/PreferencesContext.jsx';

export default function Tags({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <span key={item} className="rounded-[5px] border border-line bg-bg px-2 py-[3px] font-mono text-xs text-muted">{item}</span>
      ))}
    </div>
  );
}

// Tombol "View details" yang membuat seluruh kartu bisa diklik.
export function OpenButton({ kind, slug, title, onOpen }) {
  const { t } = usePrefs();
  return (
    <button
      type="button"
      data-open={`${kind}:${slug}`}
      onClick={(e) => onOpen(e.currentTarget)}
      aria-label={`${t('ui.details')}: ${title}`}
      className="mt-auto inline-flex items-center gap-1.5 self-start pt-2 text-sm font-semibold text-ink transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
    >
      {t('ui.details')}
      <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-[3px]">→</span>
    </button>
  );
}
