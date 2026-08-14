import { Box, Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink, data } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { JsonLd } from "~/components/json-ld";
import { getService, services } from "~/data/site";
import { pageMeta, serviceJsonLd } from "~/lib/seo";
import type { Route } from "./+types/services.$slug";

export function loader({ params }: Route.LoaderArgs) {
  const service = getService(params.slug);
  if (!service) {
    throw data("Service not found", { status: 404 });
  }
  return { service };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.service) {
    return pageMeta({
      title: "Service not found",
      description: "That Pactum service page does not exist.",
      path: "/services",
    });
  }

  const { service } = loaderData;
  return pageMeta({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetail({ loaderData }: Route.ComponentProps) {
  const { service } = loaderData;
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: `${service.title} consulting`,
          description: service.summary,
          path: `/services/${service.slug}`,
        })}
      />
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="8">
        <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
          {service.eyebrow}
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
          {service.title}
        </Heading>
        <Text color="ink.200" fontSize="xl" maxW="3xl" lineHeight="1.7" mb="10">
          {service.summary}
        </Text>
        <Button asChild colorPalette="pactum" borderRadius="full" mb="16">
          <RouterLink to="/contact">Discuss this work</RouterLink>
        </Button>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8" mb="12">
          <Box borderWidth="1px" borderColor="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 8 }} bg="ink.800">
            <Heading as="h2" size="lg" color="white" mb="4">
              The usual failure
            </Heading>
            <Text color="ink.200" lineHeight="1.8">
              {service.problem}
            </Text>
          </Box>
          <Box borderWidth="1px" borderColor="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 8 }}>
            <Heading as="h2" size="lg" color="white" mb="4">
              How I take it
            </Heading>
            <Text color="ink.200" lineHeight="1.8">
              {service.approach}
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="8">
          <Box>
            <Heading as="h2" size="lg" color="white" mb="5">
              What you leave with
            </Heading>
            <Stack gap="3">
              {service.outcomes.map((item) => (
                <Text key={item} color="ink.100" pl="5" position="relative" lineHeight="1.7">
                  <Box as="span" position="absolute" left="0" color="pactum.500">
                    ▸
                  </Box>
                  {item}
                </Text>
              ))}
            </Stack>
          </Box>
          <Box>
            <Heading as="h2" size="lg" color="white" mb="5">
              Typical engagements
            </Heading>
            <Stack gap="3">
              {service.engagements.map((item) => (
                <Text key={item} color="ink.100" pl="5" position="relative" lineHeight="1.7">
                  <Box as="span" position="absolute" left="0" color="pactum.500">
                    ▸
                  </Box>
                  {item}
                </Text>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>

        <Box mt="16">
          <Heading as="h2" size="lg" color="white" mb="6">
            Other lanes
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="4">
            {others.map((item) => (
              <Box
                key={item.slug}
                asChild
                borderWidth="1px"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                p="5"
                _hover={{ borderColor: "pactum.600" }}
              >
                <RouterLink to={`/services/${item.slug}`}>
                  <Text color="pactum.500" fontSize="xs" letterSpacing="0.14em" textTransform="uppercase" mb="2">
                    {item.eyebrow}
                  </Text>
                  <Text color="white" fontWeight="bold">
                    {item.title}
                  </Text>
                </RouterLink>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <CtaBand />
      </Box>
    </>
  );
}
