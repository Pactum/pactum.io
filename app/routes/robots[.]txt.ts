import { site } from "~/data/site";

export function loader() {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site.url).toString()}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
