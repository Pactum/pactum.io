import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("services", "routes/services._index.tsx"),
    route("services/:slug", "routes/services.$slug.tsx"),
    route("technologies", "routes/technologies.tsx"),
    route("case-studies", "routes/case-studies._index.tsx"),
    route("case-studies/:slug", "routes/case-studies.$slug.tsx"),
    route("terms", "routes/terms.tsx"),
    route("privacy", "routes/privacy.tsx"),
  ]),
  route("sitemap.xml", "routes/sitemap[.]xml.ts"),
  route("robots.txt", "routes/robots[.]txt.ts"),
  route("llms.txt", "routes/llms[.]txt.ts"),
] satisfies RouteConfig;
