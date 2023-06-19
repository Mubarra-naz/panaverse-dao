"use client";
import { daoData } from "@/utils/data/about";
import { Flex, Heading, Text } from "@chakra-ui/react";

const DaoSection = () => {
  return (
    <Flex
      bg="black"
      direction="column"
      justify="center"
      align="center"
      px={14}
      py={32}
    >
      <Heading variant="1" color="white">
        {daoData.heading}
      </Heading>
      <Text variant="3" color="white" align="justify">
        {daoData.text1}
      </Text>
      <Text variant="3" color="white" align="justify">
        {daoData.text2}
      </Text>
    </Flex>
  );
};

export default DaoSection;
