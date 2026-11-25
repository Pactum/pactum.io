import { site } from "~/data/site";

// RFC 9116 security.txt. Expires must be under a year out, so it is computed per request.
export function loader() {
  const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000);
  expires.setUTCHours(0, 0, 0, 0);

  const body = `Contact: mailto:${site.email}
Expires: ${expires.toISOString()}
Preferred-Languages: en
Canonical: ${new URL("/.well-known/security.txt", site.url).toString()}
Policy: ${new URL("/privacy", site.url).toString()}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
