import { Divider, SimpleGrid, Skeleton, VStack } from "@chakra-ui/react";

const SingleProductPageSkeleton = () => {
  return (
    <VStack align="start" gap={8} px={{ base: 4, md: 8, lg: 16 }}>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        spacing={8}
        mb={20}
        w="100%"
      >
        <Skeleton
          w="100%"
          h={200}
          startColor="primary.100"
          endColor="primary.200"
          borderRadius="xl"
        />
        <VStack align="start">
          <Skeleton
            borderRadius="xl"
            w="70%"
            h="30px"
            startColor="primary.100"
            endColor="primary.200"
          />
          <Skeleton
            borderRadius="xl"
            w="20%"
            h="20px"
            startColor="primary.100"
            endColor="primary.200"
          />
          <Divider mb={8} mt={4} />
          <Skeleton
            borderRadius="xl"
            w="100%"
            h="20px"
            startColor="primary.100"
            endColor="primary.200"
          />
          <Skeleton
            borderRadius="xl"
            w="100%"
            h="20px"
            startColor="primary.100"
            endColor="primary.200"
          />
          <Skeleton
            borderRadius="xl"
            w="100%"
            h="20px"
            startColor="primary.100"
            endColor="primary.200"
          />
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default SingleProductPageSkeleton;
