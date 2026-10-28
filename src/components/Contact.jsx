import { useRef, useState } from 'react';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { profile } from '../data/profile.js';
import Section from './Section.jsx';

const miniBtn = 'whitespace-nowrap rounded-md border border-line px-3 py-1.5 text-[13px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent';

function CopyButton({ text, targetId }) {
  const { t } = usePrefs();
  const [status, setStatus] = useState('copy');
  const timer = useRef(0);

  const done = (next) => {
    setStatus(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus('copy'), 1600);
  };

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      done('copied');
    } catch {
      // clipboard ditolak: pilih teksnya supaya bisa disalin manual
      const el = document.getElementById(targetId);
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      done('selected');
    }
  };

  const label = { copy: t('ui.copy'), copied: t('ui.copied'), selected: t('ui.selected') }[status];
  return <button type="button" onClick={onClick} className={miniBtn}>{label}</button>;
}

function Row({ label, value, valueId, action }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-line py-3.5 sm:grid-cols-[150px_minmax(0,1fr)_auto]">
      <span className="font-mono text-[12.5px] text-muted max-sm:col-span-2">{label}</span>
      <span id={valueId} className="min-w-0 break-words font-semibold">{value}</span>
      {action}
    </div>
  );
}

export default function Contact() {
  const { t } = usePrefs();
  return (
    <Section id="contact" label={t('sec.contact')}>
      <h3 className="text-[clamp(28px,4.6vw,44px)] font-extrabold leading-[1.1] tracking-[-0.03em]">{t('c.title')}</h3>
      <p className="mt-3 max-w-[48ch] text-muted">{t('c.sub')}</p>
      <div className="mt-7 border-t border-line">
        <Row label="Email" value={profile.email} valueId="c-email" action={<CopyButton text={profile.email} targetId="c-email" />} />
        <Row label={t('c.phone')} value={profile.phone} valueId="c-phone" action={<CopyButton text={profile.phone} targetId="c-phone" />} />
        <Row label="LinkedIn" value={profile.linkedinLabel} action={<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={miniBtn}>{t('ui.open')}</a>} />
        <Row label="GitHub" value={profile.githubLabel} action={<a href={profile.github} target="_blank" rel="noopener noreferrer" className={miniBtn}>{t('ui.open')}</a>} />
      </div>
    </Section>
  );
}
