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
      direction={{ base: "column", md: "row" }}
      gap={14}
      px={{ base: 6, md: 12 }}
      py={{ base: 5, md: 20 }}
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
      <Box borderRadius="full" bg="red.600" pt={5}>
        <Image src={daoImg} alt="dao-img" />
      </Box>
    </Flex>
  );
};

export default DaoSection;
