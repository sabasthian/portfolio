import { usePrefs } from '../context/PreferencesContext.jsx';

// Kartu kode di hero: profil singkat dalam bentuk objek TypeScript.
const K = ({ children }) => <span className="text-accent">{children}</span>;
const S = ({ children }) => <span className="text-code-str">"{children}"</span>;
const P = ({ children }) => <span className="text-muted">{children}</span>;

const strings = (items) => items.map((item, i) => (
  <span key={item}>
    {i > 0 && <P>, </P>}
    <S>{item}</S>
  </span>
));

const field = (name, value) => (
  <>
    {'  '}{name}<P>: </P>{value}<P>,</P>
  </>
);
const array = (name, items) => (
  <>
    {'  '}{name}<P>: [</P>{strings(items)}<P>],</P>
  </>
);

export default function CodeCard() {
  const { t } = usePrefs();
  const lines = [
    <><K>const</K> william <P>{'= {'}</P></>,
    field('role', <S>Full-Stack Developer</S>),
    array('frontend', ['Next.js', 'React', 'TypeScript']),
    array('backend', ['Node.js', 'Express', 'Laravel']),
    array('database', ['PostgreSQL', 'MySQL']),
    array('focus', ['secure', 'tested', 'maintainable']),
    field('openToWork', <K>true</K>),
    <P>{'};'}</P>,
    <>
      <span className="italic text-muted">{t('hero.cm')}</span>
      <span aria-hidden="true" className="ml-[3px] inline-block h-[1.05em] w-[7px] animate-blink bg-accent align-[-0.18em]" />
    </>,
  ];

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-card">
      <div aria-hidden="true" className="flex items-center gap-[7px] border-b border-line bg-bg px-3.5 py-2.5">
        {[0, 1, 2].map((i) => <i key={i} className="block size-2.5 rounded-full bg-line" />)}
        <span className="ml-2 font-mono text-xs text-muted">william.ts</span>
      </div>
      <pre className="code-pre overflow-x-auto py-4 pr-[18px] font-mono text-xs leading-[1.8] sm:text-[13px]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="ln">{line}{i < lines.length - 1 ? '\n' : ''}</span>
          ))}
        </code>
      </pre>
    </div>
  );
}
