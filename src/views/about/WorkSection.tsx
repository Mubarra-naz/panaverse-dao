"use client";
import { Flex, Box, Heading, Text, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import daoWorkImg from "@/assets/images/daoWorkImg.png";
import { daoWorkData } from "@/utils/data/about";

const WorkSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={14}
      px={{ base: 6, md: 12 }}
      py={{ base: 5, md: 20 }}
    >
      <Box py={8}>
        <Image src={daoWorkImg} alt="dao-work-img" />
      </Box>
      <Box py={8}>
        <Heading variant="1">
          How
          <Heading as="span" variant="1" color="red.600">
            {` DAO `}
          </Heading>
          <Heading as="span" variant="1">
            Works
          </Heading>
        </Heading>
        <List spacing={4} pt={3}>
          {daoWorkData.map((item) => (
            <ListItem>
              <Text as="span" variant="2">
                {item.text}
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
};

export default WorkSection;
