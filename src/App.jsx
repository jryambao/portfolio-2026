import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/layout/Header.jsx';
import { ScrollProgress } from './components/motion/ScrollProgress.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Details } from './components/sections/Details.jsx';
import { Experience } from './components/sections/Experience.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Highlights } from './components/sections/Highlights.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Skills } from './components/sections/Skills.jsx';
import {
  abilities,
  contacts,
  education,
  experience,
  highlights,
  navItems,
  projects,
  skillGroups,
  stats,
} from './data/portfolio.js';
import { useTheme } from './hooks/useTheme.js';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Header navItems={navItems} theme={theme} onToggleTheme={toggleTheme} />

      <main id="top">
        <Hero contacts={contacts} stats={stats} />
        <Highlights highlights={highlights} />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Details abilities={abilities} education={education} />
        <Contact />
      </main>

      <Analytics />
    </div>
  );
}

export default App;
