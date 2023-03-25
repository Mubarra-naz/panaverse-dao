"use client";
import ReviewCard from "@/components/daoCards/ReviewCard";
import { reviewData } from "@/utils/data/home";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";

import { BsFillChatRightQuoteFill } from "react-icons/bs";
const ReviewSection = () => {
  return (
    <Box px={{ base: 6, md: 12 }} py={{ base: 5, md: 20 }}>
      <Heading variant="1">{reviewData.heading}</Heading>
      <Flex direction="row" gap={14} py={5}>
        <Box display={{ base: "none", md: "block" }}>
          <Icon
            as={BsFillChatRightQuoteFill}
            boxSize={52}
            color="pink.500"
            opacity={0.4}
          />
        </Box>
        <Box>
          <ReviewCard
            username={reviewData.reviews[0].username}
            img={reviewData.reviews[0].img}
            content={reviewData.reviews[0].content}
            role={reviewData.reviews[0].role}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ReviewSection;
