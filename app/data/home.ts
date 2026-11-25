// Homepage copy and proof content.
//
// Anything flagged `placeholder: true` is NOT real content. Placeholders render
// only in local development (`npm run dev`) so they can never reach production.
// Replace them with real, approved content and remove the flag to publish.

export const showPlaceholders = import.meta.env.DEV;

export const hero = {
  eyebrow: "Practical AI and cloud engineering",
  titleTop: "I help businesses put AI",
  titleBottom: "to work.",
  body: "I'm Matthew Swezey, and I've been building software professionally since 2013. These days I work with small businesses, nonprofits, and product teams to automate the busy work, build custom AI tools and agents, and teach people how to use AI well. Most of my career has been spent on AWS and DevOps, so what I build is set up to keep running after I hand it over.",
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
    title: "Senior experience",
    body: "I take on the kind of work a staff or principal engineer would, and then I write the code myself and leave you with a system you can run.",
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
  { value: "~33%", label: "Lower support cost from an AI support assistant I built at a post Series D startup" },
  { value: "~$1M", label: "Yearly savings from that same assistant" },
  { value: "2013", label: "The year I started writing software professionally" },
];
