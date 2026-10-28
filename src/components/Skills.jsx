import { usePrefs } from '../context/PreferencesContext.jsx';
import { skills } from '../data/profile.js';
import Section from './Section.jsx';

export default function Skills() {
  const { t, pick } = usePrefs();
  return (
    <Section id="skills" label={t('sec.skills')} full>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] sm:gap-3.5">
        {skills.map((skill) => (
          <div key={skill.group.en} className="min-w-0 rounded-xl border border-line bg-surface p-3.5 sm:px-[18px] sm:pb-[18px] sm:pt-4">
            <h3 className="mb-3 flex items-center gap-2 font-mono text-[12.5px] font-medium text-muted">
              <span aria-hidden="true" className="size-[7px] shrink-0 rounded-full bg-accent" />
              {pick(skill.group)}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span key={item} className="rounded-full border border-line bg-bg px-2.5 py-1 text-[12.5px] font-medium sm:text-[13.5px]">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
