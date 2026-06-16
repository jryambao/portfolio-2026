export const contacts = [
  { label: 'johnralph266@gmail.com', href: 'mailto:johnralph266@gmail.com', type: 'email' },
  { label: '+63 956 885 8581', href: 'tel:+639568858581', type: 'phone' },
  { label: 'Santa Rosa, Laguna, PH', href: '#contact', type: 'location' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-ralph-y-595473137/', type: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/ankor-ralph', type: 'github' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'TypeScript', 'jQuery', 'React.js', 'Responsive design'],
  },
  {
    title: 'WordPress',
    items: ['Custom themes', 'ACF Pro', 'Elementor', 'WooCommerce', 'WP Engine', 'Performance optimization'],
  },
  {
    title: 'AEM / Backend',
    items: ['AEM components', 'HTL / Sightly', 'Sling Models', 'OSGi', 'Java', 'PHP', 'Laravel', 'MySQL', 'Groovy scripts'],
  },
  {
    title: 'Tools / DevOps',
    items: ['Git', 'GitHub', 'CI/CD workflows', 'Azure DevOps', 'Jira', 'cPanel', 'Figma', 'Photoshop', 'FileZilla / SFTP'],
  },
  {
    title: 'Marketing / Analytics',
    items: ['Google Tag Manager (GTM)', 'Adobe Target'],
  },
  {
    title: 'AI Tooling',
    items: ['Claude', 'ChatGPT', 'Codex', 'Gemini'],
  },
];

export const highlights = [
  '3+ years building production WordPress and AEM websites.',
  'Full component lifecycle from Figma conversion to APIs, backend services, and launch support.',
  'Delivered 6 live WordPress sites for yacht charter and real estate clients.',
  'Recognized as Best Performer of 2024 within the Evoke development team.',
];

export const projects = [
  {
    name: 'Polaris Yacht Charter',
    url: 'https://polarisyachtcharter.com',
    category: 'Yacht charter',
    detail: 'WordPress yacht charter site delivered from Figma to production.',
  },
  {
    name: 'Mint Charter',
    url: 'https://mintcharter.com',
    category: 'Yacht charter',
    detail: 'WordPress yacht charter site with responsive frontend implementation.',
  },
  {
    name: 'Split Yacht Charter',
    url: 'https://splityachtcharter.com',
    category: 'Booking platform',
    detail: 'Booking platform integrated with NAUSYS API for availability, pricing, yacht listings, and booking workflows.',
  },
  {
    name: 'EJ Yachts',
    url: 'https://ejyachts.com',
    category: 'Yacht listings',
    detail: 'Dynamic yacht listing website using third-party data integrations.',
  },
  {
    name: 'Iman Real Estate',
    url: 'https://www.imanrealestate.com',
    category: 'Real estate',
    detail: 'Real estate listing website with live data feeds and editor-friendly content management.',
  },
  {
    name: 'Vela Dare',
    url: 'https://www.veladare.com/',
    image: '/project-previews/vela-dare.jpg',
    category: 'WordPress',
    detail: 'WordPress website delivered from design implementation through responsive production-ready pages.',
  },
];

export const experience = [
  {
    role: 'Frontend WordPress Developer',
    company: 'Ankor / Ingnius',
    period: 'Oct 2025 - Present',
    meta: 'Yacht charter and real estate - WordPress, WooCommerce, ACF Pro, NAUSYS API, WP Engine, HostArmada, SiteGround',
    tags: ['WordPress', 'WooCommerce', 'ACF Pro', 'NAUSYS API', 'WP Engine', 'HostArmada', 'SiteGround'],
    bullets: [
      'Delivered 5 production WordPress websites end-to-end for yacht charter and real estate clients, from Figma handoff through live deployment.',
      'Built Split Yacht Charter as a WooCommerce-based booking platform integrated with the NAUSYS API, covering real-time availability, dynamic pricing, yacht listings, and booking workflows.',
      'Integrated third-party APIs and live data feeds for EJ Yachts and Iman Real Estate, enabling dynamic property and vessel listings with less manual content work.',
      'Built editor-friendly ACF Pro content structures and optimized frontend performance through lazy loading, minification, and semantic markup.',
      'Managed staging and production deployments across WP Engine, HostArmada, and SiteGround while reviewing PRs for responsive, performance-focused delivery.',
    ],
  },
  {
    role: 'Webmaster & AEM Developer (Full-Stack)',
    company: 'Evoke',
    period: 'Jul 2023 - Oct 2025',
    meta: 'Adobe Experience Manager - Java, HTL, Sling Models, OSGi, Adobe Target',
    tags: ['AEM', 'Java', 'HTL', 'Sling Models', 'OSGi', 'Groovy Script', 'Adobe Target'],
    bullets: [
      'Designed and built custom AEM components, templates, workflows, and dialogs from scratch for enterprise-scale content requirements.',
      'Developed Sling Models, servlets, and OSGi services in Java to support dynamic content delivery and reduce hardcoded frontend dependencies.',
      'Led website migration work into Adobe Experience Manager, managing JCR content structures and maintaining data integrity during transitions.',
      'Authored Groovy scripts for debugging, environment configuration, and data migration tasks, reducing manual release and troubleshooting effort.',
      'Implemented Adobe Target for personalization and A/B testing while contributing to Agile sprint planning, bi-weekly deployments, and code reviews.',
      'Recognized as Best Performer of 2024 within the development team.',
    ],
  },
  {
    role: 'Frontend Web Developer (WordPress)',
    company: 'Taocrowd',
    period: 'Aug 2022 - May 2023',
    tags: ['WordPress', 'Custom Themes', 'PSD/Figma conversion'],
    bullets: [
      'Converted PSD and Figma designs into fully responsive, cross-browser-compatible WordPress websites using custom themes.',
      'Optimized frontend code and imagery for faster page loads, stronger Lighthouse scores, and better visual quality across client projects.',
      'Maintained multiple client websites simultaneously while preserving brand consistency and design accuracy across deliverables.',
    ],
  },
];

export const abilities = [
  'Strong understanding of responsive web design principles.',
  'Knowledge of cross-browser compatibility and debugging techniques.',
  'Ability to optimize web performance and improve page load times.',
  'Excellent attention to detail and ability to follow design specifications accurately.',
  'Quick to grasp new concepts and technologies.',
  'Able to work independently with minimal supervision.',
];

export const education = [
  {
    title: 'Bachelor of Computer Engineering',
    place: 'Malayan Colleges of Laguna',
    period: '2018 - 2020',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    place: 'KodeGo',
    period: 'May - Aug 2022',
    note: 'Certificate of Completion, 2x Best in Project Award',
  },
];

export const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Production Work', href: '#ankor-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '6', label: 'Live WordPress projects' },
  { value: '2', label: 'CMS platforms' },
];
