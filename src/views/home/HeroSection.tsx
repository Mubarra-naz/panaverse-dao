"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import heroImg from "@/assets/images/heroImg.png";
import { heroData } from "@/utils/data/home";
import { AddIcon } from "@chakra-ui/icons";
import DaoButton from "@/components/daoButton";

const HeroSection = () => {
  return (
    <Box
      bgGradient={{
        base: "linear(to-b, white 50%, red.600 50%)",
        md: "linear(to-r, white 50%, red.600 50%)",
      }}
      overflowY="hidden"
      maxW="full"
      minH="container.sm"
      flex={1}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} py={{ base: 2, md: 0 }}>
        <Box px={{ base: 4, md: 12 }} py={{ base: 5, md: 28 }} zIndex="banner">
          <Text variant="1">{heroData.subHeading}</Text>
          <Heading variant="1">
            {heroData.head1}
            <Heading as="span" variant="1" color="red.600">
              {heroData.head2}
            </Heading>
          </Heading>
          <Text variant="2">{heroData.text}</Text>
          <DaoButton variant="outline">Get Started</DaoButton>
        </Box>
        <Box
          position="relative"
          ml={{ base: 0, md: -80 }}
          mt={{ base: 8, sm: 12, md: "none" }}
        >
          <Box
            position="absolute"
            right="10%"
            top={{ base: "5%", sm: "10%", md: "5%", lg: "-10%" }}
          >
            <Box
              bg="white"
              position="absolute"
              right="0%"
              top={{ sm: "40%", md: "40%" }}
              px={4}
              py={2}
              borderRadius="xl"
              display={{ base: "none", sm: "inline-block" }}
            >
              <Text variant="4">{heroData.rightText}</Text>
              <Box pt={1}>
                <AvatarGroup size={{ base: "sm", md: "md" }} max={5}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar bg="pink.500" icon={<AddIcon />} />
                </AvatarGroup>
              </Box>
            </Box>
            <Image src={heroImg} alt="hero-img" width={800} />
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default HeroSection;
