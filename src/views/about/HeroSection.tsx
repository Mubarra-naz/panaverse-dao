"use client";
import { Box, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/images/aboutImg.png";
import { heroData } from "@/utils/data/about";

const HeroSection = () => {
  return (
    <Box
      bgGradient={{
        base: "linear(to-b, white 50%, red.600 50%)",
        md: "linear(to-r, white 50%, red.600 50%)",
      }}
      overflow="hidden"
      maxW="full"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box
          px={{ base: 4, md: 12 }}
          pb={{ base: 5 }}
          pt={{ base: 20 }}
          zIndex="banner"
        >
          <Heading variant="1" color="red.600">
            {heroData.head1}
            <Heading as="span" variant="1">
              {heroData.head2}
            </Heading>
          </Heading>
          <Text variant="2">{heroData.text}</Text>
        </Box>
        <Box mr={-20} pt={{ base: 20 }}>
          <Image src={aboutImg} alt="hero-img" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default HeroSection;
