"use client";
import {
  Container,
  SimpleGrid,
  Box,
  Text,
  Icon,
  Flex,
  Heading,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { BiSupport, BiMailSend, BiCopyright } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import Image from "next/image";
import DaoIcon from "../daoIcon";

const Footer = () => {
  return (
    <Container maxW="full" bg="pink.500" px={{ base: 4, md: 12 }}>
      <SimpleGrid columns={[1, 2, 3]} spacing={20} py={20} color="white">
        <Box>
          <Image
            src="/panaverse_logo.png"
            alt="panaverse logo"
            width={80}
            height={50}
          />
          <Text fontSize="xs" pt={3}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </Text>
          <HStack mt={10}>
            <Icon as={BiCopyright} color="white" boxSize={5} />
            <Text as="span" fontSize="sm" ml={2}>
              Copyright 2023 Reserved
            </Text>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <Icon as={BiSupport} color="white" boxSize={20} />
            <Box mt={2}>
              <Heading fontSize="xl">Support</Heading>
              <Text fontSize="sm">+92-308-2220203 (WhatsApp as well)</Text>
            </Box>
          </HStack>
          <VStack align="flex-start" mt={10}>
            <Heading fontSize="xl">Connect with us</Heading>
            <Flex wrap="wrap" justify="flex-start">
              <DaoIcon
                ariaLabel="twitter link"
                icon={<AiFillTwitterCircle />}
              />
              <DaoIcon ariaLabel={"linkedIn link"} icon={<AiFillLinkedin />} />
              <DaoIcon ariaLabel={"github link"} icon={<AiFillGithub />} />
              <DaoIcon ariaLabel={"youtube link"} icon={<AiFillYoutube />} />
              <DaoIcon ariaLabel={"facebook link"} icon={<AiFillFacebook />} />
              <DaoIcon ariaLabel={"discord link"} icon={<BsDiscord />} />
            </Flex>
          </VStack>
        </Box>
        <VStack
          align="flex-start"
          justify="center"
          mb={{ base: 4, md: "none" }}
        >
          <InputGroup size="lg" borderRadius={40}>
            <Input
              placeholder="Sign up for the newsletter"
              bg="white"
              borderRadius={40}
              boxShadow="lg"
            />
            <InputRightElement>
              <IconButton
                boxShadow="lg"
                icon={<Icon as={BiMailSend} boxSize={8} />}
                bg="red.600"
                borderRadius={30}
                px={8}
                size="lg"
                aria-label="signup for newsletter"
              />
            </InputRightElement>
          </InputGroup>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Footer;
