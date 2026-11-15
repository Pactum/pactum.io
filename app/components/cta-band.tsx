import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { site } from "~/data/site";

type CtaBandProps = {
  title?: string
  body?: string
};

export function CtaBand({
  title = "If the work is real, I will take it.",
  body = `Pactum is a one-person practice. You work with ${site.owner.name} — not a bench that gets swapped after the pitch.`,
}: CtaBandProps) {
  return (
    <Box
      mt="20"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      borderRadius="2xl"
      px={{ base: 6, md: 12 }}
      py={{ base: 10, md: 14 }}
      bg="linear-gradient(135deg, rgba(152,199,64,0.12), rgba(5,6,5,0.4))"
    >
      <Stack gap="6" maxW="3xl">
        <Heading as="h2" size="2xl" color="white">
          {title}
        </Heading>
        <Text color="ink.200" fontSize="lg" lineHeight="1.7">
          {body}
        </Text>
        <Stack direction={{ base: "column", sm: "row" }} gap="3" flexWrap="wrap">
          {site.bookingUrl ? (
            <Button asChild colorPalette="pactum" size="lg" borderRadius="full" px="8">
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book an intro call
              </a>
            </Button>
          ) : (
            <Button asChild colorPalette="pactum" size="lg" borderRadius="full" px="8">
              <RouterLink to="/contact">Start a conversation</RouterLink>
            </Button>
          )}
          {site.email ? (
            <Button asChild variant="outline" size="lg" borderRadius="full" color="white" borderColor="whiteAlpha.300">
              <a href={`mailto:${site.email}`}>Email</a>
            </Button>
          ) : null}
          <Button asChild variant="outline" size="lg" borderRadius="full" color="white" borderColor="whiteAlpha.300">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
