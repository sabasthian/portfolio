import { motion } from 'framer-motion';

// Muncul halus saat discroll. Konten tetap terlihat (tidak mulai dari opacity 0).
export function Reveal({ className = '', children }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.5, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Layout section: label gaya komentar kode di kiri, konten di kanan.
export default function Section({ id, label, full = false, children }) {
  return (
    <section id={id} className="grid gap-5 border-t border-line py-[52px] md:grid-cols-[170px_minmax(0,1fr)] md:gap-8 md:py-16">
      <h2 className="font-mono text-[13px] font-medium text-muted md:sticky md:top-[calc(env(safe-area-inset-top,0px)+84px)] md:self-start md:pt-[3px]">
        <span className="text-accent">//</span> {label}
      </h2>
      <Reveal className={`min-w-0 ${full ? '' : 'max-w-[680px]'}`}>{children}</Reveal>
    </section>
  );
}
