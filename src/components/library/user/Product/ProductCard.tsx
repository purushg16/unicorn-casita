import { Box, Flex, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";

const ProductCard = () => {
  return (
    <Flex flexDir="column" gap={4} aspectRatio="5/4">
      <Box
        flex={1}
        borderRadius={10}
        bgImg="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      />
      <Flex h={30} w="100%" justify="space-between">
        <VStack align="start" gap={0}>
          <Label text="Product 001" />
          <Label text="Rs. 300.00" weight="bolder" />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
