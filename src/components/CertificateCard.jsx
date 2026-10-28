import { motion } from 'framer-motion';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { MedalIcon } from './icons.jsx';
import { OpenButton } from './Tags.jsx';

export default function CertificateCard({ cert, onOpen }) {
  const { lang } = usePrefs();
  const tx = cert[lang] ?? cert.en;

  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="group relative flex min-w-0 snap-start flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-[box-shadow,border-color] duration-200 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--line))] hover:shadow-card"
    >
      <div aria-hidden="true" className="cert-pattern grid aspect-[8/5] place-items-center border-b border-line p-[18px]">
        <div className="flex max-w-full items-center gap-3.5 rounded-xl border border-line bg-surface py-3.5 pl-3.5 pr-[18px] shadow-card">
          <MedalIcon size={44} />
          <div className="min-w-0">
            <span className="block font-mono text-[11.5px] text-muted">{cert.issuer}</span>
            <span className="block text-sm font-bold leading-snug">{tx.type}</span>
          </div>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2 px-5 pb-5 pt-[18px]">
        <p className="font-mono text-[12.5px] text-muted">{tx.meta}</p>
        <h3 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] transition-colors group-hover:text-accent">{tx.title}</h3>
        <OpenButton kind="cert" slug={cert.slug} title={tx.title} onOpen={onOpen} />
      </div>
    </motion.article>
  );
}
