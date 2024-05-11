import { Box, Skeleton, VStack } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <VStack
      minH={280}
      bg="primary.50"
      borderRadius={20}
      overflow="clip"
      align="start"
      border="1px solid"
      borderColor="primary.100"
      w="100%"
      boxShadow="sm"
      gap={0}
    >
      <Box flex={1} w="100%" p={4}>
        <Skeleton
          startColor="primary.200"
          endColor="primary.100"
          borderRadius={10}
          w="100%"
          h="100%"
          boxShadow="lg"
        />
      </Box>
      <Box w="100%" p={4} pt={0}>
        <Skeleton
          borderRadius={10}
          w="100%"
          height="30px"
          startColor="primary.200"
          endColor="primary.100"
        />
      </Box>
    </VStack>
  );
};

export default ProductCardSkeleton;
