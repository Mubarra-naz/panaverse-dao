"use client";
import DaoButton from "@/components/daoButton";
import { trainingData } from "@/utils/data/about";
import { Flex, Box, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import piaic from "@/assets/images/piaic.png";
import DaoLink from "@/components/daoLink";

const TrainingSection = () => {
  return (
    <SimpleGrid columns={2} px={{ base: 6, md: 12 }} pt={{ base: 32 }}>
      <Box pt={8}>
        <Heading variant="1">
          {trainingData.head1}
          <Heading as="span" variant="1" color="red.600">
            {trainingData.head2}
          </Heading>
        </Heading>
        <Text variant="3">{trainingData.text}</Text>
        <DaoLink
          href="https://portal.piaic.org"
          _hover={{
            outline: "none",
          }}
          isExternal
        >
          <DaoButton>{trainingData.btnText}</DaoButton>
        </DaoLink>
      </Box>
      <Flex justify="center" align="center">
        <Image src={piaic} alt="piaic-img" width={172} />
      </Flex>
    </SimpleGrid>
  );
};

export default TrainingSection;
