"use client";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import DaoIcon from "../daoIcon";
type reviewProps = {
  username: string;
  img: string;
  role: string;
  content: string;
};

const ReviewCard = ({ username, img, role, content }: reviewProps) => {
  return (
    <Card size="lg" p={3}>
      <CardBody>
        <Text variant="3" pb={6}>
          "{content}"
        </Text>
        <Flex justify="space-between">
          <Flex gap={5}>
            <Avatar name={username} src={img} />
            <Box>
              <Text variant="3" as="b">
                {username}
              </Text>
              <Text variant="4">{role}</Text>
            </Box>
          </Flex>
          <Box>
            <DaoIcon
              icon={<BsArrowLeftSquare />}
              ariaLabel="left-icon"
              color="red.600"
            />
            <DaoIcon
              icon={<BsArrowRightSquare />}
              ariaLabel="right-icon"
              color="red.600"
            />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
