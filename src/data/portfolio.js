export const profile = {
  name: 'John Ralph Yambao',
  monogram: 'JRY',
  roleLine: 'Frontend / WordPress / AEM',
  location: 'Santa Rosa, Laguna, Philippines',
  availability: 'Available for the right role',
  heading: 'I build websites where design, content systems, and production code meet.',
  introduction:
    'Frontend and WordPress developer with more than three years of experience across custom themes, enterprise AEM platforms, API-driven websites, reusable components, and production troubleshooting.',
  email: 'johnralph266@gmail.com',
  emailHref: 'mailto:johnralph266@gmail.com',
  resumeHref: '/john-ralph-yambao-resume.pdf',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-ralph-y-595473137/' },
    { label: 'GitHub', href: 'https://github.com/ankor-ralph' },
  ],
};

export const navItems = [
  { label: 'Progression', href: '#progression-title' },
  { label: 'Project dossiers', href: '#projects-title' },
  { label: 'How I work', href: '#method-title' },
  { label: 'Contact', href: '#contact' },
];

export const careerChapters = [
  {
    chapter: '01',
    title: 'Building the foundation',
    period: 'Aug 2022 — May 2023',
    role: 'Frontend Web Developer (WordPress)',
    company: 'Taocrowd',
    capability:
      'Turning approved PSD and Figma designs into responsive, cross-browser WordPress builds.',
    responsibilities: [
      'Converted visual designs into custom WordPress themes.',
      'Balanced design accuracy with responsive behavior and browser compatibility.',
      'Optimized frontend code and imagery while maintaining multiple client websites.',
    ],
    evidence: ['Custom themes', 'Responsive implementation', 'Performance basics'],
    lesson:
      'A design handoff is the beginning of implementation decisions, not the end of them.',
  },
  {
    chapter: '02',
    title: 'Working at enterprise scale',
    period: 'Jul 2023 — Oct 2025',
    role: 'Webmaster & AEM Developer (Full-Stack)',
    company: 'Evoke',
    capability:
      'Building reusable AEM components and authoring tools for large content platforms, migrations, and production release cycles.',
    responsibilities: [
      'Built AEM components, dialogs, templates, workflows, Sling Models, servlets, and OSGi services.',
      'Contributed to large-scale CMS migration work while preserving JCR content integrity.',
      'Supported staging and production releases through debugging, Groovy utilities, QA collaboration, and code review.',
    ],
    evidence: ['HTL', 'Sling Models', 'Dialogs', 'JCR migration', 'Code review'],
    lesson:
      'A useful component must serve the page, the platform, and the person authoring the content.',
  },
  {
    chapter: '03',
    title: 'Moving from implementation to ownership',
    period: 'Oct 2025 — Present',
    role: 'Frontend WordPress Developer',
    company: 'Ankor / Ingnius',
    capability:
      'Owning Figma-to-production delivery across custom WordPress systems, API-backed listings, booking workflows, deployments, and troubleshooting.',
    responsibilities: [
      'Built editor-friendly ACF Pro structures and reusable frontend patterns.',
      'Integrated live vessel and property data into production listing and booking experiences.',
      'Managed staging and production deployments while reviewing pull requests for responsive, maintainable delivery.',
    ],
    evidence: ['ACF Pro', 'WooCommerce', 'NAUSYS API', 'Hosting', 'PR review'],
    lesson:
      'Production ownership means following the work past the browser and into content, data, hosting, and support.',
  },
];

export const learningBackground = [
  {
    title: 'Computer Engineering studies',
    place: 'Malayan Colleges of Laguna',
    period: '2018 — 2020',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    place: 'KodeGo',
    period: 'May — Aug 2022',
    note: 'Certificate of Completion · 2x Best in Project Award',
  },
];

export const projectCaseStudies = [
  {
    id: 'split-yacht-charter',
    index: '01',
    name: 'Split Yacht Charter',
    url: 'https://splityachtcharter.com',
    category: 'Booking platform',
    stack: 'WordPress + WooCommerce',
    integration: 'NAUSYS API',
    image: {
      src: '/project-previews/split-yacht-charter.webp',
      width: 1200,
      height: 900,
      alt: 'Split Yacht Charter homepage with yacht search and booking interface',
    },
    context: 'A yacht charter platform delivered from Figma through production.',
    role: 'Frontend WordPress development across the booking and listing experience.',
    challenge:
      'Connect live availability, dynamic pricing, yacht listings, and booking workflows without turning the editor experience into manual data entry.',
    approach:
      'Built the WordPress and WooCommerce structure around the external NAUSYS data flow, then implemented responsive booking and listing interfaces.',
    implementation: ['Custom WordPress', 'WooCommerce', 'NAUSYS API', 'Responsive UI', 'Deployment'],
    outcome:
      'A production booking workflow that brings live yacht data into an editor-friendly website.',
    learning:
      'API work is also interface work: loading, empty, error, and production states all shape the final experience.',
  },
  {
    id: 'polaris-yacht-charter',
    index: '02',
    name: 'Polaris Yacht Charter',
    url: 'https://polarisyachtcharter.com',
    category: 'Yacht charter',
    stack: 'Custom WordPress',
    integration: 'Figma to production',
    image: {
      src: '/project-previews/polaris-yacht-charter.webp',
      width: 1200,
      height: 900,
      alt: 'Polaris Yacht Charter website homepage',
    },
    context: 'A WordPress yacht charter site implemented from approved Figma designs.',
    role: 'Responsive frontend and WordPress implementation through production.',
    challenge: null,
    approach:
      'Translated the supplied design into production-ready responsive pages and reusable WordPress structures.',
    implementation: ['Figma implementation', 'Custom WordPress', 'Responsive UI'],
    outcome: 'The approved design was delivered as a live WordPress website.',
    learning: null,
    contentGap: 'Detailed project constraints and retrospective notes are not yet documented.',
  },
  {
    id: 'mint-charter',
    index: '03',
    name: 'Mint Charter',
    url: 'https://mintcharter.com',
    category: 'Yacht charter',
    stack: 'WordPress',
    integration: 'Responsive frontend',
    image: {
      src: '/project-previews/mint-charter.webp',
      width: 1200,
      height: 900,
      alt: 'Mint Charter website homepage',
    },
    context: 'A yacht charter website delivered as a responsive WordPress build.',
    role: 'Frontend implementation within the WordPress delivery team.',
    challenge: null,
    approach:
      'Implemented responsive layouts and production-ready frontend behavior from the supplied design direction.',
    implementation: ['WordPress', 'SCSS', 'JavaScript', 'Responsive UI'],
    outcome: 'A live charter website that carries the design consistently across screen sizes.',
    learning: null,
    contentGap: 'Detailed project constraints and retrospective notes are not yet documented.',
  },
  {
    id: 'ej-yachts',
    index: '04',
    name: 'EJ Yachts',
    url: 'https://ejyachts.com',
    category: 'Yacht listings',
    stack: 'WordPress',
    integration: 'Third-party data',
    image: {
      src: '/project-previews/ej-yachts.webp',
      width: 1200,
      height: 900,
      alt: 'EJ Yachts website homepage and yacht listings',
    },
    context: 'A yacht website whose listings are driven by external vessel data.',
    role: 'Frontend implementation and third-party data integration.',
    challenge:
      'Bring changing yacht data into the listing experience without relying on repeated manual content entry.',
    approach:
      'Connected the data source to the WordPress frontend and shaped the listing output for responsive browsing.',
    implementation: ['WordPress', 'External API', 'Dynamic listings', 'Responsive UI'],
    outcome: 'Dynamic vessel listings with less manual content work.',
    learning:
      'Data integration is most useful when the resulting content remains clear for visitors and manageable for editors.',
  },
  {
    id: 'iman-real-estate',
    index: '05',
    name: 'Iman Real Estate',
    url: 'https://www.imanrealestate.com',
    category: 'Real estate listings',
    stack: 'WordPress',
    integration: 'Live property data',
    image: {
      src: '/project-previews/iman-real-estate.webp',
      width: 1200,
      height: 900,
      alt: 'Iman Real Estate website with property search and listings',
    },
    context: 'A real estate website using live data feeds for property listings.',
    role: 'Frontend integration and editor-friendly WordPress implementation.',
    challenge:
      'Present live property information in a responsive interface while keeping the surrounding content manageable in WordPress.',
    approach:
      'Integrated the listing feed into the frontend and paired dynamic data with editor-controlled site content.',
    implementation: ['WordPress', 'Live data feed', 'Property listings', 'Content management'],
    outcome: 'Dynamic property listings with an editor-friendly content workflow.',
    learning:
      'The boundary between automated data and authored content needs to be explicit for both developers and editors.',
  },
  {
    id: 'vela-dare',
    index: '06',
    name: 'Vela Dare',
    url: 'https://www.veladare.com/',
    category: 'WordPress',
    stack: 'Custom frontend',
    integration: 'Figma to production',
    image: {
      src: '/project-previews/vela-dare.webp',
      width: 1200,
      height: 750,
      alt: 'Sailing yacht on open water used as editorial media for the Vela Dare project',
    },
    context: 'A WordPress website delivered from design implementation through responsive production pages.',
    role: 'Frontend and WordPress implementation.',
    challenge: null,
    approach:
      'Converted the supplied design into reusable, responsive page structures and supported production delivery.',
    implementation: ['WordPress', 'Figma implementation', 'Responsive UI'],
    outcome: 'A live WordPress site with production-ready responsive pages.',
    learning: null,
    contentGap: 'Detailed project constraints and retrospective notes are not yet documented.',
  },
];

export const enterpriseExperience = {
  heading: "Enterprise work changed what 'frontend' meant.",
  introduction:
    'In AEM, the interface was only one layer. A useful component also had to support content authors, structured data, backend models, migration rules, release environments, and QA.',
  flow: ['Content author', 'Dialog + multifield', 'Sling Model', 'HTL component', 'Published page'],
  evidence: [
    'Reusable components',
    'Editable templates',
    'JCR content',
    'Groovy migration',
    'OSGi services',
    'Adobe Target',
    'Staging + production',
  ],
  details:
    'Built dialogs, composite multifields, HTL templates, Sling Models, servlets, OSGi services, workflows, and migration utilities while preserving authoring flexibility and design consistency. Contributed to large-scale Tridion-to-AEM migration work without exposing proprietary client code or internal systems.',
};

export const workflow = [
  { index: '1', title: 'Understand the design and content model' },
  { index: '2', title: 'Identify reusable patterns' },
  { index: '3', title: 'Build the component or template structure' },
  { index: '4', title: 'Implement responsive behavior' },
  { index: '5', title: 'Integrate data or APIs' },
  { index: '6', title: 'Validate accessibility and performance' },
  { index: '7', title: 'Test staging and production' },
  { index: '8', title: 'Review, document, and improve' },
];

export const aiPractice = {
  heading: 'AI accelerates the loop. Judgment still owns the result.',
  body:
    'I give tools repository context and rules, review generated output, test edge cases, refactor when necessary, and validate responsiveness, accessibility, and maintainability.',
  tools: ['Codex', 'Claude', 'ChatGPT', 'Gemini'],
};

export const capabilityGroups = [
  {
    index: '01',
    title: 'Core frontend',
    items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Responsive development', 'Accessibility', 'Animation', 'Browser testing'],
    evidence: [
      { label: 'Figma-to-production work', href: '#projects-title' },
      { label: 'Cross-browser WordPress builds', href: '#progression-title' },
    ],
  },
  {
    index: '02',
    title: 'WordPress systems',
    items: ['Custom themes', 'PHP', 'ACF Pro', 'WooCommerce', 'Elementor', 'Reusable templates', 'Migrations', 'Deployment', 'Performance debugging'],
    evidence: [
      { label: 'Split Yacht Charter', href: '#project-split-yacht-charter' },
      { label: 'Ankor / Ingnius', href: '#career-chapter-03' },
    ],
  },
  {
    index: '03',
    title: 'Enterprise CMS',
    items: ['Adobe Experience Manager', 'HTL', 'Sling Models', 'Dialogs', 'Multifields', 'Editable templates', 'Component development'],
    evidence: [{ label: 'Evoke', href: '#career-chapter-02' }],
  },
  {
    index: '04',
    title: 'Integration + delivery',
    items: ['REST APIs', 'NAUSYS', 'Git', 'Pull requests', 'Staging', 'SFTP', 'Hosting', 'DNS', 'SSL', 'Debugging'],
    evidence: [
      { label: 'Split Yacht Charter', href: '#project-split-yacht-charter' },
      { label: 'EJ Yachts', href: '#project-ej-yachts' },
      { label: 'Iman Real Estate', href: '#project-iman-real-estate' },
    ],
  },
  {
    index: '05',
    title: 'AI-assisted development',
    items: ['Codex', 'Claude', 'Gemini', 'Repository instructions', 'Structured prompting', 'Code review', 'Design-to-code workflows'],
    evidence: [{ label: 'How I work', href: '#method-title' }],
  },
];

export const principles = [
  'Reusability matters more than repeatedly building isolated pages.',
  'A good component must work for developers, designers, and content authors.',
  'A design is not finished when it only looks correct on one screen.',
  'Production environments reveal problems that local development cannot.',
  'AI can increase speed, but context and review determine quality.',
  'Good frontend development connects visual intent with maintainable systems.',
];
