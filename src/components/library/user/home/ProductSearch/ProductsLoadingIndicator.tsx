import { HStack, Spinner, Text } from "@chakra-ui/react";

const ProductsLoadingIndicator = () => {
  return (
    <HStack w="100%" justify="center" py={4}>
      <Spinner color="primary.800" size="sm" />
      <Text color="primary.800"> Loading... </Text>
    </HStack>
  );
};

export default ProductsLoadingIndicator;
