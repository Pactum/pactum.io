import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { JsonLd } from "~/components/json-ld";
import { site } from "~/data/site";
import { pageMeta, personJsonLd } from "~/lib/seo";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: `About ${site.owner.name}`,
    description: `${site.owner.name} is the sole owner and operator of Pactum IO, an LLC for software engineering consulting across SaaS bootstrapping, cloud architecture, AI, full stack, DevOps, platform, and blockchain.`,
    path: "/about",
    type: "profile",
  });
}

const facts = [
  { label: "Entity", value: site.legalName },
  { label: "Operator", value: site.owner.name },
  { label: "Work", value: "Hands-on principal engineering" },
];

export default function About() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="8">
        <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
          About
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl" }}
          lineHeight={{ base: "1.2", md: "1.15" }}
          fontWeight="700"
          color="white"
          maxW="3xl"
          mb="8"
        >
          A practice, not a staffing firm.
        </Heading>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 10, lg: 16 }} align="start">
          <Image
            src={site.owner.photo}
            alt={`${site.owner.name}, founder of Pactum IO`}
            w="100%"
            maxW="420px"
            borderRadius="3xl"
            objectFit="cover"
          />
          <Stack gap="6" maxW="2xl">
            <Heading as="h2" size="xl" color="white">
              {site.owner.name}
            </Heading>
            <Text color="pactum.400" fontSize="lg">
              {site.owner.role}
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              Pactum IO is my LLC. I use it to consult on software engineering — the kind of work
              that needs someone who can hold the architecture and still open the editor. I am the
              only owner and the only operator.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              That is the point. Clients are not buying a logo and a rotating cast. They are buying
              judgment and execution from one person who has shipped across AI systems, crypto
              products, full-stack SaaS, DevOps, internal platforms, and cloud architecture.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              If you need a factory of juniors, I am the wrong shop. If you need a principal who
              will scope the work, build it, and leave you able to run it, we should talk.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap="3">
              <Button asChild colorPalette="pactum" borderRadius="full">
                <RouterLink to="/contact">Work with Matt</RouterLink>
              </Button>
              <Button asChild variant="outline" borderRadius="full" color="white" borderColor="whiteAlpha.300">
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </Stack>
          </Stack>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 3 }} gap="4" mt="16">
          {facts.map((fact) => (
            <Box key={fact.label} borderWidth="1px" borderColor="whiteAlpha.100" borderRadius="xl" p="6" bg="ink.800">
              <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="ink.300" mb="2">
                {fact.label}
              </Text>
              <Text color="white">{fact.value}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <CtaBand />
      </Box>
    </>
  );
}
