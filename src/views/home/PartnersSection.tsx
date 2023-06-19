"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import piaic from "@/assets/images/piaic.png";
import panacloud from "@/assets/images/panacloud.png";

const PartnersSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      px={{ base: 6, md: 12 }}
      py={{ base: 28, md: 48 }}
      justify="space-around"
    >
      <Box>
        <Heading variant={"1"}>Our Proud Partners</Heading>
      </Box>
      <Flex justify="space-around" gap={20}>
        <Image src={panacloud} alt="panacloud-img" />
        <Image src={piaic} alt="piaic-img" />
      </Flex>
    </Flex>
  );
};

export default PartnersSection;
