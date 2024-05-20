import { Skeleton, VStack } from "@chakra-ui/react";

const ReviewSkeletonCard = () => {
  return (
    <VStack
      w="100%"
      align="start"
      borderRadius="xl"
      overflow="clip"
      gap={4}
      bg="primary.50"
    >
      <VStack
        w="100%"
        align="start"
        gap={2}
        bg="primary.200"
        p={4}
        py={8}
        pb={4}
      >
        <Skeleton
          w="100%"
          h="10px"
          startColor="primary.600"
          endColor="primary.700"
        />
        <Skeleton
          w="50%"
          h="10px"
          startColor="primary.500"
          endColor="primary.400"
        />
      </VStack>
      <VStack w="100%" align="start" gap={2} p={4} minH={100} justify="end">
        <Skeleton
          w="100%"
          h="5px"
          startColor="primary.400"
          endColor="primary.500"
        />
        <Skeleton
          w="100%"
          h="5px"
          startColor="primary.400"
          endColor="primary.500"
        />
        <Skeleton
          w="100%"
          h="5px"
          startColor="primary.400"
          endColor="primary.500"
        />
      </VStack>
      <Skeleton
        w="100%"
        h="35px"
        startColor="primary.200"
        endColor="primary.200"
        borderRadius={0}
      />
    </VStack>
  );
};

export default ReviewSkeletonCard;
