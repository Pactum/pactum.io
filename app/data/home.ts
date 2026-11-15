// Homepage copy and proof content.
//
// Anything flagged `placeholder: true` is NOT real content. Placeholders render
// only in local development (`npm run dev`) so they can never reach production.
// Replace them with real, approved content and remove the flag to publish.

export const showPlaceholders = import.meta.env.DEV;

export const hero = {
  eyebrow: "Software engineering consulting",
  titleTop: "Senior engineering",
  titleBottom: "for the work that has to ship.",
  body: "I'm Matthew Swezey, a principal engineer building software since 2013. Teams bring me in to design AWS architecture, stand up SaaS foundations, fix delivery pipelines, and put AI into production. Project or contract, you work with me directly.",
  highlights: [
    "Engineering since 2013",
    "AWS first",
    "Architecture through implementation",
    "Available for projects and contracts",
  ],
};

export const engagements = [
  {
    label: "Advise",
    title: "Architecture and delivery reviews",
    body: "A focused look at your system, cloud estate, or pipeline. You get written findings and a prioritized plan your team can act on.",
  },
  {
    label: "Build",
    title: "Scoped project builds",
    body: "A defined outcome delivered start to finish: a SaaS foundation, a platform service, an AI feature, or a migration.",
  },
  {
    label: "Embed",
    title: "Contract principal engineer",
    body: "I join your team for a set term to lead architecture, unblock delivery, and write production code alongside your engineers.",
  },
];

export const processSteps = [
  {
    title: "Intro call",
    body: "We talk through the problem, the constraints, and the timeline. No deck required.",
  },
  {
    title: "Written scope",
    body: "You get deliverables and boundaries in writing before any work starts.",
  },
  {
    title: "Build in the open",
    body: "Work lands in your repos and your cloud accounts, so progress is always visible.",
  },
  {
    title: "Handoff",
    body: "Docs, runbooks, and a system your team can run, hire onto, or extend without me.",
  },
];

export const principles = [
  {
    title: "One engineer",
    body: "No bait and switch staffing. Discovery, architecture, and implementation stay with the same person.",
  },
  {
    title: "Principal level execution",
    body: "I take the work a staff or principal engineer would take, then I write the code and leave the system operable.",
  },
  {
    title: "Handoff by default",
    body: "You should be able to run, hire onto, or sunset what I build. Docs and boundaries are part of the delivery.",
  },
];

export type Testimonial = {
  quote: string
  name: string
  title: string
  placeholder?: boolean
};

// TODO(content): replace with real, approved client quotes.
export const testimonials: Testimonial[] = [
  {
    quote: "Client quote goes here. Two or three sentences on the problem, what changed, and what it was like to work together.",
    name: "Client name",
    title: "Role, Company",
    placeholder: true,
  },
  {
    quote: "Second client quote goes here. Ideally from a different kind of engagement than the first.",
    name: "Client name",
    title: "Role, Company",
    placeholder: true,
  },
];

export type ProofPoint = {
  value: string
  label: string
  placeholder?: boolean
};

// TODO(content): replace with real, verifiable numbers.
export const proofPoints: ProofPoint[] = [
  { value: "00", label: "Metric label, for example systems shipped to production", placeholder: true },
  { value: "00", label: "Metric label, for example a cost or deploy time result", placeholder: true },
  { value: "00", label: "Metric label, for example clients or industries served", placeholder: true },
];
