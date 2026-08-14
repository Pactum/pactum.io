export const site = {
  name: "Pactum IO",
  legalName: "Pactum IO, LLC",
  url: "https://pactum.io",
  tagline: "Software engineering consulting from a principal who still writes the code.",
  description:
    "Pactum IO is the software consulting practice of Matthew Swezey. SaaS bootstrapping, cloud architecture, AI, full stack, DevOps, platform, and blockchain — scoped and shipped by one operator.",
  linkedin: "https://www.linkedin.com/in/swezey-matt/",
  github: "https://github.com/pactum",
  locale: "en_US",
  owner: {
    name: "Matthew Swezey",
    role: "Owner & Principal Engineer",
    photo: "/swezey_headshot.jpg",
  },
} as const;

export type Service = {
  slug: string
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
    slug: "saas-bootstrapping",
    title: "SaaS Bootstrapping",
    eyebrow: "From zero to billed",
    short: "The boilerplate a SaaS actually needs: auth, billing, tenancy, and a first product loop.",
    summary:
      "I help founders and operators stand up a real SaaS foundation — authentication, multi-tenancy, billing, admin, and the first product loop — without lighting a year of runway on framework archaeology.",
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
    title: "Cloud Architecture",
    eyebrow: "AWS-first systems",
    short: "Cloud systems that match the workload — and the bill you are willing to pay.",
    summary:
      "Architecture on AWS and adjacent cloud: service boundaries, data stores, networking, identity, and cost. I design for the system you will operate, not a conference diagram.",
    problem:
      "Cloud estates grow by accident. Services multiply, data gravity shows up late, and the architecture only makes sense to the person who clicked it together.",
    approach:
      "I start from traffic, data, and failure modes. Then I pick the smallest set of managed services that can carry the load, with identity, networking, and observability as first-class pieces — not extras.",
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
    title: "AI",
    eyebrow: "Applied systems",
    short: "Production AI that fits the product — not a demo taped to the side.",
    summary:
      "Design and ship AI features, agent workflows, and model integrations that hold up in production: retrieval, evaluation, cost control, and the boring operational pieces most prototypes skip.",
    problem:
      "Most AI work dies between a notebook and a reliable product surface. Latency, evals, prompt drift, data boundaries, and cost show up after the first demo — when it is already in front of users.",
    approach:
      "I start from the job the model is supposed to do, then design the thinnest system that can do it safely. That usually means clear interfaces around providers, retrieval, tools, and human review — plus instrumentation so you can tell if it is actually working.",
    outcomes: [
      "Feature-shaped AI, not a chatbot bolted onto the homepage",
      "Retrieval, tool use, and eval loops you can operate",
      "Cost, latency, and safety constraints designed in",
      "Handoff docs a team can keep evolving",
    ],
    engagements: [
      "AI feature architecture and implementation",
      "RAG / agent workflow design",
      "Provider selection and abstraction",
      "Evaluation and production hardening",
    ],
  },
  {
    slug: "full-stack",
    title: "Full Stack",
    eyebrow: "Product engineering",
    short: "Web apps that are fast, typed, and boring in the ways that matter.",
    summary:
      "End-to-end product work: React, APIs, data models, auth, and the details that make software feel finished. I build the slice you need shipped, not a committee of specialists.",
    problem:
      "Full-stack work gets split across too many hands. The UI, API, and data model drift. Nobody owns the user path. Shipping slows down and the product feels unfinished.",
    approach:
      "I take a vertical slice and own it — schema, API, UI, auth, and deploy. Preferences are modern and boring: TypeScript, server-rendered where SEO or first paint matters, and clear module boundaries so a later team is not trapped.",
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
    title: "DevOps",
    eyebrow: "Delivery systems",
    short: "CI, environments, and release paths that make shipping the default.",
    summary:
      "Pipelines, environments, observability, and the glue between git and production. The goal is a delivery system your team trusts on a Tuesday afternoon, not just a launch day.",
    problem:
      "When delivery is fragile, every change becomes a ceremony. Environments drift, secrets leak into folklore, and production is a place people are afraid to touch.",
    approach:
      "I map how code actually gets to users, then remove the folklore. Pipelines, preview environments, secrets, rollbacks, and basic telemetry get treated as product infrastructure — versioned and documented.",
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
    title: "Platform",
    eyebrow: "Internal leverage",
    short: "The paved roads that keep product teams from reinventing the same wheel.",
    summary:
      "Internal platforms, shared services, and developer experience. I build the boring leverage: auth, tenancy, observability, golden paths, and the services every product team otherwise rebuilds badly.",
    problem:
      "Without a platform, every squad invents auth, deploy, logging, and tenancy again. The company pays for it in drift, outages, and onboarding time.",
    approach:
      "I look for the repeated work, then turn it into a path of least resistance. That might be a shared service, a template, or a set of APIs — whatever actually gets used, not a platform nobody asked for.",
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
    title: "Blockchain / Crypto",
    eyebrow: "Protocol to product",
    short: "On-chain systems and the off-chain product that has to live with them.",
    summary:
      "Smart contracts, indexing, wallets, and the full-stack product around a protocol. I have been in this space long enough to care more about correctness and UX than slogans.",
    problem:
      "Crypto products fail in the seams: a contract that cannot be operated, an indexer that lies, a wallet flow users abandon, or a backend that treats the chain as an afterthought.",
    approach:
      "I treat the chain as one constrained datastore with public consequences. Contracts, indexers, APIs, and UI get designed as one system — with threat models, upgrade paths, and the unglamorous operational work included.",
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
