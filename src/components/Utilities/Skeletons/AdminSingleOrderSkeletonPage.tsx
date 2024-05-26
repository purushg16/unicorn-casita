import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const AdminSingleOrderSkeletonPage = () => {
  return (
    <VStack gap={4} align="start">
      <VStack w="100%" align="start" gap={8}>
        <VStack w="100%" align="start" gap={4}>
          <Skeleton
            w="50%"
            h="20px"
            borderRadius="xl"
            startColor="primary.200"
            endColor="primary.300"
          />
          <Skeleton
            w="50%"
            h="20px"
            borderRadius="xl"
            startColor="primary.200"
            endColor="primary.300"
          />
          <HStack gap={4} maxW="100%" overflowX="clip">
            <Skeleton
              w="50%"
              minW={180}
              minH={120}
              borderRadius="xl"
              startColor="primary.200"
              endColor="primary.300"
            />
            <Skeleton
              w="50%"
              minW={180}
              minH={120}
              borderRadius="xl"
              startColor="primary.200"
              endColor="primary.300"
            />
            <Skeleton
              w="50%"
              minW={180}
              minH={120}
              borderRadius="xl"
              startColor="primary.200"
              endColor="primary.300"
            />
          </HStack>
        </VStack>
        <HStack
          flexDir={{ base: "column", md: "row" }}
          w="100%"
          align="start"
          flexWrap="wrap"
          gap={{ base: 8, md: 4 }}
        >
          <Skeleton
            h={200}
            flex={1}
            w={{ base: "100%", md: 400 }}
            borderRadius="xl"
            startColor="primary.200"
            endColor="primary.300"
          />
          <Skeleton
            h={200}
            w={{ base: "100%", md: 350 }}
            borderRadius="xl"
            startColor="primary.200"
            endColor="primary.300"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AdminSingleOrderSkeletonPage;
