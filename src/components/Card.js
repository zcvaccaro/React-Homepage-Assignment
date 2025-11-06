import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      maxW="sm"
    >
      {/* Top image */}
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />

      {/* Card body */}
      <VStack align="start" spacing={3} p={4}>
        <Heading color="black" as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <HStack spacing={2} color="blue.500" fontWeight="semibold" cursor="pointer">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;

