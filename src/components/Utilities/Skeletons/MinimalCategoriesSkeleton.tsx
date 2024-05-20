import { SimpleGrid, Skeleton, VStack } from "@chakra-ui/react";

const MinimalCategoriesSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} w="100%">
      {Array.from({ length: 6 }).map((_a, i) => (
        <VStack key={i} gap={0} borderRadius={15} overflow="clip">
          <Skeleton
            startColor="primary.300"
            endColor="primary.200"
            w="100%"
            minH={150}
            bg="primary.100"
          />
          <Skeleton
            startColor="primary.200"
            endColor="primary.100"
            bg="primary.100"
            w="100%"
            h="20px"
            textAlign="center"
            py={2}
          />
        </VStack>
      ))}
    </SimpleGrid>
  );
};

export default MinimalCategoriesSkeleton;
