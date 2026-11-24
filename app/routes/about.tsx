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
    description: `${site.owner.name} has written software professionally since 2013 and consults through Pactum IO, LLC on practical AI, AWS, DevOps, and full stack work.`,
    path: "/about",
    type: "profile",
  });
}

const facts = [
  { label: "Company", value: site.legalName },
  { label: "Writing software since", value: "2013" },
  { label: "Main cloud", value: "AWS" },
];

const background = [
  "Worked on site as a consultant for AEM BPM customers, deploying and customizing workflow solutions that automated human centric processes.",
  "Built smart contracts and audited token sales for early crypto projects in 2018.",
  "Built an AI support assistant on live backend data at a post Series D startup.",
  "Led Claude adoption across the development process at a nonprofit in the giving and donations space: code generation, code review, troubleshooting, and monitoring.",
  "Coached professionals on using AI for workplace writing and market pay research.",
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
          Hi, I am Matt.
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
              I have written software professionally since 2013. Pactum IO is the LLC I consult
              through, and it is just me, so the person on the first call is the person doing the
              work.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              I have a computer science degree with a math minor. Most of my work runs on AWS, and I
              spend as much time on infrastructure, CI/CD, developer experience, and architecture as
              I do on application code. I also like hardware.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              A few things I have done:
            </Text>
            <Stack as="ul" gap="3" pl="0" m="0">
              {background.map((item) => (
                <Text as="li" key={item} listStyleType="none" color="ink.100" pl="5" position="relative" lineHeight="1.7">
                  <Box as="span" position="absolute" left="0" color="pactum.500">
                    ▸
                  </Box>
                  {item}
                </Text>
              ))}
            </Stack>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              Right now I mostly help small businesses and teams put AI to work where it saves real
              time, and build the cloud systems underneath. If that sounds useful, send me a note.
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

        <CtaBand
          title="Want to work together?"
          body="Send a few lines about what you are working on, and we can set up a call."
        />
      </Box>
    </>
  );
}
