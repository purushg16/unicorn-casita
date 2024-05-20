import { Skeleton, VStack } from "@chakra-ui/react";

const OrdersSkeleton = () => {
  return (
    <VStack w="100%" gap={4} p={4}>
      <Skeleton
        h="30px"
        w="100%"
        borderRadius="xl"
        startColor="primary.700"
        endColor="primary.800"
      />
      <Skeleton
        h="30px"
        w="100%"
        borderRadius="xl"
        startColor="primary.300"
        endColor="primary.400"
      />
      <Skeleton
        h="30px"
        w="100%"
        borderRadius="xl"
        startColor="primary.300"
        endColor="primary.400"
      />
      <Skeleton
        h="30px"
        w="100%"
        borderRadius="xl"
        startColor="primary.300"
        endColor="primary.400"
      />
      <Skeleton
        h="30px"
        w="100%"
        borderRadius="xl"
        startColor="primary.300"
        endColor="primary.400"
      />
    </VStack>
  );
};

export default OrdersSkeleton;
