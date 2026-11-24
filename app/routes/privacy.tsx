import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { site } from "~/data/site";
import { pageMeta } from "~/lib/seo";
import type { Route } from "./+types/privacy";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Privacy Policy",
    description: `How ${site.legalName} handles information when you visit pactum.io or contact ${site.owner.name} about a project.`,
    path: "/privacy",
  });
}

// Keep this page accurate: update it before adding analytics, a contact form, or any cookie.
const effectiveDate = "November 24, 2026";

const sections: { title: string; body: string[] }[] = [
  {
    title: "What this site collects",
    body: [
      "pactum.io does not use cookies, analytics, advertising pixels, or third party trackers, and it has no accounts or forms.",
      "The site is hosted on Amazon Web Services (AWS Amplify and Amazon CloudFront). Like any web host, AWS processes standard request data such as your IP address, browser user agent, the page requested, and the time of the request, to deliver the site and keep it secure.",
    ],
  },
  {
    title: "When you contact me",
    body: [
      `If you reach out by LinkedIn${site.email ? " or email" : ""}, I receive the information you choose to send, such as your name, contact details, and a description of your project. I use it only to reply, scope, and deliver the work you ask about.`,
      "I do not sell, rent, or share your information for marketing. I share it only with service providers needed to run the business (for example email, scheduling, or accounting tools), or when the law requires it.",
    ],
  },
  {
    title: "Client data during engagements",
    body: [
      "Data you share during a consulting engagement is handled under that engagement's written terms. Work happens in your own accounts and systems wherever possible, and AI tools are used only in ways we agree on in writing.",
    ],
  },
  {
    title: "Retention and your choices",
    body: [
      "I keep project correspondence for as long as needed for the engagement and for ordinary business and tax records. You can ask me to access, correct, or delete information about you at any time, and I will respond within 30 days.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      `If this policy changes, the new version will be posted here with a new effective date. Questions go to ${site.owner.name}${site.email ? ` at ${site.email}` : " through the Contact page"}.`,
    ],
  },
];

export default function Privacy() {
  return (
    <Box maxW="3xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="16">
      <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
        Legal
      </Text>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "5xl" }}
        lineHeight={{ base: "1.2", md: "1.15" }}
        fontWeight="700"
        color="white"
        mb="4"
      >
        Privacy Policy
      </Heading>
      <Text color="ink.300" mb="10">
        {site.legalName} · Effective {effectiveDate}
      </Text>
      <Stack gap="10">
        {sections.map((section) => (
          <Box key={section.title}>
            <Heading as="h2" size="lg" color="white" mb="3">
              {section.title}
            </Heading>
            <Stack gap="4">
              {section.body.map((paragraph) => (
                <Text key={paragraph} color="ink.200" fontSize="lg" lineHeight="1.8">
                  {paragraph}
                </Text>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
