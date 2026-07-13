import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/layout/Header.jsx';
import { useEffect } from 'react';
import { CareerProgression } from './components/sections/CareerProgression.jsx';
import { ContactConclusion } from './components/sections/ContactConclusion.jsx';
import { DevelopmentPrinciples } from './components/sections/DevelopmentPrinciples.jsx';
import { EnterpriseLayer } from './components/sections/EnterpriseLayer.jsx';
import { EvidenceIndex } from './components/sections/EvidenceIndex.jsx';
import { OpeningStatement } from './components/sections/OpeningStatement.jsx';
import { ProjectDossiers } from './components/sections/ProjectDossiers.jsx';
import { WorkingMethod } from './components/sections/WorkingMethod.jsx';
import {
  aiPractice,
  capabilityGroups,
  careerChapters,
  enterpriseExperience,
  learningBackground,
  navItems,
  principles,
  profile,
  projectCaseStudies,
  workflow,
} from './data/portfolio.js';

function App() {
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
      <Header
        navItems={navItems}
        resumeHref={profile.resumeHref}
        emailHref={profile.emailHref}
      />

      <main id="main-content" tabIndex="-1">
        <OpeningStatement profile={profile} />
        <CareerProgression
          chapters={careerChapters}
          learningBackground={learningBackground}
        />
        <ProjectDossiers projects={projectCaseStudies} />
        <EnterpriseLayer experience={enterpriseExperience} />
        <WorkingMethod workflow={workflow} aiPractice={aiPractice} />
        <EvidenceIndex groups={capabilityGroups} />
        <DevelopmentPrinciples principles={principles} />
        <ContactConclusion profile={profile} />
      </main>

      <Analytics />
    </div>
  );
}

export default App;
