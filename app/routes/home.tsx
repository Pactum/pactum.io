import { Box, Button, Flex, Grid, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { JsonLd } from "~/components/json-ld";
import { services, site } from "~/data/site";
import { organizationJsonLd, pageMeta } from "~/lib/seo";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Pactum IO · Software Engineering Consulting",
    description: site.description,
    path: "/",
  });
}

const principles = [
  {
    title: "One operator",
    body: "No bait-and-switch staffing. Discovery, architecture, and implementation stay with the same person.",
  },
  {
    title: "Principal execution",
    body: "I take the work a staff or principal engineer would take — then I write the code and leave the system operable.",
  },
  {
    title: "Handoff by default",
    body: "You should be able to run, hire onto, or sunset what I build. Docs and boundaries are part of the delivery.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 24 }} pb="8">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "center" }}
          justify="space-between"
          gap={{ base: 12, lg: 16 }}
        >
          <Stack gap="8" maxW="3xl" position="relative">
            <Box className="hero-glow" top="-80px" left="-60px" />
            <Text
              color="pactum.500"
              letterSpacing="0.22em"
              textTransform="uppercase"
              fontSize="xs"
              fontWeight="bold"
            >
              {site.legalName}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
              lineHeight="0.95"
              color="white"
            >
              Software that ships.
              <Box as="span" color="pactum.500" display="block">
                Advice that holds.
              </Box>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="ink.200" lineHeight="1.7" maxW="2xl">
              {site.name} is the consulting practice of {site.owner.name}. SaaS bootstrapping,
              cloud architecture, AI, full stack, DevOps, platform, and blockchain — scoped and
              built by a single principal engineer.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap="3">
              <Button asChild colorPalette="pactum" size="lg" borderRadius="full" px="8">
                <RouterLink to="/contact">Talk to Matt</RouterLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                borderRadius="full"
                color="white"
                borderColor="whiteAlpha.300"
              >
                <RouterLink to="/services">See the practice</RouterLink>
              </Button>
            </Stack>
          </Stack>

          <Box
            borderWidth="1px"
            borderColor="whiteAlpha.150"
            borderRadius="3xl"
            p={{ base: 6, md: 8 }}
            bg="rgba(8, 9, 8, 0.72)"
            minW={{ lg: "340px" }}
          >
            <Text fontSize="xs" letterSpacing="0.18em" textTransform="uppercase" color="ink.300" mb="6">
              Practice areas
            </Text>
            <Stack gap="0">
              {services.map((service, index) => (
                <RouterLink key={service.slug} to={`/services/${service.slug}`}>
                  <Flex
                    py="3.5"
                    borderTopWidth={index === 0 ? "0" : "1px"}
                    borderColor="whiteAlpha.100"
                    justify="space-between"
                    align="center"
                    gap="4"
                    _hover={{ color: "pactum.500" }}
                    color="ink.100"
                  >
                    <Text fontSize="md">{service.title}</Text>
                    <ArrowRight size={16} />
                  </Flex>
                </RouterLink>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>

      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} mt={{ base: 16, md: 24 }}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="10" mb="12">
          <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs">
            How the work happens
          </Text>
          <Heading as="h2" size="3xl" color="white">
            A consulting LLC with one engineer on the other side of the table.
          </Heading>
        </Grid>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          {principles.map((item, index) => (
            <Box
              key={item.title}
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              borderRadius="2xl"
              p="8"
              bg="ink.800"
            >
              <Text color="pactum.500" fontFamily="heading" fontSize="sm" mb="4">
                0{index + 1}
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
      </Box>

      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} mt={{ base: 20, md: 28 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="12" alignItems="center">
          <Image
            src={site.owner.photo}
            alt={`${site.owner.name}, owner and principal engineer of Pactum IO`}
            w="100%"
            maxW="420px"
            borderRadius="3xl"
            objectFit="cover"
          />
          <Stack gap="5">
            <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs">
              Operator
            </Text>
            <Heading as="h2" size="3xl" color="white">
              {site.owner.name}
            </Heading>
            <Text color="ink.100" fontSize="lg">
              {site.owner.role}
            </Text>
            <Text color="ink.200" fontSize="lg" lineHeight="1.8">
              I run Pactum as a sole-owner LLC. If you hire the firm, you hire me — for architecture
              reviews, production builds, rescue work, and the unglamorous foundation a SaaS needs
              before it can charge a customer.
            </Text>
            <Button asChild variant="plain" color="pactum.500" px="0" w="fit-content">
              <RouterLink to="/about">
                <Flex align="center" gap="2">
                  More about Matt <ArrowRight size={16} />
                </Flex>
              </RouterLink>
            </Button>
          </Stack>
        </Grid>
        <CtaBand />
      </Box>
    </>
  );
}
