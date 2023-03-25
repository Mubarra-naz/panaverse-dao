"use client";
import userOnComputer from "@/assets/images/userOnComputer.png";
import {
  Stack,
  Box,
  Heading,
  Text,
  List,
  ListIcon,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { GrTechnology, GrCertificate, GrCloudComputer } from "react-icons/gr";
import { AiFillDollarCircle } from "react-icons/ai";
import { web3Data } from "@/utils/data/home";
import DaoButton from "@/components/daoButton";

const Web3Section = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={14}
      px={{ base: 6, md: 12 }}
      py={{ base: 5, md: 20 }}
    >
      <Box>
        <Image src={userOnComputer} alt="card-img"></Image>
      </Box>
      <Box>
        <Heading variant="1" color="red.600">
          {web3Data.heading}
        </Heading>
        <Text variant="2">{web3Data.text1}</Text>
        <Text variant="2">{web3Data.text2}</Text>
        <List spacing={4} pt={3}>
          <ListItem>
            <ListIcon as={GrTechnology} boxSize={6} />
            <Text as="span" variant="1">
              {web3Data.listItem1}
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillDollarCircle} boxSize={6} />
            <Text as="span" variant="1">
              {web3Data.listItem2}
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={GrCertificate} boxSize={6} />
            <Text as="span" variant="1">
              {web3Data.listItem3}
            </Text>
          </ListItem>
        </List>
        <DaoButton color="white" bg="black">
          Read More
        </DaoButton>
      </Box>
    </Flex>
  );
};

export default Web3Section;
