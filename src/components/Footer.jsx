import { profile } from '../data/profile.js';
import { GeckoMark } from './icons.jsx';

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line pb-10 pt-7">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-muted">
        <span className="inline-flex items-center gap-2.5 font-mono">
          <GeckoMark />
          &lt;wi<span className="text-accent">//</span>iam&gt;
        </span>
        <span>© 2026 {profile.name}</span>
      </div>
    </footer>
  );
}
