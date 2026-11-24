import { site } from "~/data/site";

// AI search and assistant crawlers are named explicitly so the intent is documented
// and survives any future blanket rule. Being cited by AI answers is free reach.
const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export function loader() {
  const body = `User-agent: *
Allow: /

${aiCrawlers.map((agent) => `User-agent: ${agent}`).join("\n")}
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
