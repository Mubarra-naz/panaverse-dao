"use client";
import DaoButton from "@/components/daoButton";
import { daoData } from "@/utils/data/home";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import daoImg from "@/assets/images/daoImg.png";
import DaoLink from "@/components/daoLink";

const DaoSection = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={10}
      px={{ base: 6, md: 12 }}
      pt={{ base: 28, md: 48 }}
    >
      <Box py={8}>
        <Heading variant="1">
          {daoData.head1}
          <Heading as="span" variant="1" color="red.600">
            {daoData.head2}
          </Heading>
        </Heading>
        <Text variant="3">{daoData.text1}</Text>
        <Text variant="3">{daoData.text2}</Text>
        <DaoLink
          href="/about"
          _hover={{
            outline: "none",
          }}
        >
          <DaoButton>Explore Panaverse DAO</DaoButton>
        </DaoLink>
      </Box>
      <Box
        borderRadius="full"
        bg="red.600"
        minW="50%"
        pt={{ base: 6, lg: 0 }}
        mb={{ base: 20, lg: 0 }}
      >
        <Image src={daoImg} alt="dao-img" />
      </Box>
    </Flex>
  );
};

export default DaoSection;
