import { VStack } from "@chakra-ui/react";
import DeliveryPartnerSkeletonCard from "./DeliveryPartnerSkeletonCard";

const DeliveryPartnerSkeletonGrid = () => {
  return (
    <VStack gap={2} w="100%" align="start">
      {Array.from({ length: 2 }).map((_a, i) => (
        <DeliveryPartnerSkeletonCard key={i} />
      ))}
    </VStack>
  );
};

export default DeliveryPartnerSkeletonGrid;
