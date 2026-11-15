// All copy and figures below come from the SRES Solutions capability deck.
// Keep the site and the deck in step: change a number here only when it changes there.

export const company = {
  tagline: 'AI-native engineering, built to ship.',
  summary:
    'Web and mobile apps, AI automation and agents, technical audits and legacy modernization. Fixed price, or paid on outcomes.',
  location: 'Bengaluru, India',
  serving: 'Serving Europe, North America and India',
  email: 'hello@sres.solutions',
  phone: '',
  whatsapp: '',
  calendly: 'https://calendly.com/chaitanyareddy-pr'
};

export type Stat = { value: string; label: string };

export type Service = {
  slug: string;
  icon: 'apps' | 'spark' | 'bolt' | 'search';
  title: string;
  badge: string;
  hero: string;
  description: string;
  summary: string;
  stats: Stat[];
  highlights: Array<{ title: string; description: string }>;
  proof: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: 'web-and-mobile-apps',
    icon: 'apps',
    title: 'Web and mobile apps',
    badge: 'Apps',
    hero: 'Production-grade web, iOS and Android apps from one senior team.',
    description:
      'One senior team takes your product from first screen to store release across web, iOS and Android, so nothing is lost between agencies or handoffs.',
    summary: 'Production-grade web, iOS and Android apps from one senior team.',
    stats: [
      { value: '2 countries', label: 'Laméris site, in 3 languages' },
      { value: '2 weeks', label: 'MeetEaze, idea to prototype' },
      { value: '3 platforms', label: 'Web, iOS and Android' }
    ],
    highlights: [
      {
        title: 'Web platforms',
        description: 'Multi-region, multilingual sites and web apps, such as Laméris for the Netherlands and Belgium.'
      },
      {
        title: 'iOS and Android',
        description: 'Native and React Native apps, such as MeetEaze for newcomers to Canada.'
      },
      {
        title: 'One senior team',
        description: 'Architects stay hands-on from discovery to delivery, across design, build and release.'
      }
    ],
    proof: 'Laméris Group, MeetEaze',
    cta: 'Tell us what you want to ship and we will come back with a scoped, fixed-price proposal.'
  },
  {
    slug: 'ai-native-development',
    icon: 'spark',
    title: 'AI-native development',
    badge: 'AI-native',
    hero: 'AI across discovery, design, code and QA: a working product in weeks.',
    description:
      'We use AI at every stage of delivery, from discovery and design through code and QA, so you see a working product in weeks instead of a slide deck.',
    summary: 'AI across discovery, design, code and QA: a working product in weeks.',
    stats: [
      { value: '2 weeks', label: 'MeetEaze, idea to prototype' },
      { value: '4 stages', label: 'Discovery, design, code, QA' },
      { value: 'Fixed price', label: 'Scope and cost agreed upfront' }
    ],
    highlights: [
      {
        title: 'Discovery and design',
        description: 'AI-assisted research and prototyping turn an idea into something you can click through quickly.'
      },
      {
        title: 'Code and QA',
        description: 'Senior engineers direct AI across implementation and testing, and review everything that ships.'
      },
      {
        title: 'Weeks, not quarters',
        description: 'MeetEaze went from idea to prototype in two weeks, and is being built end to end this way.'
      }
    ],
    proof: 'MeetEaze',
    cta: 'Start with a fixed-price MVP and see a working product in weeks.'
  },
  {
    slug: 'ai-automation-and-agents',
    icon: 'bolt',
    title: 'AI automation and agents',
    badge: 'Agents',
    hero: 'AI that takes real work off your team.',
    description:
      'LangGraph and LangChain agents, retrieval systems, workflows, APIs, webhooks and WhatsApp integrations that connect your tools and put AI to work on your data.',
    summary: 'LangGraph and LangChain agents, workflows, APIs, webhooks, WhatsApp.',
    stats: [
      { value: '500K+', label: 'Documents in a clinical retrieval pipeline' },
      { value: '~180 ms', label: 'Median retrieval time' },
      { value: 'In production', label: 'Running for Mediminds' }
    ],
    highlights: [
      {
        title: 'Agents',
        description: 'LangGraph and LangChain agents that plan, call tools and hand off to people.'
      },
      {
        title: 'RAG and content',
        description: 'Retrieval systems and automated content pipelines for learning and media.'
      },
      {
        title: 'Automation',
        description: 'APIs, webhooks and WhatsApp integrations that connect your tools.'
      }
    ],
    proof: 'Mediminds',
    cta: 'Tell us what you want to automate and we will scope it at a fixed price.'
  },
  {
    slug: 'audits-and-modernization',
    icon: 'search',
    title: 'Audits and modernization',
    badge: 'Audits',
    hero: 'Independent architecture and cost reviews, then phased migration.',
    description:
      'Technical audits and advisory across AWS, Azure and GCP, measured against recognised standards, followed by a phased migration when the numbers support it.',
    summary: 'Independent architecture and cost reviews, then phased migration.',
    stats: [
      { value: '40%', label: 'Lower cloud cost for Mediminds' },
      { value: '3 clouds', label: 'AWS, Azure and GCP' },
      { value: '2 weeks', label: 'A typical starting audit' }
    ],
    highlights: [
      {
        title: 'Technologies',
        description:
          'Java / Spring Boot, Node.js, TypeScript, Kafka, AWS, GCP, Multi Cloudm Firebase, Distributed Systems, React Native, Android, iOS and SAP.'
      },
      {
        title: 'Audit standards',
        description:
          'OWASP Top 10 and ASVS, ISO/IEC 25010 software quality, cloud Well-Architected reviews, CIS Benchmarks and GDPR.'
      },
      {
        title: 'What you get',
        description: 'A risk and cost report, an architecture roadmap and a modernization plan.'
      }
    ],
    proof: 'Mediminds, Dutch enterprises',
    cta: 'Start with a 2-week audit before you commit to a migration.'
  }
];

export const clients = ['Mediminds', 'Laméris Group', 'MeetEaze', 'Response - Dutch enterprises'];

export type UseCase = {
  problem: string;
  answer: string;
  proof: string;
  detail: string;
  service: string;
  caseId: string;
};

// Use cases: the deck's "Problems we solve" slide, each tied to its service and case study.
export const problems: UseCase[] = [
  {
    problem: 'Launch a product fast',
    answer: 'AI-native web and mobile',
    proof: 'MeetEaze',
    detail:
      'AI across discovery, design, code and QA gets a working product in front of users in weeks. MeetEaze went from idea to prototype in 2 weeks.',
    service: 'ai-native-development',
    caseId: 'meeteaze'
  },
  {
    problem: 'Go multilingual, multi-region',
    answer: 'Multi-region site build',
    proof: 'Laméris Group',
    detail:
      'One build that serves several countries and languages. Laméris runs in the Netherlands and Belgium, in Dutch, French and English.',
    service: 'web-and-mobile-apps',
    caseId: 'lameris'
  },
  {
    problem: 'Cut cloud cost',
    answer: 'Azure to AWS migration',
    proof: 'Mediminds, 40% lower',
    detail:
      'An independent cost review, then a phased migration. Mediminds pays 40% less for cloud after the Azure to AWS move and code optimizations.',
    service: 'audits-and-modernization',
    caseId: 'mediminds'
  },
  {
    problem: 'Speed up customer onboarding',
    answer: 'Architect-led redesign',
    proof: 'Mediminds, days to minutes',
    detail:
      'Architects redesign how a new customer gets set up. Mediminds onboarding went from days to minutes, with 10 new customers acquired in four months.',
    service: 'audits-and-modernization',
    caseId: 'mediminds'
  },
  {
    problem: 'Check a stack before you invest',
    answer: 'Independent tech audit',
    proof: 'Dutch enterprises',
    detail:
      'An audit across AWS, Azure and GCP against recognised standards, ending in a risk and cost report, an architecture roadmap and a modernization plan.',
    service: 'audits-and-modernization',
    caseId: 'enterprise-audits'
  },
  {
    problem: 'Put AI to work on your data',
    answer: 'RAG and LangGraph agents',
    proof: 'Mediminds, 500K+ documents',
    detail:
      'Retrieval systems and agents built on your own documents. The Mediminds clinical pipeline searches 500K+ documents with about 180 ms median retrieval.',
    service: 'ai-automation-and-agents',
    caseId: 'mediminds'
  }
];

export type CaseStudy = {
  id: string;
  client: string;
  title: string;
  industry: string;
  summary: string;
  results: Stat[];
  image?: { src: string; alt: string; width: number; height: number; kind: 'browser' | 'phone' };
  link?: { href: string; label: string };
  note?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'mediminds',
    client: 'Mediminds',
    title: 'Mediminds: faster to onboard, cheaper to run',
    industry: 'Healthcare IT',
    summary:
      'An AI-powered hospital information system covering EMR, billing and ABDM/ABHA compliance. We moved it from Azure to AWS and redesigned how new customers get onboarded.',
    results: [
      { value: '40%', label: 'Lower cloud cost after the Azure to AWS migration and code optimizations' },
      { value: 'Days to minutes', label: 'Customer onboarding time' },
      { value: '10', label: 'New customers acquired in four months' }
    ],
    note: 'Client: Mediminds Technologies Private Limited, Bengaluru'
  },
  {
    id: 'lameris',
    client: 'Laméris Group',
    title: 'Laméris: a 115-year-old brand, now digital',
    industry: 'MedTech, Netherlands',
    summary:
      'A specialist supplier of ophthalmology and ENT equipment to clinics and operating rooms. SRES built their website from scratch for the Netherlands and Belgium, in Dutch, French and English.',
    results: [
      { value: '2', label: 'Countries' },
      { value: '3', label: 'Languages' }
    ],
    image: {
      src: '/work/lameris.jpg',
      alt: 'Laméris website home page in Dutch',
      width: 1400,
      height: 698,
      kind: 'browser'
    },
    link: { href: 'https://lameris-group.com', label: 'lameris-group.com' }
  },
  {
    id: 'meeteaze',
    client: 'MeetEaze',
    title: 'MeetEaze: helping expats find their people',
    industry: 'Community app, Canada',
    summary:
      'A community app for newcomers to Canada, starting in Vancouver: discover local places and events, then find someone to go with. SRES is building the full web and mobile product with AI-native development, from discovery to delivery.',
    results: [{ value: '2 weeks', label: 'From idea to prototype' }],
    image: {
      src: '/work/meeteaze.jpg',
      alt: 'MeetEaze mobile app discover screen for Vancouver',
      width: 520,
      height: 1023,
      kind: 'phone'
    }
  },
  {
    id: 'enterprise-audits',
    client: 'Dutch enterprises',
    title: 'Independent audits for enterprise teams',
    industry: 'Enterprise consulting, Netherlands',
    summary:
      'Technical audits and advisory for top companies in the Netherlands, across AWS, Azure and GCP, measured against recognised standards. Each audit ends in a risk and cost report, an architecture roadmap and a modernization plan.',
    results: [
      { value: '3', label: 'Clouds: AWS, Azure and GCP' },
      { value: '5', label: 'Standards, from OWASP to GDPR' }
    ]
  }
];

export const aiCapabilities = [
  {
    title: 'Agents',
    description: 'LangGraph and LangChain agents that plan, call tools and hand off to people.'
  },
  {
    title: 'RAG and content',
    description: 'Retrieval systems and automated content pipelines for learning and media.'
  },
  {
    title: 'Automation',
    description: 'APIs, webhooks and WhatsApp integrations that connect your tools.'
  }
];

export const aiInProduction =
  'In production: a clinical retrieval pipeline for Mediminds over 500K+ documents, with about 180 ms median retrieval.';

export const engagement = [
  {
    title: 'Fixed price',
    description: 'Scope, timeline and cost agreed upfront. No surprise invoices.'
  },
  {
    title: 'Outcome-based',
    description:
      'Part of our fee is tied to a result you care about: cost saved, customers onboarded, hours automated.'
  },
  {
    title: 'Senior-led',
    description: 'Architects stay hands-on from discovery to delivery.'
  }
];

export const regions = ['India', 'Netherlands', 'Belgium', 'Canada'];

export const credentials = ['GCP Professional Cloud Architect', 'SAFe 5 POPM', 'Six Sigma Green Belt'];

export const techStack = [
  { title: 'Backend and data', items: ['Java / Spring Boot', 'Node.js', 'TypeScript', 'Kafka'] },
  { title: 'Mobile', items: ['iOS', 'Android', 'React Native'] },
  { title: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
  { title: 'AI', items: ['LangGraph', 'LangChain', 'RAG pipelines'] },
  { title: 'Enterprise and integration', items: ['SAP', 'APIs and webhooks', 'WhatsApp'] },
  {
    title: 'Audit standards',
    items: ['OWASP Top 10 and ASVS', 'ISO/IEC 25010', 'Well-Architected reviews', 'CIS Benchmarks', 'GDPR']
  }
];

export const faqs = [
  {
    question: 'What does SRES Solutions do?',
    answer:
      'Four things, with one senior team: web and mobile apps, AI-native development, AI automation and agents, and technical audits with legacy modernization.'
  },
  {
    question: 'How do you price your work?',
    answer:
      'Either fixed price, where scope, timeline and cost are agreed upfront with no surprise invoices, or outcome-based, where part of our fee is tied to a result you care about: cost saved, customers onboarded or hours automated.'
  },
  {
    question: 'How do we get started?',
    answer:
      'Start with a 2-week audit or a fixed-price MVP. Tell us what you want to ship, cut or automate, and we come back with a scoped, fixed-price proposal.'
  },
  {
    question: 'Who actually does the work?',
    answer:
      'Senior engineers. Our architects stay hands-on from discovery to delivery rather than handing the project down.'
  },
  {
    question: 'How fast can you deliver?',
    answer:
      'We use AI across discovery, design, code and QA, so you see a working product in weeks. MeetEaze went from idea to prototype in 2 weeks.'
  },
  {
    question: 'What do I get from a technical audit?',
    answer:
      'A risk and cost report, an architecture roadmap and a modernization plan. We audit across AWS, Azure and GCP against OWASP Top 10 and ASVS, ISO/IEC 25010, cloud Well-Architected reviews, CIS Benchmarks and GDPR.'
  },
  {
    question: 'Do you have AI running in production?',
    answer:
      'Yes. We run a clinical retrieval pipeline for Mediminds over 500K+ documents, with about 180 ms median retrieval. We also build LangGraph and LangChain agents and WhatsApp, API and webhook automations.'
  },
  {
    question: 'Where are you based, and which regions do you serve?',
    answer:
      'We are based in Bengaluru, India, and serve Europe, North America and India. Our clients are in India, the Netherlands, Belgium and Canada.'
  }
];

export const forge = {
  title: 'SRES Forge: a legacy app modernization platform',
  status: 'Work in progress',
  summary:
    'Alongside client work, a dedicated SRES product team is building SRES Forge, a set of tools that make our clients’ legacy migrations faster.',
  points: [
    {
      title: 'Why',
      description: 'Legacy migrations are slow and manual, and every month of delay costs the client.'
    },
    {
      title: 'What',
      description: 'SRES Forge gives our engineers in-house tools to speed up client legacy migrations.'
    },
    { title: 'Status', description: 'Work in progress, built by a dedicated product team.' }
  ]
};

// Client quotes. The capability deck does not contain any yet, so this list is
// empty and the testimonials section stays hidden. Add a real, approved quote
// here and it appears on the home page and the case studies page.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];

export type BlogPost = {
  id: string;
  title: string;
  tag: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'why-ai-projects-fail',
    title: 'Why 85% of enterprise AI projects fail — and what fixes them',
    tag: 'AI Strategy',
    excerpt:
      'An evidence-based breakdown of the most common failure modes in enterprise AI and the practical changes that deliver outcomes.',
    author: 'SRES Research Team',
    date: 'Apr 18, 2026',
    readTime: '8 min'
  },
  {
    id: 'llm-production-checklist',
    title: 'Building LLM applications that actually reach production',
    tag: 'LLMs',
    excerpt:
      'A practical checklist for delivering large language models into enterprise workflows with reliability and security.',
    author: 'SRES Engineering',
    date: 'Apr 10, 2026',
    readTime: '11 min'
  },
  {
    id: 'eu-ai-act-90-days',
    title: 'The EU AI Act is live: what to do in the next 90 days',
    tag: 'Governance',
    excerpt:
      'A concise guide for product, legal, and engineering leaders on the immediate steps needed for AI compliance.',
    author: 'SRES Governance Team',
    date: 'Apr 3, 2026',
    readTime: '7 min'
  }
];
