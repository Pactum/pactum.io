import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("services", "routes/services._index.tsx"),
    route("services/:slug", "routes/services.$slug.tsx"),
    route("technologies", "routes/technologies.tsx"),
    route("terms", "routes/terms.tsx"),
  ]),
  route("sitemap.xml", "routes/sitemap[.]xml.ts"),
  route("robots.txt", "routes/robots[.]txt.ts"),
] satisfies RouteConfig;
