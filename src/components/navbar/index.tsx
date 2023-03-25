"use client";
import { NAV_ITEMS } from "@/utils/constants";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect } from "react";
import DaoButton from "../daoButton";
import DaoIcon from "../daoIcon";
import DaoLink from "../daoLink";

const NavLinks = () => {
  return (
    <>
      {NAV_ITEMS.map((nav) => (
        <Box key={nav.label}>
          <DaoLink
            fontSize="sm"
            color="white"
            href={nav.href ?? "#"}
            _hover={{ color: "pink" }}
          >
            {nav.label}
          </DaoLink>
        </Box>
      ))}
    </>
  );
};

const Navbar = () => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  // useEffect(() => {}, [onToggle]);
  return (
    <Box
      bgGradient={{ base: "none", md: "linear(to-r, white 50%, red.600 50%)" }}
    >
      <Container
        as="nav"
        role="presentation"
        maxW="100%"
        px={{ base: 4, md: 12 }}
      >
        <Flex py={{ base: 2, md: 3 }} minH="15" align="center">
          <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
            <Link as={NextLink} href="/">
              <Image
                src="/panaverse_logo.png"
                alt="panaverse logo"
                width={80}
                height={50}
              />
            </Link>
            <HStack
              flex={{ base: 1 }}
              justify="flex-end"
              spacing={8}
              display={{ base: "none", md: "inline-flex" }}
            >
              <NavLinks />
              <DaoLink
                href="https://portal.piaic.org/signup"
                _hover={{
                  outline: "none",
                }}
                isExternal
              >
                <DaoButton
                  colorScheme="pink"
                  _hover={{
                    bg: "pink.300",
                  }}
                  boxShadow="md"
                >
                  Apply
                </DaoButton>
              </DaoLink>
            </HStack>
            <HStack
              flex={{ base: 1, md: "auto" }}
              justify="end"
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                // onClick={isOpen ? onClose : onOpen}
                bg="transparent"
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                icon={
                  isOpen ? (
                    <CloseIcon w={4} h={4} color="red.600" />
                  ) : (
                    <HamburgerIcon w={6} h={6} color="red.600" />
                  )
                }
              />
            </HStack>
            {/* {isOpen ? (
              <Box display={{ base: "block", md: "none" }}>
                <Stack as="nav" role="presentation" maxW="100%" spacing={4}>
                  <NavLinks />
                </Stack>
              </Box>
            ) : null} */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
