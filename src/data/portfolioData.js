export const PROFILE = {
  name: 'Mahesh Biradar',
  title: 'Web Developer | Front-End Developer',
  location: 'Mumbai, India',
  email: 'maheshbiradar010@gmail.com',
  phone: '+91 8668392182',
  linkedin: 'https://linkedin.com/in/mahesh-biradar-482a051b7',
  experienceYears: '4+ Years',
  summary:
    'Front-End & Web Developer with 4+ years of professional experience engineering high-performance web applications across AdTech and FinTech domains. Skilled in building dynamic ad solutions, responsive user interfaces, and seamless payment gateway integrations for WordPress WooCommerce platforms. Adept at frontend optimization, REST API integration, and full-lifecycle debugging to deliver scalable, cross-browser compatible architectures.',
  brandsWorkedWith: ['Amazon Prime', 'Swiggy', 'Sony Pictures', 'Uppercase', 'Rapido'],
  education: {
    degree: 'Bachelor of Agriculture Engineering',
    institution: 'VNKMV University',
    period: '2015 - 2020'
  }
};

export const SKILLS = [
  { name: 'React.js', category: 'Frontend', level: 92, highlight: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 95, highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, highlight: true },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 96, highlight: false },
  { name: 'Bootstrap', category: 'Frontend', level: 90, highlight: false },
  { name: 'GSAP (GreenSock)', category: 'Frontend', level: 88, highlight: true },
  { name: 'jQuery', category: 'Frontend', level: 85, highlight: false },
  { name: 'WordPress', category: 'E-Commerce & CMS', level: 90, highlight: false },
  { name: 'WooCommerce', category: 'E-Commerce & CMS', level: 92, highlight: true },
  { name: 'Custom Payment Gateway Plugins', category: 'E-Commerce & CMS', level: 90, highlight: true },
  { name: 'REST APIs', category: 'Backend & APIs', level: 90, highlight: true },
  { name: 'PHP', category: 'Backend & APIs', level: 84, highlight: true },
  { name: 'MySQL', category: 'Backend & APIs', level: 82, highlight: false },
  { name: 'Vite', category: 'Tools & DevOps', level: 90, highlight: false },
  { name: 'Git / GitLab / GitHub', category: 'Tools & DevOps', level: 92, highlight: true },
  { name: 'VS Code', category: 'Tools & DevOps', level: 95, highlight: false },
  { name: 'IntelliJ IDEA', category: 'Tools & DevOps', level: 82, highlight: false },
  { name: 'Apache Tomcat & XAMPP', category: 'Tools & DevOps', level: 85, highlight: false }
];

export const SKILL_CATEGORIES = ['All', 'Frontend', 'E-Commerce & CMS', 'Backend & APIs', 'Tools & DevOps'];

export const EXPERIENCES = [
  {
    id: 'exp-paymentz',
    company: 'Paymentz (Parent Company) / Paymentz Fintech (Subsidiary)',
    role: 'Web Developer',
    period: 'October 2023 - Present',
    location: 'Mumbai, India',
    domain: 'FinTech & Payment Gateways',
    badgeColor: 'from-indigo-500 to-violet-600',
    technologies: ['React.js', 'WooCommerce', 'WordPress', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'GitLab', 'Apache Tomcat'],
    highlights: [
      'Architect, scale, and deploy an enterprise-level employee examination platform to meet mandatory RBI Audit compliance criteria; build the multi-role system using HTML, Bootstrap, JavaScript, PHP, and MySQL to evaluate role-specific compliance knowledge.',
      'Develop, optimize, and maintain custom WordPress WooCommerce plugins for the e-commerce platform, ensuring robust, frictionless checkout experiences and smooth payment processing cycles.',
      'Maintain and optimize dynamic merchant, partner, and administrator dashboards; collaborate heavily with backend engineering teams to migrate and manage high-performance UI components using React.js for seamless data flow.',
      'Design and maintain robust, white-label user guide documentation systems utilizing a hybrid Java backend to process database logic and server-side PHP paired with native JavaScript to fetch and render dynamic assets.',
      'Utilize GitLab for strict source code management, code reviews, and version control, ensuring stable integration pipelines and smooth collaboration across cross-functional engineering teams.',
      'Streamline local development and deployment pipelines across a diverse tool stack, leveraging IntelliJ IDEA, Apache Tomcat, VS Code, and XAMPP to ensure smooth multi-environment configuration.'
    ]
  },
  {
    id: 'exp-hockeycurve',
    company: 'Hockeycurve Growth Solutions Pvt. Ltd.',
    role: 'Front-End Developer',
    period: 'May 2022 - July 2023',
    location: 'Mumbai, India',
    domain: 'AdTech & Rich-Media Interactive Ads',
    badgeColor: 'from-emerald-500 to-teal-600',
    technologies: ['JavaScript (ES6+)', 'GSAP', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'Git & GitHub'],
    highlights: [
      'Engineered high-performance, rich-media interactive ads and dynamic web applications for premium global clients, including Amazon Prime, Swiggy, Sony Pictures, Uppercase, and Rapido.',
      'Developed dynamic frontend interfaces and scalable web animations utilizing HTML5, CSS3, JavaScript (ES6+), and GSAP (GreenSock Animation Platform) to maximize brand engagement and optimize ad-delivery speeds.',
      'Built server-side scripts and session-handling data architectures using PHP and MySQL to securely capture, process, and track real-time user interaction metrics.',
      'Partnered closely with UI/UX designers and core backend teams to integrate complex features seamlessly, utilizing Git and GitHub for collaborative version control and release deployment.',
      'Participated actively in technical peer code reviews to maintain strict adherence to clean-code principles, modular architecture standards, and maximum runtime efficiency.'
    ]
  }
];

export const PROJECTS = [
  {
    id: 'proj-ad-tool',
    title: 'Self-Serve Ad Customization Tool',
    category: 'AdTech',
    featured: true,
    company: 'Hockeycurve Growth Solutions',
    tech: ['JavaScript (ES6+)', 'GSAP', 'PHP', 'MySQL', 'HTML5/CSS3'],
    summary:
      'Dynamic no-code web platform enabling non-technical marketers to build custom animated banner advertisements seamlessly.',
    architecture: [
      'Implemented a responsive frontend architecture featuring an asset upload engine and a drag-and-drop interface for dynamic component positioning.',
      'Integrated GSAP timeline orchestration for real-time animation previews and keyframe adjustments.',
      'Formulated server-side asset management scripts in PHP and engineered database schemas in MySQL to securely write and retrieve complex animation configuration states.'
    ],
    metrics: 'Zero coding required for end-users • Real-time GSAP timeline serialization'
  },
  {
    id: 'proj-rbi-compliance',
    title: 'RBI Audit Compliance Examination Portal',
    category: 'FinTech',
    featured: true,
    company: 'Paymentz Fintech',
    tech: ['JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'HTML5'],
    summary:
      'Multi-role enterprise examination system built to evaluate role-specific compliance knowledge for mandatory RBI Audit standards.',
    architecture: [
      'Engineered role-based access control (RBAC) for administrators, compliance officers, and employees.',
      'Built automated assessment grading, randomized question banks, and audit-ready compliance reporting.',
      'Designed responsive test interfaces ensuring zero session drops during timed evaluations.'
    ],
    metrics: '100% RBI Audit compliance readiness • Multi-role evaluation workflows'
  },
  {
    id: 'proj-payment-plugins',
    title: 'WooCommerce Custom Payment Gateway Suite',
    category: 'FinTech',
    featured: true,
    company: 'Paymentz Fintech',
    tech: ['WooCommerce REST API', 'WordPress', 'PHP', 'JavaScript'],
    summary:
      'Custom checkout plugin integration for WordPress WooCommerce ensuring frictionless checkout experiences and secure transaction handling.',
    architecture: [
      'Integrated RESTful payment APIs, webhook listeners, and asynchronous transaction status synchronization.',
      'Optimized checkout UI components to reduce cart abandonment and improve payment success rates.',
      'Built white-label merchant configuration panels supporting multi-environment sandbox and live keys.'
    ],
    metrics: 'Seamless merchant onboarding • High-reliability checkout cycles'
  },
 {
    id: 'proj-pixelcraft',
    title: 'PixelCraft Studios — Digital Agency Landing Page',
    category: 'React Apps',
    featured: true,
    company: 'React Architecture Showcase',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    summary:
      'High-conversion, responsive digital agency landing page designed with modern UI aesthetics, interactive service showcases, and smooth section navigation.',
    architecture: [
      'Engineered reusable, responsive UI sections (Hero, Services, Case Studies, Testimonials, and Contact) using modular React components and Tailwind CSS.',
      'Implemented mobile-first adaptive layouts, interactive hover micro-animations, and accessible navigation states.',
      'Optimized asset delivery and bundle performance via Vite and deployed with CI/CD on Vercel.'
    ],
    metrics: 'Live production deployment on Vercel • 100% responsive mobile-first UI',
    demoLink: 'https://pixelcraft-react-website.vercel.app/'
  },
  {
    id: 'proj-aurastore',
    title: 'AuraStore — Modern E-Commerce Storefront',
    category: 'React Apps',
    featured: false,
    company: 'React Architecture Showcase',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Context API'],
    summary:
      'Interactive e-commerce web application featuring live catalog filtering, slide-over cart drawer, and multi-step checkout simulator.',
    architecture: [
      'Engineered real-time search, category pills, price range sliders, and multi-criteria sorting.',
      'Built a slide-over cart drawer with promo code validation and free-shipping milestone tracking.',
      'Designed a 3-step checkout simulator supporting simulated UPI, Cards, NetBanking, and COD.'
    ],
    metrics: 'Dynamic cart calculations • Multi-step simulated payment gateway',
    demoLink: 'https://aurastore-react.vercel.app/'
  },
  {
    id: 'proj-kanban',
    title: 'Interactive Drag-and-Drop Kanban Board',
    category: 'React Apps',
    featured: false,
    company: 'React Architecture Showcase',
    tech: ['React.js', 'Tailwind CSS', 'HTML5 Drag & Drop API', 'Lucide Icons'],
    summary:
      'Trello-inspired task management board supporting drag-and-drop column transitions and workflow tracking.',
    architecture: [
      'Leveraged native HTML5 Drag and Drop events for smooth card movement across To-Do, In Progress, Review, and Done states.',
      'Created responsive board columns with live task counters and instant task creation/deletion.'
    ],
    metrics: 'Zero external DnD dependencies • Instant state transitions',
    demoLink: 'https://todo-react-swart-tau.vercel.app/'
  }
];

export const PROJECT_CATEGORIES = ['All', 'FinTech', 'AdTech', 'React Apps'];
