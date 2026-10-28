import { usePrefs } from '../context/PreferencesContext.jsx';
import { education } from '../data/profile.js';
import Section from './Section.jsx';

export default function Education() {
  const { t, pick } = usePrefs();
  return (
    <Section id="education" label={t('sec.edu')}>
      <article className="rounded-[14px] border border-line bg-surface px-[26px] py-6">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div className="min-w-0">
            <p className="font-mono text-[12.5px] text-muted">{pick(education.when)}</p>
            <h3 className="text-lg font-bold">{pick(education.degree)}</h3>
            <p className="text-[15px] text-muted">{pick(education.school)}</p>
          </div>
          <p className="sm:text-right">
            <strong className="block text-[28px] font-extrabold leading-none tracking-[-0.03em]">{pick(education.gpa)}</strong>
            <span className="font-mono text-xs text-accent">{pick(education.gpaLabel)}</span>
          </p>
        </div>
        <ul className="list-dash mt-4 border-t border-dashed border-line pt-4 text-[15px] text-muted">
          {pick(education.points).map((point) => <li key={point}>{point}</li>)}
        </ul>
      </article>
    </Section>
  );
}
