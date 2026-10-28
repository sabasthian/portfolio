import { usePrefs } from '../context/PreferencesContext.jsx';
import { experience } from '../data/profile.js';
import Section from './Section.jsx';

export default function Experience() {
  const { t, pick } = usePrefs();
  return (
    <Section id="experience" label={t('sec.xp')}>
      <ol className="list-none p-0">
        {experience.map((job, i) => (
          <li key={job.role} className="relative pb-8 pl-[30px] last:pb-0">
            {i < experience.length - 1 && <span aria-hidden="true" className="absolute bottom-[-6px] left-[5px] top-3 w-px bg-line" />}
            <span aria-hidden="true" className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-accent bg-surface" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="font-mono text-[12.5px] text-muted">{pick(job.when)}</span>
              <span className="rounded-full border border-line bg-surface px-[9px] py-px font-mono text-[11.5px] text-accent">{pick(job.type)}</span>
            </div>
            <h3 className="mt-1.5 text-[17px] font-bold">{job.role}</h3>
            <p className="text-[15px] text-muted">{pick(job.org)}</p>
            <ul className="list-dash mt-2.5 text-[15px] text-muted">
              {pick(job.points).map((point) => <li key={point}>{point}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
