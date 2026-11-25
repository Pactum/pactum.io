// Homepage copy and proof content.
//
// Anything flagged `placeholder: true` is NOT real content. Placeholders render
// only in local development (`npm run dev`) so they can never reach production.
// Replace them with real, approved content and remove the flag to publish.

export const showPlaceholders = import.meta.env.DEV;

export const hero = {
  eyebrow: "Practical AI and cloud engineering",
  titleTop: "I help businesses put AI",
  titleBottom: "into production.",
  body: "I'm Matthew Swezey, a principal engineer with thirteen years of shipping production software. I spent more than five years at a post Series D startup, most recently as tech lead of a core platform. While I was there I built an AI support assistant that saves about $1M a year. Now I help companies and nonprofits figure out where AI will pay off, build it properly on AWS, and get their teams using it.",
};

export const engagements = [
  {
    label: "Assess",
    title: "AI and systems assessments",
    body: "I take a focused look at your workflows, tools, or cloud setup. You get written findings and a prioritized plan, with the quick wins called out.",
  },
  {
    label: "Build",
    title: "Scoped project builds",
    body: "I deliver a defined result from start to finish, whether that's an automation, a custom AI tool or agent, a SaaS foundation, or a migration.",
  },
  {
    label: "Train",
    title: "Workshops and coaching",
    body: "I run hands on sessions for owners, staff, and volunteers, built around your real tasks so the new habits actually stick.",
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
    body: "We talk through the problem, your constraints, and your timeline. You don't need to prepare anything.",
  },
  {
    title: "Written scope",
    body: "Before any work starts, you get the deliverables and boundaries in writing.",
  },
  {
    title: "The build",
    body: "The work happens in your own accounts, tools, and repos, so you can check progress anytime and you own everything.",
  },
  {
    title: "Handoff",
    body: "I write plain English docs and walk your team through it all, so you can run it, hire someone onto it, or extend it without me.",
  },
];

export const principles = [
  {
    title: "You work with me",
    body: "The person who scopes your project is the same person who designs and builds it. Nobody gets swapped in after the sale.",
  },
  {
    title: "Senior judgment",
    body: "I've led teams and owned platforms that a business depends on. I bring that judgment to scoping and architecture, and then I write the code myself.",
  },
  {
    title: "Built to hand off",
    body: "You should be able to run what I build, hire someone onto it, or shut it down. Documentation is part of every project, not an extra.",
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

export const proofPoints: ProofPoint[] = [
  { value: "~$1M", label: "Saved each year by an AI support assistant I built, which cut support costs by about 33%" },
  { value: "$30M+", label: "In digital assets held by smart contracts I built and secured" },
  { value: "5+ years", label: "At a post Series D startup, most recently leading a B2B platform that handles millions of transactions a month" },
];
