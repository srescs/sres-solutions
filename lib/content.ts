export type Service = {
  slug: string;
  title: string;
  badge: string;
  hero: string;
  description: string;
  summary: string;
  stats: Array<{ label: string; value: string }>;
  highlights: Array<{ title: string; description: string }>;
  cta: string;
};

export const services: Service[] = [
  {
    slug: 'ai-strategy',
    title: 'AI Strategy & Transformation',
    badge: 'AI Strategy',
    hero: 'Build a clear AI roadmap that your board and teams can execute.',
    description:
      'From diagnostics and governance to KPI-driven roadmaps, we help enterprises plan AI transformation without getting lost in pilots.',
    summary:
      'A structured, enterprise-grade AI transformation engagement designed to align leadership, build measurable KPIs, and launch your first production initiatives in the first 90 days.',
    stats: [
      { label: 'Roadmap delivery', value: '8 weeks' },
      { label: 'Adoption rate', value: '92%' },
      { label: 'Average ROI', value: '5×' }
    ],
    highlights: [
      {
        title: 'AI maturity diagnostic',
        description: 'A 2-week assessment across people, process, data, tools and governance.'
      },
      {
        title: 'Executive alignment',
        description: 'A board-ready strategy that connects AI to business outcomes.'
      },
      {
        title: '90-day quick-win plan',
        description: 'A practical deployment roadmap that starts with value, not prototypes.'
      }
    ],
    cta: 'Book a strategy call to build your AI transformation blueprint.'
  },
  {
    slug: 'custom-ai-development',
    title: 'Custom AI Development',
    badge: 'Custom AI',
    hero: 'Build production-grade AI solutions tailored to your business.',
    description:
      'From custom LLM applications to domain-specific automation, we design and build AI systems that solve real problems and integrate with your stack.',
    summary:
      'AI development that goes beyond demos — designed for robust model performance, data security, and enterprise integration.',
    stats: [
      { label: 'Production launches', value: '100+' },
      { label: 'Time to first MVP', value: '6–10 weeks' },
      { label: 'Accuracy uplift', value: '30–60%' }
    ],
    highlights: [
      {
        title: 'LLM applications',
        description: 'Conversational agents, knowledge retrieval, and decision support built for your domain.'
      },
      {
        title: 'Custom model tuning',
        description: 'Fine-tuning and evaluation on your own data for reliable business outcomes.'
      },
      {
        title: 'Secure deployment',
        description: 'Managed delivery with enterprise-grade APIs, identity, and monitoring.'
      }
    ],
    cta: 'Launch custom AI software that is built to operate in production.'
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration & Automation',
    badge: 'Automation',
    hero: 'Connect AI with your workflows and enterprise systems.',
    description:
      'We integrate AI into the systems your teams already use — ERP, CRM, document management, ticketing, and analytics — to automate work and accelerate decision-making.',
    summary:
      'Automation and integration services that make AI actionable across operations, sales, support, and compliance.',
    stats: [
      { label: 'Workflow automation', value: '70%+' },
      { label: 'System integrations', value: '20+' },
      { label: 'Time saved', value: '2.5 hrs/day' }
    ],
    highlights: [
      {
        title: 'Workflow automation',
        description: 'AI-enabled process automation across enterprise systems.'
      },
      {
        title: 'API-first integration',
        description: 'Secure connectors that bridge AI with your core applications.'
      },
      {
        title: 'Ongoing optimization',
        description: 'Continuous improvement of AI workflows based on usage and outcomes.'
      }
    ],
    cta: 'Automate the work your team handles manually today.'
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering & AI Ops',
    badge: 'Data Ops',
    hero: 'Prepare your data pipeline for reliable AI delivery.',
    description:
      'We build the foundations required for AI — data pipelines, feature stores, observability, and production ML operations for trusted, repeatable outcomes.',
    summary:
      'A data engineering practice tailored to AI: clean pipelines, model-ready data, and operational controls for production-scale AI.',
    stats: [
      { label: 'Data accuracy', value: '99%' },
      { label: 'Pipeline uptime', value: '99.9%' },
      { label: 'Delivery velocity', value: '3×' }
    ],
    highlights: [
      {
        title: 'Pipeline orchestration',
        description: 'Scalable ETL, ingestion, and model feature pipelines.'
      },
      {
        title: 'MLOps readiness',
        description: 'Monitoring, retraining and deployment frameworks for AI models.'
      },
      {
        title: 'Data governance',
        description: 'Reliable data controls for privacy, compliance, and quality.'
      }
    ],
    cta: 'Build the data foundation that makes AI dependable.'
  },
  {
    slug: 'ai-analytics',
    title: 'AI-Powered Analytics',
    badge: 'Analytics',
    hero: 'Turn data into AI-driven business insights.',
    description:
      'We help enterprises extract insight from data using AI-native analytics, dashboards, and embedded intelligence for better decision-making.',
    summary:
      'Analytics that surface the right signals, not just dashboards — powered by AI and designed for business outcomes.',
    stats: [
      { label: 'Decision velocity', value: '4×' },
      { label: 'Insight adoption', value: '85%' },
      { label: 'Data-to-value', value: '30%' }
    ],
    highlights: [
      {
        title: 'Executive dashboards',
        description: 'AI-driven KPI reporting and anomaly detection for leaders.'
      },
      {
        title: 'Embedded intelligence',
        description: 'Actionable recommendations inside your existing tools.'
      },
      {
        title: 'Self-service analytics',
        description: 'Business-friendly AI insights with trusted data controls.'
      }
    ],
    cta: 'Deliver analytics that people actually use.'
  },
  {
    slug: 'ai-governance',
    title: 'AI Governance & Compliance',
    badge: 'Governance',
    hero: 'Deploy AI responsibly with trust and visibility.',
    description:
      'We help organisations build responsible AI practices, compliance frameworks, and controls to manage risk while scaling AI safely.',
    summary:
      'AI governance services for risk-aware AI adoption, from policy design to implementation and audit readiness.',
    stats: [
      { label: 'Compliance readiness', value: '100%' },
      { label: 'Policy coverage', value: '8 frameworks' },
      { label: 'Risk reduction', value: '50%' }
    ],
    highlights: [
      {
        title: 'Responsible AI framework',
        description: 'Ethics, data provenance, and model safeguards aligned to your business.'
      },
      {
        title: 'Compliance advisory',
        description: 'Guidance for EU AI Act, India AI policy, GDPR, and internal controls.'
      },
      {
        title: 'Audit-ready processes',
        description: 'Documentation and monitoring for governance and regulatory review.'
    }
    ],
    cta: 'Put responsible AI practices at the center of your deployment.'
  }
];

export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  summary: string;
  results: Array<{ value: string; label: string }>;
  link: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'fraud-detection',
    title: 'Real-time fraud detection with $12M annual savings',
    industry: 'Financial Services',
    summary:
      'Delivered a real-time AI fraud platform that reduced false positives, accelerated detection and saved millions in chargebacks.',
    results: [
      { value: '$12M', label: 'Annual savings' },
      { value: '43%', label: 'Fewer false positives' }
    ],
    link: '/case-studies'
  },
  {
    id: 'clinical-documentation',
    title: 'Clinical documentation AI that saves 2.5 hours per doctor per day',
    industry: 'Healthcare',
    summary:
      'Built an ambient clinical AI workflow that reduced documentation burden, improved accuracy, and increased clinician satisfaction.',
    results: [
      { value: '2.5 hrs', label: 'Saved per day' },
      { value: '94%', label: 'Accuracy rate' }
    ],
    link: '/case-studies'
  },
  {
    id: 'predictive-maintenance',
    title: '40% downtime reduction through predictive maintenance',
    industry: 'Manufacturing',
    summary:
      'Implemented AI-based maintenance prediction across facilities, reducing outages and enabling proactive repairs.',
    results: [
      { value: '40%', label: 'Downtime cut' },
      { value: '21 days', label: 'Early warning lead' }
    ],
    link: '/case-studies'
  }
];

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
