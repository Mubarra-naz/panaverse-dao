"use client";
import StatsCard from "@/components/daoCards/StatsCard";
import { statsData } from "@/utils/data/home";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
  return (
    <Flex
      bgGradient="linear(to-b, black 50%, red.600 50%)"
      justify="center"
      align="center"
      p={20}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        grow={1}
        gap={10}
        wrap="wrap"
      >
        {statsData.map((stats) => (
          <StatsCard heading={stats.head} text={stats.text} icon={stats.icon} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Stats;
