import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { Header } from './components/layout/Header.jsx';
import { ScrollProgress } from './components/motion/ScrollProgress.jsx';
import { CareerProgression } from './components/sections/CareerProgression.jsx';
import { ContactConclusion } from './components/sections/ContactConclusion.jsx';
import { OpeningStatement } from './components/sections/OpeningStatement.jsx';
import { ProjectDossiers } from './components/sections/ProjectDossiers.jsx';
import { TechnicalOverview } from './components/sections/TechnicalOverview.jsx';
import {
  aiPractice,
  capabilityGroups,
  careerChapters,
  enterpriseExperience,
  learningBackground,
  navItems,
  profile,
  projectCaseStudies,
  workflow,
} from './data/portfolio.js';

function App() {
  const analyticsEnabled = !['localhost', '127.0.0.1'].includes(window.location.hostname);

  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return undefined;

    let cancelled = false;
    const scrollToTarget = () => {
      if (cancelled) return;
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    document.fonts?.ready.then(scrollToTarget);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Header
        navItems={navItems}
        resumeHref={profile.resumeHref}
        emailHref={profile.emailHref}
      />

      <main id="main-content" tabIndex="-1">
        <OpeningStatement profile={profile} />
        <ProjectDossiers projects={projectCaseStudies} />
        <CareerProgression
          chapters={careerChapters}
          learningBackground={learningBackground}
        />
        <TechnicalOverview
          experience={enterpriseExperience}
          groups={capabilityGroups}
          workflow={workflow}
          aiPractice={aiPractice}
        />
        <ContactConclusion profile={profile} />
      </main>

      {analyticsEnabled ? <Analytics /> : null}
    </div>
  );
}

export default App;
