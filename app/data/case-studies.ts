export type CaseStudyStatus = "published" | "soon";

export type CaseStudy = {
  slug: string
  title: string
  lane: string
  status: CaseStudyStatus
  summary: string
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-foundation",
    title: "SaaS foundation",
    lane: "SaaS Bootstrapping",
    status: "soon",
    summary: "Auth, tenancy, billing, and the first billable loop — from zero to a product a team can hire onto.",
  },
  {
    slug: "cloud-rebuild",
    title: "Cloud rebuild",
    lane: "Cloud Architecture",
    status: "soon",
    summary: "An estate that grew by accident, reduced to a system with clear boundaries, identity, and a cost story.",
  },
  {
    slug: "production-ai",
    title: "Production AI",
    lane: "AI",
    status: "soon",
    summary: "A model feature that left the demo and held up under latency, evals, cost, and real users.",
  },
  {
    slug: "full-stack-ship",
    title: "Full-stack ship",
    lane: "Full Stack",
    status: "soon",
    summary: "A vertical slice owned end to end: data model, API, UI, and the path to production.",
  },
  {
    slug: "delivery-system",
    title: "Delivery system",
    lane: "DevOps",
    status: "soon",
    summary: "CI, environments, and rollbacks that made shipping the default instead of a ceremony.",
  },
  {
    slug: "on-chain-product",
    title: "On-chain product",
    lane: "Blockchain / Crypto",
    status: "soon",
    summary: "Contracts, indexing, and the off-chain product that had to live with them.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
