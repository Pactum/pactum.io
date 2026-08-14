import { Box, Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { JsonLd } from "~/components/json-ld";
import { site } from "~/data/site";
import { organizationJsonLd, pageMeta } from "~/lib/seo";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Contact",
    description: `Contact ${site.owner.name} at Pactum IO about SaaS bootstrapping, cloud architecture, AI, full stack, DevOps, platform, or blockchain work.`,
    path: "/contact",
  });
}

const prompts = [
  "What you are building, or what is broken",
  "Whether you need architecture, implementation, or both",
  "Timeline and the constraints that actually matter",
  "Stack, cloud, and any compliance you already have",
];

export default function Contact() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="8">
        <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
          Contact
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight={{ base: "1.2", md: "1.15" }}
          fontWeight="700"
          color="white"
          maxW="3xl"
          mb="6"
        >
          Start with the work, not a deck.
        </Heading>
        <Text color="ink.200" fontSize="xl" maxW="2xl" lineHeight="1.7" mb="12">
          Reach me on LinkedIn. If the fit is real, we schedule a call and decide whether Pactum
          should take the engagement.
        </Text>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
          <Box borderWidth="1px" borderColor="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 10 }} bg="ink.800">
            <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500" mb="6">
              Direct
            </Text>
            <Stack gap="6">
              <Box>
                <Text color="ink.300" fontSize="sm" mb="1">
                  Operator
                </Text>
                <Text color="white" fontSize="lg">
                  {site.owner.name}
                </Text>
              </Box>
              <Button asChild colorPalette="pactum" borderRadius="full" w="fit-content">
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  Message on LinkedIn
                </a>
              </Button>
            </Stack>
          </Box>

          <Box borderWidth="1px" borderColor="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 10 }}>
            <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500" mb="6">
              Useful to include
            </Text>
            <Stack as="ul" gap="4" pl="0">
              {prompts.map((item) => (
                <Text as="li" key={item} color="ink.100" lineHeight="1.7" listStyleType="none" pl="6" position="relative">
                  <Box as="span" position="absolute" left="0" color="pactum.500">
                    ▸
                  </Box>
                  {item}
                </Text>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
