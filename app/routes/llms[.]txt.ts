import { caseStudies } from "~/data/case-studies";
import { hero, proofPoints } from "~/data/home";
import { services, servicesInGroup, site } from "~/data/site";

// /llms.txt per the proposal at https://llmstxt.org/: an H1, a blockquote summary,
// short context, then H2 sections of links. Generated from the same data as the pages.
export function loader() {
  const abs = (path: string) => new URL(path, site.url).toString();
  const serviceLine = (slug: string) => {
    const service = services.find((item) => item.slug === slug)!;
    return `- [${service.title}](${abs(`/services/${service.slug}`)}): ${service.short}`;
  };
  const published = caseStudies.filter((study) => study.status === "published");
  const proof = proofPoints.filter((point) => !point.placeholder);

  const body = `# ${site.name}

> ${site.description}

${hero.body}

- Company: ${site.legalName}
- Principal: ${site.owner.name}, ${site.owner.role}
- Building production software since 2013, consulting through Pactum IO since 2017
- More than five years at a post Series D startup, most recently as tech lead of its B2B dashboard and billing platform
- Co-founder and CTO of SubTrack, a bootstrapped AI construction management platform
- Smart contract work for Validity Labs and head of development at ShiftNrg
- Speaker at DevCon3 and SXSW
- Main cloud: AWS
- Engagements: assessments, scoped project builds, workshops and coaching, and contract principal engineering
${site.email ? `- Email: ${site.email}\n` : ""}- LinkedIn: ${site.linkedin}

## Results

${proof.map((point) => `- ${point.label}: ${point.value}`).join("\n")}

## Practical AI services

${servicesInGroup("ai").map((service) => serviceLine(service.slug)).join("\n")}

## Engineering services

${servicesInGroup("engineering").map((service) => serviceLine(service.slug)).join("\n")}

## Company

- [About ${site.owner.name}](${abs("/about")}): background, education, and selected experience
- [Contact](${abs("/contact")}): how to start a project
- [Case studies](${abs("/case-studies")}): selected work
${published.map((study) => `- [${study.title}](${abs(`/case-studies/${study.slug}`)}): ${study.metaDescription ?? study.summary}`).join("\n")}

## Optional

- [Technologies](${abs("/technologies")}): the stack used across engagements
- [Terms of Service](${abs("/terms")})
- [Privacy Policy](${abs("/privacy")})
`;

  return new Response(body.replace(/\n{3,}/g, "\n\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
