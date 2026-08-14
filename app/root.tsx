import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Provider } from "~/components/provider";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { site } from "~/data/site";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#98C740" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider>{children}</Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Something went wrong";
  let details = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Page not found" : `Error ${error.status}`;
    details =
      error.status === 404
        ? "That page is not part of the Pactum practice."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
  }

  return (
    <Box className="site-shell" minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex="1" maxW="3xl" mx="auto" px={{ base: 4, md: 8 }} py="24">
        <Heading as="h1" size="4xl" color="white" mb="4">
          {title}
        </Heading>
        <Text color="ink.200" fontSize="lg" mb="8">
          {details}
        </Text>
        <Text color="pactum.500">
          <a href="/">Back to {site.name}</a>
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}
