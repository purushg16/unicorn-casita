import { Skeleton, VStack } from "@chakra-ui/react";

const ReviewSkeletonCard = () => {
  return (
    <VStack
      w="100%"
      align="start"
      borderRadius="xl"
      overflow="clip"
      gap={4}
      bg="primary.100"
    >
      <VStack w="100%" align="start" gap={2} bg="primary.300" p={4} py={8}>
        <Skeleton
          w="100%"
          h="10px"
          startColor="primary.50"
          endColor="primary.100"
        />
        <Skeleton
          w="50%"
          h="10px"
          startColor="primary.50"
          endColor="primary.100"
        />
      </VStack>
      <VStack w="100%" align="start" gap={2} p={4}>
        <Skeleton
          w="100%"
          h="10px"
          startColor="primary.400"
          endColor="primary.200"
        />
        <Skeleton
          w="100%"
          h="10px"
          startColor="primary.400"
          endColor="primary.200"
        />
        <Skeleton
          w="100%"
          h="10px"
          startColor="primary.400"
          endColor="primary.200"
        />
      </VStack>
    </VStack>
  );
};

export default ReviewSkeletonCard;
