import { caseStudies } from "~/data/case-studies";
import { services, site } from "~/data/site";

const staticPaths = ["/", "/about", "/contact", "/services", "/case-studies", "/technologies", "/terms", "/privacy"];

export function loader() {
  const lastmod = site.contentUpdated;
  const urls = [
    ...staticPaths.map((path) => ({ path, priority: path === "/" ? "1.0" : "0.8" })),
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      priority: "0.7",
    })),
    // Unpublished case studies are noindex, so they stay out of the sitemap too.
    ...caseStudies.filter((study) => study.status === "published").map((study) => ({
      path: `/case-studies/${study.slug}`,
      priority: "0.6",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority }) => `  <url>
    <loc>${new URL(path, site.url).toString()}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
