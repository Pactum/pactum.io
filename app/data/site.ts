export const site = {
  name: "Pactum IO",
  legalName: "Pactum IO, LLC",
  url: "https://pactum.io",
  tagline: "I help businesses put AI to work, and I still write the code myself.",
  description:
    "Pactum IO is the consulting practice of Matthew Swezey, a principal engineer who helps small businesses, nonprofits, and product teams put AI to work. He automates workflows, builds custom AI tools and agents, runs hands on training, and builds the cloud systems that keep it all running.",
  // Shorter description for <meta name="description"> (aim for 160 characters or fewer).
  metaDescription:
    "I'm Matthew Swezey, a principal engineer. I help small businesses, nonprofits, and product teams automate busy work, build AI tools, and train staff.",
  // Bump when page content changes. Used as <lastmod> in sitemap.xml.
  contentUpdated: "2026-11-25",
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
    title: "I start with the work that eats up your week.",
    body: "I work with restaurants, retailers, service businesses, manufacturers, nonprofits, and small teams. Once we know where your time goes, I put AI on the tasks where it actually helps and leave the rest alone.",
  },
  {
    id: "engineering",
    label: "Engineering",
    title: "I also build and fix the software underneath.",
    body: "If you need a system built, scaled, or rescued, I've been doing that work for more than a decade, mostly on AWS.",
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
    eyebrow: "A good place to start",
    short: "I help you figure out where AI fits in your business and get your team using it.",
    summary:
      "This is hands on work for small businesses and nonprofits. I sit down with the people doing the work, find the tasks AI can take off their plate, and set up tools they'll actually be using the next Monday.",
    problem:
      "Most owners know AI could help, but they don't have time to sort out what's useful from what's hype. Tools get bought and never used, or staff paste sensitive data into whatever free tool they find.",
    approach:
      "I start by listening. We go through the repetitive work in your week, pick two or three tasks where the payoff is clear, and set up the tools together. I go after the simple wins first, like drafting, research, summarizing, and answering common questions. I only suggest a custom build when it's worth the cost.",
    outcomes: [
      "A short list of places AI can help, ranked by payoff and effort",
      "Tools that are set up and working for your team, not a slide deck",
      "Simple guidelines for what data can go where",
      "A plan for the next step if you want to keep going",
    ],
    engagements: [
      "Finding where AI can help your business",
      "Setting up and rolling out tools for small teams",
      "Writing data handling and usage guidelines",
      "Checking in after rollout to see what's working",
    ],
  },
  {
    slug: "workflow-automation",
    group: "ai",
    title: "Workflow Automation",
    eyebrow: "Automation",
    short: "I connect the tools you already use and let AI handle the repetitive steps.",
    summary:
      "I build automations that move information between your email, forms, spreadsheets, CRM, and accounting tools. AI handles the steps that used to need a person, like sorting, summarizing, drafting, and pulling data out of documents.",
    problem:
      "Small teams lose hours to copy and paste. Intake forms get retyped into spreadsheets, invoices get keyed in by hand, and the same email gets answered twenty times. Off the shelf automations also tend to break quietly, and nobody notices for weeks.",
    approach:
      "I've been automating business workflows since I worked on site as a consultant for AEM BPM customers, deploying and customizing their workflow systems. Now I map one workflow from start to finish, automate the tedious middle, and keep a person involved wherever judgment matters. Every automation I build logs what it does and sends an alert when it fails, because an automation that breaks silently is worse than having none at all.",
    outcomes: [
      "Repetitive steps taken out of a real workflow",
      "AI used for sorting, drafting, and extraction where it's reliable",
      "Alerts when something breaks instead of silent failures",
      "Plain English docs on how it works and how to change it",
    ],
    engagements: [
      "Quotes, customer replies, and follow ups",
      "Intake and scheduling",
      "Pulling data out of documents and invoices",
      "Sorting and triaging email",
      "Reports built from the tools you already use",
    ],
  },
  {
    slug: "saas-bootstrapping",
    group: "engineering",
    title: "SaaS Bootstrapping",
    eyebrow: "For founders",
    short: "I build the parts every SaaS needs: sign in, accounts, billing, and the first version of your product.",
    summary:
      "I help founders get a real SaaS foundation in place, including sign in, multi tenant accounts, billing, an admin area, and the first working version of the product, without burning a year of runway on setup.",
    problem:
      "SaaS startups lose months building the same pieces everyone needs: users, organizations, roles, Stripe, email, admin, and deployment. Meanwhile the actual product idea sits and waits.",
    approach:
      "I put together a modern, proven foundation and get you to the point where a customer can sign up and pay. I treat sign in, accounts, billing, and admin as part of the product rather than chores to put off. Then we build the thing that makes your product different on top of it.",
    outcomes: [
      "An account and permissions model that won't need a rewrite by your fifth customer",
      "Billing connected to a real checkout and customer portal",
      "Admin and operations basics from the first day",
      "A codebase you can hire engineers onto",
    ],
    engagements: [
      "SaaS foundation builds",
      "Sign in, organizations, and roles",
      "Billing and subscriptions",
      "Getting an MVP ready for production",
    ],
  },
  {
    slug: "cloud-architecture",
    group: "engineering",
    title: "Cloud Architecture",
    eyebrow: "Mostly AWS",
    short: "I design cloud systems that fit your workload and your budget.",
    summary:
      "I design systems on AWS and the services around it. That covers how services are split up, where data lives, networking, identity, and cost. I design for the system you'll actually run day to day, not a diagram that looks good on a slide.",
    problem:
      "Cloud setups tend to grow by accident. Services multiply, data ends up in awkward places, and the whole thing only makes sense to the person who clicked it together.",
    approach:
      "I start with your traffic, your data, and the ways things can fail. Then I choose the smallest set of managed services that can handle the load, and I plan identity, networking, and monitoring from the beginning instead of bolting them on later.",
    outcomes: [
      "A written architecture you can explain and defend",
      "Service and data boundaries that match how your product works",
      "Clear decisions on identity, networking, and limiting the damage when something fails",
      "A plan for cost and operations, not just a diagram",
    ],
    engagements: [
      "New cloud designs",
      "Reviewing and simplifying an existing setup",
      "Reviews in the style of AWS Well-Architected",
      "Migration and modernization plans",
    ],
  },
  {
    slug: "ai",
    group: "ai",
    title: "AI Tools and Agents",
    eyebrow: "Custom builds",
    short: "I build custom AI tools, assistants, and agents that hold up in real use.",
    summary:
      "When off the shelf tools aren't enough, I build custom assistants that work from your documents, agents that take actions in your systems, and AI features inside your product. I include the parts most prototypes skip, like retrieval, testing, cost control, and monitoring.",
    problem:
      "A lot of AI projects stall somewhere between a promising demo and something people can rely on. Slow responses, inconsistent answers, questions about data access, and cost all tend to show up after the first demo, when real users are already trying it.",
    approach:
      "I start with the job the AI is supposed to do, then build the simplest system that can do it safely. That usually means clean connections to the model provider, your data, and your tools, a person reviewing anything risky, and enough monitoring to tell whether it's actually working.",
    outcomes: [
      "AI built around a specific job, not a chatbot stuck on your homepage",
      "Retrieval, tool use, and testing your team can run",
      "Cost, speed, and safety limits planned from the start",
      "Docs your team can use to keep improving it",
    ],
    engagements: [
      "Assistants that answer from your own documents",
      "Agents that act in your systems with a person reviewing",
      "AI features inside an existing product",
      "Testing, cost control, and getting ready for production",
    ],
  },
  {
    slug: "ai-training",
    group: "ai",
    title: "AI Training and Workshops",
    eyebrow: "Workshops and coaching",
    short: "I run hands on sessions that get your team using AI well and safely.",
    summary:
      "I run practical workshops for owners, staff, and volunteers. You bring real tasks from your job and leave with prompts, workflows, and habits you can use the same day.",
    problem:
      "Generic AI courses teach features, not judgment. People either avoid the tools or trust them too much, and nobody is sure what's safe to paste in.",
    approach:
      "I build each session around your actual work. We practice on real tasks, talk about where AI is strong and where it makes things up, and agree on simple rules for sensitive data. I keep groups small and skip the jargon.",
    outcomes: [
      "Staff using AI on real work within the same week",
      "A shared library of prompts and workflows for your team",
      "Clear rules for privacy and for checking AI output",
      "Reference material people can come back to",
    ],
    engagements: [
      "Team workshops, in person or remote",
      "One on one coaching for owners and team leads",
      "Sessions for community and nonprofit groups",
      "Custom guides for your tools and workflows",
    ],
  },
  {
    slug: "full-stack",
    group: "engineering",
    title: "Full Stack",
    eyebrow: "Web apps",
    short: "I build web apps that are fast, well typed, and easy to maintain.",
    summary:
      "I handle product work from end to end, including React front ends, APIs, data models, sign in, and the small details that make software feel finished. You get one person building the piece you need shipped instead of a string of handoffs between specialists.",
    problem:
      "Full stack work often gets split across too many people. The UI, the API, and the data model drift apart, nobody owns the whole user experience, shipping slows down, and the product feels unfinished.",
    approach:
      "I take one complete feature and own all of it, from the database schema to the API, UI, sign in, and deployment. I stick with modern, proven tools like TypeScript, render on the server when search ranking or load time matters, and keep the code organized so the next team isn't stuck with it.",
    outcomes: [
      "Features that actually ship, not half connected mockups",
      "Typed contracts between the UI and the API",
      "Sign in, billing, and admin flows that actually work",
      "A codebase a small team can keep building on",
    ],
    engagements: [
      "New product builds",
      "Shipping features on your existing stack",
      "Rescuing a struggling front end or API",
      "Turning designs into production code",
    ],
  },
  {
    slug: "devops",
    group: "engineering",
    title: "DevOps",
    eyebrow: "CI/CD and releases",
    short: "I set up CI, environments, and release processes so shipping becomes routine.",
    summary:
      "I work on pipelines, environments, monitoring, and everything between a git push and production. The goal is a release process your team trusts on an ordinary Tuesday afternoon, not just on launch day.",
    problem:
      "When releases are fragile, every change turns into an event. Environments drift apart, secrets live in people's heads, and everyone is afraid to touch production.",
    approach:
      "I map out how code actually reaches your users, then replace the guesswork with something written down. Pipelines, preview environments, secrets, rollbacks, and basic monitoring get versioned and documented like any other part of the product.",
    outcomes: [
      "Repeatable deploys with a way to roll back",
      "Preview and staging environments that match production",
      "Secrets and config that don't depend on one person's memory",
      "A pipeline your team can change with confidence",
    ],
    engagements: [
      "Designing and building CI/CD",
      "Cleaning up environments and secrets",
      "Release and rollback planning",
      "Faster builds and deploys",
    ],
  },
  {
    slug: "platform",
    group: "engineering",
    title: "Platform",
    eyebrow: "Internal tools for engineers",
    short: "I build shared tools and services so your product teams stop rebuilding the same things.",
    summary:
      "I work on internal platforms, shared services, and developer experience. That means the pieces every product team needs, like sign in, accounts, logging, monitoring, and standard project templates, built once and built well.",
    problem:
      "Without a shared platform, every team builds its own sign in, deployment, logging, and account handling. The company pays for that in inconsistencies, outages, and slow onboarding.",
    approach:
      "I look for work that keeps getting repeated and make the shared version the easiest option. That might be a shared service, a template, or a set of APIs. I build whatever teams will actually use, not a platform nobody asked for.",
    outcomes: [
      "Standard paths your product teams will actually follow",
      "Shared building blocks for sign in, accounts, and services",
      "Less copied and pasted infrastructure across teams",
      "Docs and examples that stay useful after the first week",
    ],
    engagements: [
      "Internal platform design",
      "Pulling shared services out of existing code",
      "Developer experience and project templates",
      "Aligning architecture across teams",
    ],
  },
  {
    slug: "blockchain",
    group: "engineering",
    title: "Blockchain / Crypto",
    eyebrow: "Smart contracts and dapps",
    short: "I build smart contracts and the regular software that has to work alongside them.",
    summary:
      "I work on smart contracts, indexing, wallets, and the full product around a protocol. I've been building in this space since 2018, and I care more about correctness and usability than hype.",
    problem:
      "Crypto products usually fail where the pieces meet. A contract can't be operated safely, an indexer returns wrong data, a wallet flow confuses users, or the backend treats the chain as an afterthought.",
    approach:
      "I treat the blockchain as one more data store, just one with strict limits and public consequences. I design the contracts, indexers, APIs, and UI together as one system, with a threat model, an upgrade plan, and the day to day operations work included.",
    outcomes: [
      "Contracts and integrations that match how people actually use the product",
      "Indexing and reads that stay accurate under load",
      "Wallet and transaction flows that don't overwhelm users",
      "Clear security and upgrade boundaries",
    ],
    engagements: [
      "Protocol and dapp architecture",
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
