import { Fragment } from 'react';
import { usePrefs } from '../context/PreferencesContext.jsx';
import { aboutFacts } from '../data/profile.js';
import Section from './Section.jsx';

export default function About() {
  const { t, pick } = usePrefs();
  return (
    <Section id="about" label={t('sec.about')}>
      <p className="text-lg leading-relaxed">{t('about.lead')}</p>
      <p className="mt-3.5">{t('about.p1')}</p>
      <p className="mt-3.5">{t('about.p2')}</p>
      <dl className="mt-7 grid border-t border-dashed border-line pt-6 text-[15px] sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-2.5">
        {aboutFacts.map((fact) => (
          <Fragment key={fact.k.en}>
            <dt className="mt-3 text-muted first:mt-0 sm:mt-0">{pick(fact.k)}</dt>
            <dd>{pick(fact.v)}</dd>
          </Fragment>
        ))}
      </dl>
    </Section>
  );
}
