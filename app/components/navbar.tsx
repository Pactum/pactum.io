import { Box, Button, Flex, HStack, IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router";
import { navLinks } from "~/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="20"
      borderBottomWidth="1px"
      borderColor="whiteAlpha.100"
      bg="rgba(5, 6, 5, 0.82)"
      backdropFilter="blur(16px)"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py="3.5"
        align="center"
        justify="space-between"
        gap="6"
      >
        <Link asChild _hover={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
          <RouterLink to="/" aria-label="Pactum IO home">
            <HStack gap="3">
              <Image src="/logo-mark.png" alt="" h="36px" w="auto" />
              <Text className="wordmark" fontSize="sm" color="white" display={{ base: "none", sm: "block" }}>
                Pactum
              </Text>
            </HStack>
          </RouterLink>
        </Link>

        <HStack gap="8" display={{ base: "none", md: "flex" }} as="nav" aria-label="Primary">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {({ isActive }) => (
                <Text
                  fontSize="sm"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color={isActive ? "pactum.500" : "ink.200"}
                  _hover={{ color: "white" }}
                >
                  {item.label}
                </Text>
              )}
            </NavLink>
          ))}
          <Button asChild colorPalette="pactum" size="sm" borderRadius="full" px="5">
            <RouterLink to="/contact">Start a project</RouterLink>
          </Button>
        </HStack>

        <IconButton
          aria-label={open ? "Close menu" : "Open menu"}
          variant="ghost"
          color="white"
          display={{ base: "inline-flex", md: "none" }}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </IconButton>
      </Flex>

      {open ? (
        <Stack
          as="nav"
          aria-label="Mobile"
          display={{ md: "none" }}
          px="4"
          pb="5"
          gap="3"
          borderTopWidth="1px"
          borderColor="whiteAlpha.100"
        >
          {navLinks.map((item) => (
            <Link key={item.to} asChild onClick={() => setOpen(false)}>
              <RouterLink to={item.to}>
                <Text py="2" color="ink.100" letterSpacing="0.08em" textTransform="uppercase" fontSize="sm">
                  {item.label}
                </Text>
              </RouterLink>
            </Link>
          ))}
          <Button asChild colorPalette="pactum" borderRadius="full" onClick={() => setOpen(false)}>
            <RouterLink to="/contact">Start a project</RouterLink>
          </Button>
        </Stack>
      ) : null}
    </Box>
  );
}
