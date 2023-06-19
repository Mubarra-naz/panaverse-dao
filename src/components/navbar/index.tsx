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
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect } from "react";
import DaoButton from "../daoButton";
import DaoIcon from "../daoIcon";
import DaoLink from "../daoLink";
import { BsBorderWidth } from "react-icons/bs";
import { NavItem } from "@/utils/types";

const NavLinkItem = ({ label, href }: NavItem) => {
  return (
    <Box
      key={label}
      borderBottomColor={{ base: "red.600", md: "none" }}
      borderBottomWidth={{ base: 3, md: 0 }}
    >
      <DaoLink
        fontSize="sm"
        color={{ base: "red.600", md: "white" }}
        href={href ?? "#"}
        _hover={{ color: "pink" }}
      >
        {label}
      </DaoLink>
    </Box>
  );
};

const NavLinks = () => {
  return (
    <>
      {NAV_ITEMS.map((nav) => (
        <NavLinkItem label={nav.label} href={nav.href} />
      ))}
    </>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {}, [isOpen]);
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
              justify={isOpen ? "space-between" : "end"}
              align="center"
              mr={2}
              display={{ base: "flex", md: "none" }}
            >
              {isOpen ? (
                <VStack
                  as="nav"
                  role="presentation"
                  minW="95%"
                  display={{ base: "block", md: "none" }}
                  p={4}
                  spacing={5}
                  align="stretch"
                >
                  <NavLinks />
                  <NavLinkItem
                    label="Apply"
                    href="https://portal.piaic.org/signup"
                  ></NavLinkItem>
                </VStack>
              ) : null}

              <IconButton
                onClick={onToggle}
                bg="transparent"
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                icon={
                  isOpen ? (
                    <CloseIcon w={4} h={4} color="red.600" />
                  ) : (
                    <HamburgerIcon w={8} h={8} color="red.600" mt={4} />
                  )
                }
              />
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
