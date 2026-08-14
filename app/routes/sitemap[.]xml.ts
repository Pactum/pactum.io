import { services, site } from "~/data/site";

const staticPaths = ["/", "/about", "/contact", "/services", "/technologies", "/terms"];

export function loader() {
  const lastmod = new Date().toISOString();
  const urls = [
    ...staticPaths.map((path) => ({ path, priority: path === "/" ? "1.0" : "0.8" })),
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      priority: "0.7",
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
