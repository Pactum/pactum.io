import { Box, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { JsonLd } from "~/components/json-ld";
import { services, site } from "~/data/site";
import { organizationJsonLd, pageMeta } from "~/lib/seo";
import type { Route } from "./+types/services._index";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Services",
    description: `Software consulting from ${site.name}: SaaS bootstrapping, cloud architecture, AI, full stack, DevOps, platform, and blockchain.`,
    path: "/services",
  });
}

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="8">
        <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
          Services
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
          Seven lanes. One engineer.
        </Heading>
        <Text color="ink.200" fontSize="xl" maxW="2xl" lineHeight="1.7" mb="14">
          Each engagement is scoped to the problem, then built by {site.owner.name}. Follow a lane
          for how Pactum typically shows up.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6" alignItems="stretch">
          {services.map((service) => (
            <Link
              key={service.slug}
              asChild
              display="block"
              w="100%"
              h="100%"
              _hover={{ textDecoration: "none" }}
            >
              <RouterLink to={`/services/${service.slug}`}>
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
                  <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500" mb="3">
                    {service.eyebrow}
                  </Text>
                  <Heading as="h2" size="xl" color="white" mb="3">
                    {service.title}
                  </Heading>
                  <Text color="ink.200" lineHeight="1.7" mb="6">
                    {service.short}
                  </Text>
                  <Text color="pactum.400" fontSize="sm" display="inline-flex" alignItems="center" gap="2">
                    Read the brief <ArrowRight size={14} />
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
