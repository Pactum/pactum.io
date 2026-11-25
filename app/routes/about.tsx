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
  "I worked on site as a consultant for AEM BPM customers, deploying and customizing workflow systems that automated processes people had been doing by hand.",
  "In 2018 I built smart contracts and audited token sales for early crypto projects.",
  "At a post Series D startup, I built an AI support assistant that works on live backend data. It cut support costs by about 33%, which came to roughly $1M a year.",
  "At a nonprofit in the giving and donations space, I introduced Claude and led its adoption across the development process, including code generation, code review, troubleshooting, and monitoring.",
  "I've coached professionals on using AI to improve their writing at work and to research market pay.",
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
          About Matthew Swezey
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
            <Text color="pactum.400" fontSize="lg">
              {site.owner.role}
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              I'm a software engineer with more than a decade of experience building and running
              production systems. Pactum IO, LLC is the consulting practice I founded to work
              directly with clients, and I scope, build, and support every project myself.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              I have a bachelor's degree in computer science with a minor in mathematics. Most of my
              work runs on AWS, and I care about a lot more than application code. I spend just as
              much time on cloud architecture, DevOps, infrastructure, and developer experience.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              A few things I've worked on:
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
              These days I help small businesses, nonprofits, and product teams use AI where it saves
              real time, and I build the cloud systems that support it. If you have a project in mind,
              I'd be glad to talk.
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
          body="Send me a few lines about what you're working on and we can set up a call."
        />
      </Box>
    </>
  );
}
