import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const DeliveryPartnerSkeletonCard = () => {
  return (
    <HStack
      justify="space-between"
      w="100%"
      bg="primary.100"
      p={4}
      borderRadius="xl"
    >
      <VStack align="start" w="100%">
        <Skeleton
          w="60%"
          h="10px"
          startColor="primary.600"
          endColor="primary.700"
        />
        <Skeleton
          w="30%"
          h="5px"
          startColor="primary.500"
          endColor="primary.600"
        />
      </VStack>
      <Skeleton
        w="7%"
        aspectRatio="1/1"
        borderRadius="lg"
        startColor="red.200"
        endColor="red.300"
      />
    </HStack>
  );
};

export default DeliveryPartnerSkeletonCard;
