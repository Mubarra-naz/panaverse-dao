"use client";
import { Box, Card, CardBody, Heading, Text, VStack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type cardProps = {
  icon: StaticImageData;
  heading: string;
  text: string;
};

const StatsCard = ({ icon, heading, text }: cardProps) => {
  return (
    <Card bg="white" h={230} w={230}>
      <CardBody>
        <VStack align="center" justify="center">
          <Box>
            <Image src={icon} alt="card-img"></Image>
          </Box>
          <Heading variant="2">{heading}</Heading>
          <Text variant="3">{text}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
