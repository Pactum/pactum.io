import { Box, Flex, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { navLinks, services, site } from "~/data/site";

export function Footer() {
  return (
    <Box as="footer" borderTopWidth="1px" borderColor="whiteAlpha.100" mt="20" bg="ink.900">
      <SimpleGrid
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 12, md: 16 }}
        columns={{ base: 1, sm: 2, lg: 4 }}
        gap="10"
      >
        <Stack gap="4">
          <Flex align="center" gap="3">
            <Image src="/logo-mark.png" alt="" h="32px" w="auto" />
            <Text className="wordmark" fontSize="xs" color="white">
              Pactum
            </Text>
          </Flex>
          <Text color="ink.300" fontSize="sm" maxW="xs" lineHeight="1.7">
            {site.legalName}. Software engineering consulting operated by {site.owner.name}.
          </Text>
        </Stack>

        <Stack gap="3">
          <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500">
            Practice
          </Text>
          {navLinks.map((item) => (
            <Link key={item.to} asChild color="ink.200" _hover={{ color: "white" }} fontSize="sm">
              <RouterLink to={item.to}>{item.label}</RouterLink>
            </Link>
          ))}
        </Stack>

        <Stack gap="3">
          <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500">
            Services
          </Text>
          {services.map((service) => (
            <Link
              key={service.slug}
              asChild
              color="ink.200"
              _hover={{ color: "white" }}
              fontSize="sm"
            >
              <RouterLink to={`/services/${service.slug}`}>{service.title}</RouterLink>
            </Link>
          ))}
        </Stack>

        <Stack gap="3">
          <Text fontSize="xs" letterSpacing="0.16em" textTransform="uppercase" color="pactum.500">
            Contact
          </Text>
          <Link asChild color="ink.200" _hover={{ color: "white" }} fontSize="sm">
            <RouterLink to="/contact">Start a conversation</RouterLink>
          </Link>
          <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" color="ink.200" _hover={{ color: "white" }} fontSize="sm">
            LinkedIn
          </Link>
          <Link href={site.github} target="_blank" rel="noopener noreferrer" color="ink.200" _hover={{ color: "white" }} fontSize="sm">
            GitHub
          </Link>
          <Link asChild color="ink.200" _hover={{ color: "white" }} fontSize="sm">
            <RouterLink to="/terms">Terms of Service</RouterLink>
          </Link>
        </Stack>
      </SimpleGrid>

      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py="6"
        borderTopWidth="1px"
        borderColor="whiteAlpha.100"
        justify="space-between"
        gap="4"
        direction={{ base: "column", sm: "row" }}
      >
        <Text color="ink.400" fontSize="xs">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </Text>
        <Text color="ink.400" fontSize="xs">
          Sole owner and operator: {site.owner.name}
        </Text>
      </Flex>
    </Box>
  );
}
