# Portfolio Redesign Direction

## July 2026 revision: Dark Proof Index

The first redesign proved the career progression clearly, but it required too much sequential reading and created a page more than 15,000 pixels tall at a standard desktop viewport. The revised direction is intentionally skim-first: a concise thesis, production project grid, three compact experience rows, one technical systems matrix, and a direct contact block.

- **Palette:** Ink `#0C1117`, Panel `#121A22`, Steel `#1D2A35`, Mist `#DCE6EA`, Cobalt `#6D8CFF`, and Signal `#E8B86A`.
- **Typography:** Geologica remains the decisive display face, Source Serif 4 is reserved for short explanatory copy, and IBM Plex Mono carries proof labels and technical metadata.
- **Signature:** a thin build-signal motif connects design, components, data, and production while the page-level progress line responds to scrolling.
- **Motion:** lightweight Intersection Observer reveals use opacity and short translation, run once, and become static when reduced motion is requested.
- **Content rule:** outcomes and responsibilities are visible at scanning speed; longer implementation notes are optional disclosure content.

The original Career Field Log proposal remains below as an audit trail, but the production implementation now follows this Dark Proof Index revision.

## 1. Subject, audience, and single job

This portfolio is a career field log for John Ralph Yambao: a frontend and WordPress developer whose work has progressed from design implementation, through reusable CMS systems and enterprise AEM engineering, into ownership of API-driven production websites.

The primary audience is hiring managers, technical leads, agencies, and recruiters. The page has one job: make John's progression, strongest capabilities, and production experience understandable within the first 10-15 seconds, then provide enough evidence to justify an interview.

## 2. Why the current portfolio feels generic

The existing site has useful content and a sensible React data layer, but its presentation follows a familiar developer-template recipe:

- dark gradient background, teal accent, and a glowing progress bar;
- a name-first hero paired with a metrics panel and decorative code window;
- repeated rounded, bordered cards for highlights, skills, projects, education, and experience;
- technology chips presented before the career story establishes why they matter;
- project entries limited to screenshot cards and one-sentence summaries;
- identical reveal animations applied to nearly every section;
- a conventional Profile / Skills / Projects / Experience / Contact sequence.

The result shows competence but understates the connection between WordPress foundations, enterprise AEM work, API integrations, production troubleshooting, and increasing ownership.

## 3. Creative concept: The Career Field Log

The redesign treats the portfolio as a maintained engineering field log rather than a personal landing page. Each part records a change in scope: what John inherited, what he built, what constraint he met, and what capability he carried forward.

The signature element is a continuous **career trace**: a thin routed line that begins in the opening, passes through the chronological chapters, branches toward project evidence, and resolves in the contact section. It is functional rather than ornamental. It communicates progression, anchors chapter labels, and visually connects claims to projects and experience.

The deliberate aesthetic risk is scale contrast: a compact, document-like information rail sits beside very large, plainspoken statements. This creates an editorial rhythm without imitating a newspaper layout or hiding the technical detail.

## 4. Visual design principles

- Use open compositions, rules, rails, and full-width dossiers instead of default card grids.
- Let typography carry the personality; decorative graphics remain secondary.
- Use dates, chapter names, evidence labels, and implementation notes only when they encode real information.
- Vary section rhythm: spacious opening, compact chronology, image-led project dossiers, dense enterprise system map, then a quiet conclusion.
- Keep corners mostly square or subtly softened. Reserve framed surfaces for project media and expandable technical notes.
- Make project differences visible through composition and copy, not arbitrary colors.
- Use one orchestrated opening motion and small trace/reveal movements thereafter.
- Keep all essential information available without hover, animation, or JavaScript-driven scroll effects.

## 5. Token and typography direction

### Color

- **Log paper** `#F3F6F5` - cool mineral page background, avoiding the familiar warm-cream editorial default.
- **Draft white** `#FCFDFC` - project media and focused reading surfaces.
- **Carbon** `#172126` - primary text and dark section background.
- **Graphite** `#566167` - secondary text and metadata.
- **Blueprint** `#2557D6` - links, focus, active trace, and technical emphasis.
- **Signal coral** `#F06449` - sparse markers for constraints, changes, and calls to action.

The dark theme, if retained, must preserve the same cool temperature and hierarchy rather than becoming a neon developer theme.

### Type roles

- **Display:** Geologica Variable - layered, engineered letterforms that reinforce the progression/systems concept.
- **Reading:** Source Serif 4 - readable case-study prose with a quieter editorial voice.
- **Utility:** IBM Plex Mono - dates, implementation labels, technology references, and chapter coordinates.

Fonts should be self-hosted or loaded with explicit preconnect/preload and resilient fallbacks. The display face is used with restraint; body copy remains easy to scan.

### Layout sketches

Desktop opening:

```text
+--------------------- quiet header / direct actions ----------------------+
| name + role rail      | I build websites where design, content systems, |
| location / availability| and production code meet.                       |
| resume / contact       | supporting statement                            |
| career trace start  o--+--------------------------> first chapter preview|
+-------------------------------------------------------------------------+
```

Career chapters:

```text
| period | capability gained | chapter statement                           |
|        |        o-----------+ responsibilities / lesson / technologies   |
|        |        |           | linked evidence                            |
| next   |        o-----------+ next change in scope                       |
```

Project dossier:

```text
| 01 / project / role / link                                                |
| large project media or text-led confidential-work frame                  |
| CONTEXT          CHALLENGE        APPROACH         RESULT / LEARNING      |
| implementation notes span the width; no repeated floating card anatomy   |
```

Mobile is re-authored as a linear log: the metadata rail becomes a short header for each chapter, the trace moves to the left edge, project facts stack in reading order, and all technical notes remain tap- and keyboard-accessible.

## 6. New information architecture

1. **Opening thesis** - what John builds, the systems he bridges, and direct routes to work, experience, resume, and contact.
2. **Progression log** - three verified professional roles reframed as changes in capability and responsibility.
3. **Selected project dossiers** - six existing production links, with detailed evidence only where the repository supports it.
4. **Enterprise engineering layer** - a recruiter-readable explanation of AEM work with expandable implementation notes.
5. **Working method** - design/content-model understanding through production validation, including responsible AI-assisted development.
6. **Capabilities by evidence** - frontend, WordPress, enterprise CMS, integration/delivery, and AI skills connected back to roles or projects.
7. **Principles carried forward** - concise lessons learned from implementation, authoring systems, environments, and review.
8. **Contact conclusion** - roles John is open to and direct professional actions.

Navigation uses narrative labels: `Progression`, `Project dossiers`, `How I work`, and `Contact`. The brand link returns to the opening.

## 7. Interaction and motion

- The opening trace draws once while the thesis and supporting copy settle into place.
- Chapter markers become active as their content enters the viewport; content is visible by default and never depends on animation.
- Project implementation notes use native `details`/`summary` disclosure where progressive detail is useful.
- Link underlines, trace markers, and media captions use short, restrained transitions.
- No scroll hijacking, parallax, loading sequence, blur-heavy reveal, or repeated large translations.
- `prefers-reduced-motion` removes trace drawing, smooth scrolling, and reveal transitions.
- Mobile navigation uses correct disclosure semantics, Escape handling, focus management, and scroll-safe overflow.

## 8. Component and content plan

### Data

- Expand the central portfolio data into `profile`, `careerChapters`, `projectCaseStudies`, `enterpriseExperience`, `workflow`, `capabilityGroups`, `principles`, and `contact` records.
- Keep factual content separate from section presentation.
- Avoid unsupported metrics; keep dates, roles, employers, links, technologies, and awards only where existing repository or resume content supports them.

### Layout and navigation

- `SiteHeader` - quiet identity, narrative navigation, resume/contact action, accessible mobile disclosure.
- `CareerTrace` - shared progression motif and current-section indicator.
- `SectionIntro` - consistent chapter metadata without decorative eyebrow labels.

### Narrative sections

- `OpeningStatement`
- `CareerProgression` and `CareerChapter`
- `ProjectDossiers` and `ProjectDossier`
- `EnterpriseLayer`
- `WorkingMethod`
- `EvidenceIndex`
- `DevelopmentPrinciples`
- `ContactConclusion`

### Shared UI

- `TextLink`, `ActionLink`, `MetaList`, `EvidenceLinks`, `ImplementationNotes`, and a small reusable icon set.
- Motion primitives should apply only to trace progress and optional low-distance entry transitions.

## 9. Accessibility, SEO, and performance strategy

- Preserve semantic landmarks and one descriptive `h1`; maintain a logical heading tree.
- Add a skip link and move keyboard focus when hash navigation changes the reading location.
- Add visible high-contrast focus states and minimum touch target sizing.
- Ensure disclosures work with keyboard and touch; no hover-only copy.
- Add intrinsic image dimensions, stable aspect-ratio containers, lazy loading below the fold, and local assets where possible.
- Replace repeated runtime screenshot dependencies where suitable; provide text-first fallbacks when media fails.
- Respect reduced motion in CSS, JavaScript, and scroll behavior.
- Add canonical, Open Graph, Twitter, theme-color, and Person/WebSite structured data.
- Add a favicon, robots file, and sitemap only with deployment-safe URLs; otherwise leave an explicit TODO instead of guessing the production portfolio domain.
- Keep Motion only if the final implementation uses it meaningfully; otherwise remove it.

## 10. Content gaps and TODOs

- Confirm the final public portfolio domain before adding canonical and sitemap URLs.
- Confirm whether the current phone number should remain prominent on the public page; email can remain the primary contact action.
- The repository says both five and six delivered WordPress sites. Avoid the count as a headline until reconciled.
- Polaris, Mint, and Vela Dare currently have only short descriptions. Their dossiers must remain concise or include visible TODOs for challenge, constraints, implementation, and learning.
- Exact qualitative outcomes are available for Split Yacht Charter, EJ Yachts, Iman Real Estate, and the AEM role; do not invent performance, conversion, revenue, or traffic metrics.
- Enterprise client names 888 and William Hill are supplied in the redesign brief but not the repository resume/data. They may be mentioned at a high level without internal URLs, code, screenshots, or proprietary detail.
- No portrait or personal working photo exists. The direction is intentionally typography- and evidence-led rather than filling this gap with stock or generated identity imagery.
- No analytics implementation exists. Do not add tracking without a supplied analytics property and consent requirements.

## 11. Self-critique and revision

The first concept leaned toward the common cream-paper, high-contrast-serif, broadsheet portfolio pattern. That was rejected because it could describe many designers or developers. The revised direction uses a cool mineral palette, an engineered variable display face, a spacious release-ledger composition, and a career trace whose meaning comes directly from John's shift across CMS platforms and responsibility levels.

The trace is the only bold visual device. Numbering is reserved for chronological chapters, ordered workflow steps, and project dossier indexes where sequence or reference is real. Cards, badges, gradients, and pseudo-code decoration are deliberately excluded unless they solve a specific content problem.

## 12. Implementation phases

1. Preserve verified content, links, resume, and useful React/data boundaries.
2. Generate coordinated visual concepts for the opening, progression, project dossier, enterprise/process, and evidence/contact portions.
3. Establish tokens, fonts, global typography, focus, reduced-motion, and container rules.
4. Rebuild the page shell, accessible navigation, opening thesis, and career trace.
5. Implement career chapters and project dossiers from the expanded data model.
6. Add enterprise, process, evidence, principles, and contact sections.
7. Replace obsolete components/styles and remove unused dependencies.
8. Add metadata and structured data, then optimize image behavior.
9. Run the production build and browser QA at mobile, tablet, laptop, and large-desktop widths.
10. Compare rendered screenshots with the visual concepts, repair mismatches, and document remaining content TODOs.
