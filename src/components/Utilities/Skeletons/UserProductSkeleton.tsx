import { Skeleton, VStack } from "@chakra-ui/react";

const UserProductSkeleton = () => {
  return (
    <VStack gap={4} align="start" aspectRatio="5/4">
      <Skeleton
        flex={1}
        startColor="primary.200"
        endColor="primary.100"
        borderRadius={10}
        w="100%"
      />
      <VStack align="start" minH={30} w="100%">
        <Skeleton
          startColor="primary.200"
          endColor="primary.100"
          borderRadius={10}
          w="50%"
          h="10px"
        />
        <Skeleton
          startColor="primary.200"
          endColor="primary.100"
          borderRadius={10}
          w="20%"
          h="10px"
        />
      </VStack>
    </VStack>
  );
};

export default UserProductSkeleton;
