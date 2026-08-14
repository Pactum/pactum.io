import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function SiteLayout() {
  return (
    <Box className="site-shell">
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
