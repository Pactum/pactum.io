export const site = {
  name: "Pactum IO",
  legalName: "Pactum IO, LLC",
  url: "https://pactum.io",
  tagline: "Practical AI and cloud engineering from a principal who still writes the code.",
  description:
    "Pactum IO is the consulting practice of Matthew Swezey. Practical AI for small businesses, nonprofits, and product teams: workflow automation, AI tools and agents, and hands on training, built on solid cloud engineering.",
  linkedin: "https://www.linkedin.com/in/swezey-matt/",
  github: "https://github.com/pactum",
  // TODO(content): set these to turn on the direct contact buttons in the CTA band.
  // Leave empty to hide them. Example: "https://cal.com/your-handle/intro"
  bookingUrl: "" as string,
  email: "" as string,
  locale: "en_US",
  owner: {
    name: "Matthew Swezey",
    role: "Owner & Principal Engineer",
    photo: "/swezey_headshot.jpg",
  },
} as const;

export type ServiceGroup = "ai" | "engineering";

export const serviceGroups: { id: ServiceGroup; label: string; title: string; body: string }[] = [
  {
    id: "ai",
    label: "Practical AI",
    title: "AI that saves real hours for real businesses.",
    body: "For restaurants, retailers, service businesses, manufacturers, nonprofits, and lean teams. We start from the work that eats your week, then put AI where it actually helps.",
  },
  {
    id: "engineering",
    label: "Engineering",
    title: "The cloud and software foundation underneath it.",
    body: "Senior engineering for teams that need systems built, scaled, or rescued.",
  },
];

export type Service = {
  slug: string
  group: ServiceGroup
  title: string
  eyebrow: string
  short: string
  summary: string
  problem: string
  approach: string
  outcomes: string[]
  engagements: string[]
};

export const services: Service[] = [
  {
    slug: "ai-implementation",
    group: "ai",
    title: "AI Implementation",
    eyebrow: "Start here",
    short: "Find where AI helps your business, then put it to work with your team.",
    summary:
      "A hands on engagement for small businesses and nonprofits. We sit down with the people doing the work, find the tasks AI can take off their plate, and set up tools they will actually use on Monday.",
    problem:
      "Most owners know AI could help but do not have time to sort hype from useful. Tools get bought and never adopted, or staff paste sensitive data into whatever is free.",
    approach:
      "I listen first. We map the repetitive work in your week, pick two or three tasks with a clear payoff, and set up the tools together. Simple wins come first: drafting, research, summarizing, and answering common questions. Custom builds only when they earn it.",
    outcomes: [
      "A short list of AI opportunities ranked by payoff and effort",
      "Working tools set up for your team, not a slide deck",
      "Simple guidelines for what data goes where",
      "A plan for the next step if you want to go further",
    ],
    engagements: [
      "AI opportunity assessment",
      "Tool setup and rollout for small teams",
      "Data handling and usage guidelines",
      "Follow up check ins after rollout",
    ],
  },
  {
    slug: "workflow-automation",
    group: "ai",
    title: "Workflow Automation",
    eyebrow: "Hours back every week",
    short: "Connect the tools you already use and let AI handle the repetitive steps.",
    summary:
      "Automations that move data between your email, forms, spreadsheets, CRM, and accounting tools, with AI handling the steps that used to need a person: sorting, summarizing, drafting, and extracting.",
    problem:
      "Small teams lose hours to copy and paste: intake forms retyped into spreadsheets, invoices keyed in by hand, the same email answered twenty times. Off the shelf automations break quietly and nobody notices for weeks.",
    approach:
      "I have automated human centric workflows since working on site as a consultant with AEM BPM customers, deploying and customizing workflow solutions. Today I map one workflow end to end, then automate the boring middle while keeping a person in the loop where judgment matters. Every automation gets logging and an alert when it fails, because silent breakage is worse than no automation.",
    outcomes: [
      "Repetitive steps removed from a real workflow",
      "AI used for sorting, drafting, and extraction where it is reliable",
      "Alerts when something breaks, not silent failures",
      "Plain language docs on how it works and how to change it",
    ],
    engagements: [
      "Quotes, customer replies, and follow ups",
      "Intake and scheduling automation",
      "Document and invoice data extraction",
      "Email and inbox triage",
      "Reporting pulled from the tools you already use",
    ],
  },
  {
    slug: "saas-bootstrapping",
    group: "engineering",
    title: "SaaS Bootstrapping",
    eyebrow: "From zero to billed",
    short: "The boilerplate a SaaS actually needs: auth, billing, tenancy, and a first product loop.",
    summary:
      "I help founders and operators stand up a real SaaS foundation (authentication, multi tenancy, billing, admin, and the first product loop) without lighting a year of runway on framework archaeology.",
    problem:
      "SaaS startups lose months on the same unsolved package: users, orgs, roles, Stripe, email, admin, and deploy. The product idea waits while the scaffolding thrashes.",
    approach:
      "I assemble a boring, modern foundation and get a billable loop working. Auth, tenancy, billing, and admin are treated as the product, not chores to defer. Then we put your actual wedge on top.",
    outcomes: [
      "A tenancy and auth model that will not need a rewrite at customer five",
      "Billing wired to a real checkout and customer portal",
      "Admin and operational basics from day one",
      "A foundation you can hire onto",
    ],
    engagements: [
      "SaaS foundation / boilerplate builds",
      "Auth, orgs, and role models",
      "Billing and subscription integration",
      "MVP-to-production hardening",
    ],
  },
  {
    slug: "cloud-architecture",
    group: "engineering",
    title: "Cloud Architecture",
    eyebrow: "AWS-first systems",
    short: "Cloud systems that match the workload and the bill you are willing to pay.",
    summary:
      "Architecture on AWS and adjacent cloud: service boundaries, data stores, networking, identity, and cost. I design for the system you will operate, not a conference diagram.",
    problem:
      "Cloud estates grow by accident. Services multiply, data gravity shows up late, and the architecture only makes sense to the person who clicked it together.",
    approach:
      "I start from traffic, data, and failure modes. Then I pick the smallest set of managed services that can carry the load, with identity, networking, and observability as first class pieces, not extras.",
    outcomes: [
      "A written architecture you can defend",
      "Service and data boundaries that match the product",
      "Identity, networking, and blast-radius decisions made explicit",
      "A cost and operations story, not just a diagram",
    ],
    engagements: [
      "Greenfield cloud design",
      "Existing estate review and simplification",
      "Well-architected style assessments",
      "Migration and modernization plans",
    ],
  },
  {
    slug: "ai",
    group: "ai",
    title: "AI Tools and Agents",
    eyebrow: "Custom builds",
    short: "Custom AI tools, assistants, and agents that hold up in production.",
    summary:
      "When off the shelf is not enough: custom assistants trained on your documents, agents that take actions in your systems, and AI features inside your product. Built with retrieval, evaluation, cost control, and the operational pieces most prototypes skip.",
    problem:
      "Most AI work dies between a notebook and a reliable product surface. Latency, evals, prompt drift, data boundaries, and cost show up after the first demo, when it is already in front of users.",
    approach:
      "I start from the job the model is supposed to do, then design the thinnest system that can do it safely. That usually means clear interfaces around providers, retrieval, tools, and human review, plus instrumentation so you can tell if it is actually working.",
    outcomes: [
      "AI shaped around a job to be done, not a chatbot bolted onto the homepage",
      "Retrieval, tool use, and eval loops you can operate",
      "Cost, latency, and safety constraints designed in",
      "Handoff docs a team can keep evolving",
    ],
    engagements: [
      "Assistants grounded in your own documents",
      "Agents that act in your systems with human review",
      "AI features inside an existing product",
      "Evaluation, cost control, and production hardening",
    ],
  },
  {
    slug: "ai-training",
    group: "ai",
    title: "AI Training and Workshops",
    eyebrow: "Build confidence",
    short: "Hands on sessions that get your team using AI well, safely, and often.",
    summary:
      "Practical workshops for owners, staff, and volunteers. Bring your real tasks and leave with prompts, workflows, and habits you can use the same day.",
    problem:
      "Generic AI courses teach features, not judgment. People either avoid the tools or trust them too much, and nobody knows what is safe to paste in.",
    approach:
      "Sessions are built around your actual work. We practice on real tasks, cover where AI is strong and where it makes things up, and agree on simple rules for sensitive data. Small groups, plain language, no jargon.",
    outcomes: [
      "Staff who use AI on real work the same week",
      "A shared prompt and workflow library for your team",
      "Clear rules for privacy and checking AI output",
      "Follow up material people can come back to",
    ],
    engagements: [
      "Team workshops, in person or remote",
      "One on one coaching for owners and leads",
      "Community and nonprofit group sessions",
      "Custom guides for your tools and workflows",
    ],
  },
  {
    slug: "full-stack",
    group: "engineering",
    title: "Full Stack",
    eyebrow: "Product engineering",
    short: "Web apps that are fast, typed, and boring in the ways that matter.",
    summary:
      "End-to-end product work: React, APIs, data models, auth, and the details that make software feel finished. I build the slice you need shipped, not a committee of specialists.",
    problem:
      "Full-stack work gets split across too many hands. The UI, API, and data model drift. Nobody owns the user path. Shipping slows down and the product feels unfinished.",
    approach:
      "I take a vertical slice and own it: schema, API, UI, auth, and deploy. Preferences are modern and boring: TypeScript, server-rendered where SEO or first paint matters, and clear module boundaries so a later team is not trapped.",
    outcomes: [
      "Shippable product surfaces, not half-wired mocks",
      "Typed contracts between UI and API",
      "Auth, billing, and admin paths that actually exist",
      "A codebase a small team can keep moving",
    ],
    engagements: [
      "Greenfield product builds",
      "Feature delivery on an existing stack",
      "Frontend / API rescue work",
      "Design-to-production implementation",
    ],
  },
  {
    slug: "devops",
    group: "engineering",
    title: "DevOps",
    eyebrow: "Delivery systems",
    short: "CI, environments, and release paths that make shipping the default.",
    summary:
      "Pipelines, environments, observability, and the glue between git and production. The goal is a delivery system your team trusts on a Tuesday afternoon, not just a launch day.",
    problem:
      "When delivery is fragile, every change becomes a ceremony. Environments drift, secrets leak into folklore, and production is a place people are afraid to touch.",
    approach:
      "I map how code actually gets to users, then remove the folklore. Pipelines, preview environments, secrets, rollbacks, and basic telemetry get treated as product infrastructure, versioned and documented.",
    outcomes: [
      "Repeatable deploys with a rollback story",
      "Preview and staging environments that match production",
      "Secrets and config that are not tribal knowledge",
      "A pipeline a team can extend without fear",
    ],
    engagements: [
      "CI/CD design and implementation",
      "Environment and secrets hygiene",
      "Release and rollback strategy",
      "Build and deploy performance",
    ],
  },
  {
    slug: "platform",
    group: "engineering",
    title: "Platform",
    eyebrow: "Internal leverage",
    short: "The paved roads that keep product teams from reinventing the same wheel.",
    summary:
      "Internal platforms, shared services, and developer experience. I build the boring leverage: auth, tenancy, observability, golden paths, and the services every product team otherwise rebuilds badly.",
    problem:
      "Without a platform, every squad invents auth, deploy, logging, and tenancy again. The company pays for it in drift, outages, and onboarding time.",
    approach:
      "I look for the repeated work, then turn it into a path of least resistance. That might be a shared service, a template, or a set of APIs, whatever actually gets used, not a platform nobody asked for.",
    outcomes: [
      "Golden paths product teams will actually take",
      "Shared auth, tenancy, and service primitives",
      "Less copy-paste infrastructure across squads",
      "Docs and examples that survive the first week",
    ],
    engagements: [
      "Internal platform design",
      "Shared service extraction",
      "Developer experience and templates",
      "Multi-team architecture alignment",
    ],
  },
  {
    slug: "blockchain",
    group: "engineering",
    title: "Blockchain / Crypto",
    eyebrow: "Protocol to product",
    short: "On-chain systems and the off-chain product that has to live with them.",
    summary:
      "Smart contracts, indexing, wallets, and the full-stack product around a protocol. I have been in this space long enough to care more about correctness and UX than slogans.",
    problem:
      "Crypto products fail in the seams: a contract that cannot be operated, an indexer that lies, a wallet flow users abandon, or a backend that treats the chain as an afterthought.",
    approach:
      "I treat the chain as one constrained datastore with public consequences. Contracts, indexers, APIs, and UI get designed as one system, with threat models, upgrade paths, and the unglamorous operational work included.",
    outcomes: [
      "Contracts and integrations that match how the product is actually used",
      "Indexing and read paths that stay honest under load",
      "Wallet and transaction UX that does not leak complexity",
      "Clear security and upgrade boundaries",
    ],
    engagements: [
      "Protocol / dapp architecture",
      "Smart contract integration",
      "Indexing and backend design",
      "Wallet, key, and transaction flows",
    ],
  },
];

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Work" },
  { to: "/technologies", label: "Tech" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
