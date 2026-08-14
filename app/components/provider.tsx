import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { system } from "~/theme";

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
