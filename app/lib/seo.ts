import { site } from "~/data/site";

type MetaInput = {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article" | "profile"
};

export function pageMeta({
  title,
  description,
  path = "/",
  image = "/og.png",
  type = "website",
}: MetaInput) {
  const url = new URL(path, site.url).toString();
  const imageUrl = new URL(image, site.url).toString();
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "author", content: site.owner.name },
    { name: "theme-color", content: "#050605" },
    { property: "og:site_name", content: site.name },
    { property: "og:type", content: type },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:locale", content: site.locale },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: new URL("/logo.png", site.url).toString(),
    logo: new URL("/logo.png", site.url).toString(),
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.owner.name,
      jobTitle: site.owner.role,
      url: site.url,
      sameAs: [site.linkedin, site.github],
    },
    employee: {
      "@type": "Person",
      name: site.owner.name,
      jobTitle: site.owner.role,
    },
    areaServed: "Worldwide",
    serviceType: [
      "SaaS bootstrapping",
      "Cloud architecture",
      "AI consulting",
      "Full stack engineering",
      "DevOps",
      "Platform engineering",
      "Blockchain consulting",
    ],
    sameAs: [site.linkedin, site.github],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner.name,
    jobTitle: site.owner.role,
    worksFor: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    url: `${site.url}/about`,
    image: new URL(site.owner.photo, site.url).toString(),
    sameAs: [site.linkedin, site.github],
  };
}

export function serviceJsonLd(input: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: new URL(input.path, site.url).toString(),
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
    areaServed: "Worldwide",
  };
}
