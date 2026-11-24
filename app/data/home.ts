// Homepage copy and proof content.
//
// Anything flagged `placeholder: true` is NOT real content. Placeholders render
// only in local development (`npm run dev`) so they can never reach production.
// Replace them with real, approved content and remove the flag to publish.

export const showPlaceholders = import.meta.env.DEV;

export const hero = {
  eyebrow: "Practical AI and cloud engineering",
  titleTop: "Practical AI,",
  titleBottom: "built by an engineer who ships.",
  body: "I'm Matthew Swezey, a principal engineer building software since 2013. I help small businesses, nonprofits, and product teams put AI to work: automating busy work, building custom tools and agents, and training people to use AI well. Underneath is the AWS and DevOps experience to keep it all running.",
  highlights: [
    "Engineering since 2013",
    "Listen first, plain language",
    "AWS and DevOps under the hood",
    "Projects, contracts, and workshops",
  ],
};

export const engagements = [
  {
    label: "Assess",
    title: "AI and systems assessments",
    body: "A focused look at your workflows, tools, or cloud estate. You get written findings and a prioritized plan, with the quick wins called out.",
  },
  {
    label: "Build",
    title: "Scoped project builds",
    body: "A defined outcome delivered start to finish: an automation, a custom AI tool or agent, a SaaS foundation, or a migration.",
  },
  {
    label: "Train",
    title: "Workshops and coaching",
    body: "Hands on sessions for owners, staff, and volunteers, built around your real tasks so the habits stick.",
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
    body: "Work lands in your accounts, tools, and repos, so progress is always visible and you own the result.",
  },
  {
    title: "Handoff",
    body: "Plain language docs, a walkthrough with your team, and a system you can run, hire onto, or extend without me.",
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
