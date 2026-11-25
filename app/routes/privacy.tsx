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
      "pactum.io doesn't use cookies, analytics, advertising pixels, or third party trackers, and it has no accounts or forms.",
      "The site is hosted on Amazon Web Services (AWS Amplify and Amazon CloudFront). Like any web host, AWS processes standard request data such as your IP address, browser user agent, the page requested, and the time of the request, to deliver the site and keep it secure.",
    ],
  },
  {
    title: "When you contact me",
    body: [
      `If you reach out on LinkedIn${site.email ? " or by email" : ""}, I receive whatever you choose to send, such as your name, contact details, and a description of your project. I only use it to reply to you and to scope and deliver the work you ask about.`,
      "I don't sell, rent, or share your information for marketing. I only share it with service providers I need to run the business, like email, scheduling, or accounting tools, or when the law requires it.",
    ],
  },
  {
    title: "Client data during engagements",
    body: [
      "Data you share during a consulting project is handled under that project's written terms. I work in your own accounts and systems wherever I can, and I only use AI tools in ways we've agreed on in writing.",
    ],
  },
  {
    title: "Retention and your choices",
    body: [
      "I keep project correspondence for as long as the project needs it and for normal business and tax records. You can ask me to show you, correct, or delete the information I have about you at any time, and I'll respond within 30 days.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      `If this policy changes, I'll post the new version here with a new effective date. If you have questions, reach out to ${site.owner.name}${site.email ? ` at ${site.email}` : " through the Contact page"}.`,
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
