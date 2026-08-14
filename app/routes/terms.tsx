import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { site } from "~/data/site";
import { pageMeta } from "~/lib/seo";
import type { Route } from "./+types/terms";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Terms of Service",
    description: `Terms of Service for ${site.legalName}.`,
    path: "/terms",
  });
}

export default function Terms() {
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
        mb="6"
      >
        Terms of Service
      </Heading>
      <Text color="ink.200" fontSize="lg" lineHeight="1.8" mb="6">
        Use of pactum.io and consulting engagements with {site.legalName} are governed by the
        Website and Consulting Terms, effective August 14, 2026. The current document is
        published as a PDF.
      </Text>
      <Button asChild colorPalette="pactum" borderRadius="full">
        <a href="/PactumTOS.pdf" target="_blank" rel="noopener noreferrer">
          Open the Terms of Service
        </a>
      </Button>
    </Box>
  );
}
