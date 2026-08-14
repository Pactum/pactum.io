import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { JsonLd } from "~/components/json-ld";
import { caseStudies } from "~/data/case-studies";
import { site } from "~/data/site";
import { pageMeta } from "~/lib/seo";
import type { Route } from "./+types/case-studies._index";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Case Studies",
    description: `Selected work from ${site.name}: delivered systems, products, and consulting outcomes by ${site.owner.name}.`,
    path: "/case-studies",
  });
}

export default function CaseStudiesIndex() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${site.name} case studies`,
          description: `Delivered work and solutions from ${site.owner.name}.`,
          url: `${site.url}/case-studies`,
        }}
      />
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="8">
        <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
          Case studies
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
          Work that left the shop.
        </Heading>
        <Text color="ink.200" fontSize="xl" maxW="2xl" lineHeight="1.7" mb="14">
          Briefs for shipped systems, rescues, and foundations. Slots are reserved by lane until
          the write-ups are cleared to publish.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6" alignItems="stretch">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              asChild
              display="block"
              w="100%"
              h="100%"
              _hover={{ textDecoration: "none" }}
            >
              <RouterLink to={`/case-studies/${study.slug}`}>
                <Box
                  w="100%"
                  h="100%"
                  borderWidth="1px"
                  borderColor="whiteAlpha.100"
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  bg="ink.800"
                  transition="border-color 160ms ease, transform 160ms ease"
                  _hover={{ borderColor: "pactum.600", transform: "translateY(-2px)" }}
                >
                  <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500" mb="5">
                    {String(index + 1).padStart(2, "0")} · {study.lane}
                  </Text>
                  <Heading as="h2" size="xl" color="white" mb="3">
                    {study.title}
                  </Heading>
                  <Text color="ink.200" lineHeight="1.7" mb="6">
                    {study.summary}
                  </Text>
                  <Text
                    color={study.status === "soon" ? "ink.300" : "pactum.400"}
                    fontSize="sm"
                    display="inline-flex"
                    alignItems="center"
                    gap="2"
                  >
                    {study.status === "soon" ? "Write-up incoming" : "Read the study"}
                    <ArrowRight size={14} />
                  </Text>
                </Box>
              </RouterLink>
            </Link>
          ))}
        </SimpleGrid>

        <CtaBand />
      </Box>
    </>
  );
}
