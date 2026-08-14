import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink, data } from "react-router";
import { CtaBand } from "~/components/cta-band";
import { getCaseStudy } from "~/data/case-studies";
import { pageMeta } from "~/lib/seo";
import type { Route } from "./+types/case-studies.$slug";

export function loader({ params }: Route.LoaderArgs) {
  const study = getCaseStudy(params.slug);
  if (!study) {
    throw data("Case study not found", { status: 404 });
  }
  return { study };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.study) {
    return pageMeta({
      title: "Case study not found",
      description: "That Pactum case study does not exist.",
      path: "/case-studies",
    });
  }

  const { study } = loaderData;
  return pageMeta({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default function CaseStudyDetail({ loaderData }: Route.ComponentProps) {
  const { study } = loaderData;

  return (
    <Box maxW="3xl" mx="auto" px={{ base: 4, md: 8 }} pt={{ base: 16, md: 20 }} pb="8">
      <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="4">
        {study.lane}
      </Text>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "6xl" }}
        lineHeight={{ base: "1.2", md: "1.15" }}
        fontWeight="700"
        color="white"
        mb="6"
      >
        {study.title}
      </Heading>
      <Text color="ink.200" fontSize="xl" lineHeight="1.7" mb="8">
        {study.summary}
      </Text>
      <Box borderWidth="1px" borderColor="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 8 }} bg="ink.800" mb="8">
        <Text color="pactum.500" fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" mb="3">
          Status
        </Text>
        <Heading as="h2" size="lg" color="white" mb="3">
          Write-up incoming
        </Heading>
        <Text color="ink.200" lineHeight="1.8">
          This slot is reserved. The public brief — problem, approach, and what shipped — will land
          here once the work can be named.
        </Text>
      </Box>
      <Button asChild variant="outline" borderRadius="full" color="white" borderColor="whiteAlpha.300" mb="8">
        <RouterLink to="/case-studies">Back to case studies</RouterLink>
      </Button>
      <CtaBand />
    </Box>
  );
}
