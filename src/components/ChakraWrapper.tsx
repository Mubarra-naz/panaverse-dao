"use client";
import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import theme from "@/assets/theme";

type Props = {
  children: ReactNode;
};
const ChakraWrapper = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraWrapper;
