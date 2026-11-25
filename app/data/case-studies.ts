export type CaseStudyStatus = "published" | "soon";

export type CaseStudy = {
  slug: string
  title: string
  lane: string
  status: CaseStudyStatus
  summary: string
  // Optional shorter text for <meta name="description"> when summary runs past 160 characters.
  metaDescription?: string
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-support-assistant",
    title: "AI support assistant on live data",
    lane: "AI Tools and Agents",
    status: "soon",
    metaDescription: "I built an AI support assistant on live backend data at a post Series D startup. It cut support costs by about 33%, roughly $1M a year.",
    summary: "I built an AI support assistant at a post Series D startup and connected it to live backend data through a secure API gateway. It cut support costs by about 33%, which came to roughly $1M a year.",
  },
  {
    slug: "ai-in-the-sdlc",
    title: "AI across the software lifecycle",
    lane: "AI Implementation",
    status: "soon",
    metaDescription: "I introduced Claude at a nonprofit and led its adoption across development, including code generation, code review, troubleshooting, and monitoring.",
    summary: "At a nonprofit in the giving and donations space, I introduced Claude and led its adoption across the whole software development process, from code generation and code review to troubleshooting and ongoing monitoring.",
  },
  {
    slug: "ai-for-professionals",
    title: "AI coaching for professionals",
    lane: "AI Training and Workshops",
    status: "soon",
    metaDescription: "I coached professionals on using AI for workplace writing and pay research, which helped them negotiate better compensation and perks.",
    summary: "I coached professionals on using AI to communicate better at work and on using ChatGPT to research market pay. They used that research to negotiate better compensation and perks for themselves and their direct reports.",
  },
  {
    slug: "saas-foundation",
    title: "SaaS foundation",
    lane: "SaaS Bootstrapping",
    status: "soon",
    summary: "Sign in, accounts, billing, and the first version customers could pay for, built from scratch into a product a team could hire onto.",
  },
  {
    slug: "cloud-rebuild",
    title: "Cloud re-architecture for a nonprofit",
    lane: "Cloud Architecture",
    status: "soon",
    metaDescription: "I'm leading a cloud re-architecture of donation infrastructure and payment workflows for a nonprofit giving platform.",
    summary: "I'm leading a cloud re-architecture of the donation infrastructure at a nonprofit giving platform, including its payment workflows, to make it more reliable and easier to maintain.",
  },
  {
    slug: "full-stack-ship",
    title: "Full stack product build",
    lane: "Full Stack",
    status: "soon",
    summary: "One complete feature owned from start to finish, covering the data model, the API, the UI, and getting it into production.",
  },
  {
    slug: "delivery-system",
    title: "Release pipeline",
    lane: "DevOps",
    status: "soon",
    summary: "CI, environments, and rollbacks that turned shipping from a stressful event into a normal part of the week.",
  },
  {
    slug: "on-chain-product",
    title: "Smart contracts for token sales",
    lane: "Blockchain / Crypto",
    status: "soon",
    summary: "During the 2017 ICO boom I built and secured smart contracts that held more than $30M in digital assets, and I audited contracts for other Ethereum projects with Validity Labs.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
