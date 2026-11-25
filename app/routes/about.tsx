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
    description: `${site.owner.name} is a principal engineer in Austin. He has built production software since 2013, led platform teams, and helps companies put AI into production.`,
    path: "/about",
    type: "profile",
  });
}

const facts = [
  { label: "Building production software", value: "Since 2013" },
  { label: "Consulting through Pactum", value: "Since 2017" },
  { label: "Conference talks", value: "DevCon3 and SXSW" },
];

type Role = { years: string; title: string; where: string; body: string };

const experience: Role[] = [
  {
    years: "2026 to now",
    title: "Embedded senior engineer",
    where: "Nonprofit giving platform",
    body: "I'm leading a cloud re-architecture of the platform's donation infrastructure and its payment workflows. I also brought Claude into the team's development process and led its adoption for code generation, code review, troubleshooting, and monitoring.",
  },
  {
    years: "2025 to now",
    title: "Co-founder and CTO",
    where: "SubTrack",
    body: "SubTrack is a bootstrapped startup I run with my co-founders, Will and Jeandre. We're building an AI construction management platform that turns messy project data into reports and billing that contractors can actually use. The platform has already tracked more than $3M in daily tickets (LEMs).",
  },
  {
    years: "2020 to 2025",
    title: "Tech lead, dashboard and billing platform",
    where: "Post Series D startup",
    body: "I led the team behind the company's B2B merchant dashboard and billing platform. I directed its move off legacy systems onto a cloud native platform on AWS. Today it handles millions of transactions a month and supports billions of dollars in annualized GMV across several verticals, and it became one of the company's main selling points. I also mentored the engineers on the team and pushed for better reliability, observability, and incident response. I also built an AI support assistant on live backend data that cut support costs by about 33%, roughly $1M a year.",
  },
  {
    years: "2017 to 2021",
    title: "Smart contract engineer and head of development",
    where: "Validity Labs, ShiftNrg, and other Pactum IO clients",
    body: "During the 2017 ICO boom I built and secured smart contracts that held more than $30M in digital assets. At Validity Labs I worked as an embedded senior engineer on smart contract architecture and audits for major Ethereum projects. I later served as head of development at ShiftNrg, where I led everything from the contracts to the backend services and AWS infrastructure.",
  },
  {
    years: "2013 to 2017",
    title: "Software engineer and consultant",
    where: "Government and enterprise clients",
    body: "I started out helping modernize a federal land records system, then spent three years building workflow and web systems for enterprise and public sector clients. One of them, Colorado's virtual job fair, ran for years after I left, and other states asked for the same system.",
  },
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
              I'm a principal engineer based in Austin, and I've been building production software
              since 2013. I founded Pactum IO in 2017. Since then I've worked as an independent
              consultant, head of development at ShiftNrg, and for more than five years at a post Series D
              startup, where I became tech lead of one of its core platforms.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              The work I'm best at sits where product, infrastructure, and now AI meet. I can sit
              down with a founder or an operations lead, work out what's actually worth building,
              and then design it, write it, and run it on AWS. Most consultants do one half of that.
              I've spent my career doing both.
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              Today most of my time goes to putting AI into production. That means assistants and
              agents that work against real systems and real data, rolling out AI tools across
              engineering teams, and running workshops so people know how to use them well. I've
              also spoken at DevCon3 and SXSW, and I have a degree in computer science with a minor
              in mathematics.
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

        <Box as="section" mt={{ base: 16, md: 24 }}>
          <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
            Selected experience
          </Text>
          <Heading as="h2" size={{ base: "2xl", md: "3xl" }} color="white" mb="10" maxW="3xl">
            Here's where I've spent the last thirteen years.
          </Heading>
          <Stack as="ol" gap="0" pl="0" m="0">
            {experience.map((role) => (
              <Box
                as="li"
                key={role.title}
                listStyleType="none"
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: "200px 1fr" }}
                gap={{ base: 2, md: 10 }}
                py="8"
                borderTopWidth="1px"
                borderColor="whiteAlpha.100"
              >
                <Text color="ink.300" fontSize="sm" letterSpacing="0.08em" textTransform="uppercase" pt="1">
                  {role.years}
                </Text>
                <Box>
                  <Heading as="h3" size="lg" color="white">
                    {role.title}
                  </Heading>
                  <Text color="pactum.400" mt="1" mb="3">
                    {role.where}
                  </Text>
                  <Text color="ink.200" lineHeight="1.8" maxW="3xl">
                    {role.body}
                  </Text>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

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
          title="Have a project that needs a senior engineer?"
          body="Send me a few lines about what you're working on. If it's a good fit, we'll set up a call and scope it together."
        />
      </Box>
    </>
  );
}
