import { Box, Button, Flex, Grid, Heading, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { JsonLd } from "~/components/json-ld";
import { caseStudies } from "~/data/case-studies";
import {
  engagements,
  hero,
  principles,
  processSteps,
  proofPoints,
  showPlaceholders,
  testimonials,
} from "~/data/home";
import { services, site } from "~/data/site";
import { technologies } from "~/data/technologies";
import { organizationJsonLd, pageMeta } from "~/lib/seo";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Pactum IO · Senior Software Engineering Consulting",
    description: site.description,
    path: "/",
  });
}

const coreStack = technologies.filter((tech) => tech.kind !== "concept" && tech.weight >= 4);

const visibleTestimonials = testimonials.filter((item) => showPlaceholders || !item.placeholder);
const visibleProofPoints = proofPoints.filter((item) => showPlaceholders || !item.placeholder);

function Section({ children }: { children: ReactNode }) {
  return (
    <Box as="section" maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} mt={{ base: 20, md: 28 }}>
      {children}
    </Box>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <Stack gap="4" maxW="3xl" mb="10">
      <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs">
        {eyebrow}
      </Text>
      <Heading as="h2" size={{ base: "2xl", md: "3xl" }} color="white">
        {title}
      </Heading>
      {body ? (
        <Text color="ink.200" fontSize="lg" lineHeight="1.7">
          {body}
        </Text>
      ) : null}
    </Stack>
  );
}

function PlaceholderTag() {
  return (
    <Text
      as="span"
      display="inline-block"
      fontSize="2xs"
      letterSpacing="0.14em"
      textTransform="uppercase"
      color="#f0b429"
      borderWidth="1px"
      borderStyle="dashed"
      borderColor="#f0b429"
      borderRadius="full"
      px="2.5"
      py="0.5"
      mb="4"
    >
      Placeholder · dev only
    </Text>
  );
}

const cardProps = {
  borderWidth: "1px",
  borderColor: "whiteAlpha.100",
  borderRadius: "2xl",
  bg: "ink.800",
} as const;

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <Box as="section" maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 14, md: 24 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "center" }}
          justify="space-between"
          gap={{ base: 12, lg: 16 }}
        >
          <Stack gap="7" maxW="3xl" position="relative">
            <Box className="hero-glow" top="-80px" left="-60px" />
            <Text
              color="pactum.500"
              letterSpacing="0.22em"
              textTransform="uppercase"
              fontSize="xs"
              fontWeight="bold"
            >
              {site.legalName} · {hero.eyebrow}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
              lineHeight="1"
              color="white"
            >
              {hero.titleTop}{" "}
              <Box as="span" color="pactum.500" display="block">
                {hero.titleBottom}
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="ink.200" lineHeight="1.7" maxW="2xl">
              {hero.body}
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap="3">
              <Button asChild colorPalette="pactum" size="lg" borderRadius="full" px="8">
                <RouterLink to="/contact">
                  Start a project <ArrowRight size={18} />
                </RouterLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                borderRadius="full"
                color="white"
                borderColor="whiteAlpha.300"
              >
                <RouterLink to="/services">See services</RouterLink>
              </Button>
            </Stack>
            <Flex as="ul" wrap="wrap" columnGap="6" rowGap="2" pl="0" m="0">
              {hero.highlights.map((item) => (
                <Flex as="li" key={item} align="center" gap="2" color="ink.100" fontSize="sm" listStyleType="none">
                  <Box color="pactum.500" display="inline-flex">
                    <Check size={15} />
                  </Box>
                  {item}
                </Flex>
              ))}
            </Flex>
          </Stack>

          <Box
            {...cardProps}
            borderColor="whiteAlpha.200"
            borderRadius="3xl"
            p="5"
            bg="rgba(8, 9, 8, 0.72)"
            w="100%"
            maxW={{ base: "420px", lg: "360px" }}
            flexShrink={0}
          >
            <Image
              src={site.owner.photo}
              alt={`${site.owner.name}, owner and principal engineer of Pactum IO`}
              w="100%"
              aspectRatio="1"
              borderRadius="2xl"
              objectFit="cover"
            />
            <Stack gap="1" px="2" pt="5" pb="2">
              <Text color="white" fontFamily="heading" fontWeight="700" fontSize="lg">
                {site.owner.name}
              </Text>
              <Text color="ink.200" fontSize="sm">
                {site.owner.role}
              </Text>
              <Flex gap="5" pt="3" fontSize="sm">
                <Link asChild color="pactum.500">
                  <RouterLink to="/about">About</RouterLink>
                </Link>
                <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" color="pactum.500">
                  LinkedIn
                </Link>
                <Link href={site.github} target="_blank" rel="noopener noreferrer" color="pactum.500">
                  GitHub
                </Link>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>

      <Section>
        <SectionHeader
          eyebrow="What you can hire me for"
          title="The hard parts between an idea and a system in production."
        />
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="4">
          {services.map((service) => (
            <Link key={service.slug} asChild display="block" h="100%" _hover={{ textDecoration: "none" }}>
              <RouterLink to={`/services/${service.slug}`}>
                <Flex
                  {...cardProps}
                  direction="column"
                  h="100%"
                  p="6"
                  transition="border-color 160ms ease, transform 160ms ease"
                  _hover={{ borderColor: "pactum.600", transform: "translateY(-2px)" }}
                >
                  <Heading as="h3" size="md" color="white" mb="2">
                    {service.title}
                  </Heading>
                  <Text color="ink.200" fontSize="sm" lineHeight="1.6" flex="1">
                    {service.short}
                  </Text>
                  <Box color="pactum.500" mt="4">
                    <ArrowRight size={16} />
                  </Box>
                </Flex>
              </RouterLink>
            </Link>
          ))}
          <Link asChild display="block" h="100%" _hover={{ textDecoration: "none" }}>
            <RouterLink to="/contact">
              <Flex
                direction="column"
                justify="center"
                h="100%"
                p="6"
                borderWidth="1px"
                borderStyle="dashed"
                borderColor="pactum.700"
                borderRadius="2xl"
                _hover={{ borderColor: "pactum.500" }}
              >
                <Heading as="h3" size="md" color="pactum.500" mb="2">
                  Something else?
                </Heading>
                <Text color="ink.200" fontSize="sm" lineHeight="1.6">
                  If it involves software, infrastructure, or hardware, describe it and I will tell you whether I can help.
                </Text>
              </Flex>
            </RouterLink>
          </Link>
        </SimpleGrid>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Ways to work together"
          title="Pick the shape that fits the problem."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          {engagements.map((item) => (
            <Box key={item.label} {...cardProps} p="8">
              <Text color="pactum.500" fontSize="xs" letterSpacing="0.18em" textTransform="uppercase" mb="4">
                {item.label}
              </Text>
              <Heading as="h3" size="lg" color="white" mb="3">
                {item.title}
              </Heading>
              <Text color="ink.200" lineHeight="1.7">
                {item.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Proof"
          title="Selected work."
          body="Write ups are being cleared for publication. Ask on a call and I will walk you through the relevant ones."
        />

        {visibleProofPoints.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap="4" mb="6">
            {visibleProofPoints.map((point, index) => (
              <Box key={index} {...cardProps} p="6">
                {point.placeholder ? <PlaceholderTag /> : null}
                <Text color="white" fontFamily="heading" fontWeight="700" fontSize="4xl" lineHeight="1">
                  {point.value}
                </Text>
                <Text color="ink.200" fontSize="sm" mt="2">
                  {point.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        ) : null}

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="4">
          {caseStudies.map((study) => (
            <Link key={study.slug} asChild display="block" h="100%" _hover={{ textDecoration: "none" }}>
              <RouterLink to={`/case-studies/${study.slug}`}>
                <Flex
                  {...cardProps}
                  direction="column"
                  h="100%"
                  p="6"
                  transition="border-color 160ms ease"
                  _hover={{ borderColor: "pactum.600" }}
                >
                  <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500" mb="3">
                    {study.lane}
                  </Text>
                  <Heading as="h3" size="md" color="white" mb="2">
                    {study.title}
                  </Heading>
                  <Text color="ink.200" fontSize="sm" lineHeight="1.6" flex="1">
                    {study.summary}
                  </Text>
                  <Text color={study.status === "soon" ? "ink.300" : "pactum.400"} fontSize="xs" mt="4">
                    {study.status === "soon" ? "Write up incoming" : "Read the study"}
                  </Text>
                </Flex>
              </RouterLink>
            </Link>
          ))}
        </SimpleGrid>

        {visibleTestimonials.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="4" mt="6">
            {visibleTestimonials.map((item, index) => (
              <Box as="figure" key={index} {...cardProps} p="8" m="0">
                {item.placeholder ? <PlaceholderTag /> : null}
                <Text as="blockquote" color="ink.100" fontSize="lg" lineHeight="1.7" m="0">
                  “{item.quote}”
                </Text>
                <Box as="figcaption" mt="5">
                  <Text color="white" fontWeight="700">
                    {item.name}
                  </Text>
                  <Text color="ink.300" fontSize="sm">
                    {item.title}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        ) : null}

        <Flex
          mt="6"
          {...cardProps}
          bg="transparent"
          px="6"
          py="5"
          direction={{ base: "column", md: "row" }}
          align={{ md: "center" }}
          gap={{ base: 3, md: 8 }}
        >
          <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="ink.300" flexShrink={0}>
            Core stack
          </Text>
          <Flex as="ul" wrap="wrap" columnGap="6" rowGap="2" pl="0" m="0" flex="1">
            {coreStack.map((tech) => (
              <Text as="li" key={tech.label} listStyleType="none" color="ink.100" fontFamily="heading" fontWeight="700">
                {tech.label}
              </Text>
            ))}
          </Flex>
          <Link asChild color="pactum.500" fontSize="sm" flexShrink={0}>
            <RouterLink to="/technologies">
              Full stack map <ArrowRight size={14} />
            </RouterLink>
          </Link>
        </Flex>
      </Section>

      <Section>
        <SectionHeader eyebrow="How it works" title="From first message to handoff." />
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="6">
          {processSteps.map((step, index) => (
            <Box key={step.title} borderTopWidth="1px" borderColor="pactum.700" pt="6">
              <Text color="pactum.500" fontFamily="heading" fontSize="sm" mb="3">
                0{index + 1}
              </Text>
              <Heading as="h3" size="lg" color="white" mb="2">
                {step.title}
              </Heading>
              <Text color="ink.200" lineHeight="1.7">
                {step.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      <Section>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={{ base: 4, md: 10 }} mb="10">
          <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs">
            Why Pactum
          </Text>
          <Heading as="h2" size={{ base: "2xl", md: "3xl" }} color="white">
            A consulting LLC with one engineer on the other side of the table.
          </Heading>
        </Grid>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          {principles.map((item) => (
            <Box key={item.title} {...cardProps} p="8">
              <Heading as="h3" size="lg" color="white" mb="3">
                {item.title}
              </Heading>
              <Text color="ink.200" lineHeight="1.7">
                {item.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <CtaBand
          title="Have a project or a contract role to fill?"
          body="Send a few lines about what you are building or what is broken. If it looks like a fit, we set up a call and scope it together."
        />
      </Section>
    </>
  );
}
