import { services, site } from "~/data/site";

type MetaInput = {
  title: string
  description: string
  path?: string
  image?: string
  imageAlt?: string
  type?: "website" | "article" | "profile"
  noindex?: boolean
};

// Stable ids so every JSON-LD block on the site points at the same entities.
export const orgId = `${site.url}/#organization`;
export const personId = `${site.url}/about#person`;
export const websiteId = `${site.url}/#website`;

const OG_IMAGE_WIDTH = "1200";
const OG_IMAGE_HEIGHT = "630";
const OG_IMAGE_ALT = `${site.name}, the AI and cloud engineering practice of ${site.owner.name}.`;

export function pageMeta({
  title,
  description,
  path = "/",
  image = "/og.png",
  imageAlt = OG_IMAGE_ALT,
  type = "website",
  noindex = false,
}: MetaInput) {
  const url = new URL(path, site.url).toString();
  const imageUrl = new URL(image, site.url).toString();
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "author", content: site.owner.name },
    { name: "theme-color", content: "#050605" },
    ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    { property: "og:site_name", content: site.name },
    { property: "og:type", content: type },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:locale", content: site.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

const knowsAbout = [
  "Artificial intelligence",
  "Generative AI",
  "AI agents",
  "Retrieval augmented generation",
  "Workflow automation",
  "AI training",
  "Amazon Web Services",
  "Cloud architecture",
  "DevOps",
  "Full stack development",
  "SaaS",
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: new URL("/og.png", site.url).toString(),
    logo: new URL("/logo.png", site.url).toString(),
    description: site.description,
    slogan: site.tagline,
    ...(site.email
      ? {
          email: site.email,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: site.email,
            url: `${site.url}/contact`,
            availableLanguage: "English",
          },
        }
      : {}),
    founder: { "@id": personId },
    employee: { "@id": personId },
    areaServed: "Worldwide",
    knowsAbout,
    serviceType: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.short,
          url: new URL(`/services/${service.slug}`, site.url).toString(),
        },
      })),
    },
    sameAs: [site.linkedin, site.github],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.owner.name,
    jobTitle: site.owner.role,
    worksFor: { "@id": orgId },
    url: `${site.url}/about`,
    image: new URL(site.owner.photo, site.url).toString(),
    knowsAbout,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Bachelor's degree in computer science, minor in mathematics",
    },
    sameAs: [site.linkedin, site.github],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    description: site.metaDescription,
    inLanguage: "en-US",
    publisher: { "@id": orgId },
  };
}

// Home page graph: the website, the business, and the person behind it.
export function homeJsonLd() {
  const strip = ({ "@context": _ctx, ...rest }: Record<string, unknown>) => rest;
  return {
    "@context": "https://schema.org",
    "@graph": [strip(websiteJsonLd()), strip(organizationJsonLd()), strip(personJsonLd())],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string
  description: string
  path: string
  serviceType?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    url: new URL(input.path, site.url).toString(),
    provider: { "@id": orgId, "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "Worldwide",
  };
}
