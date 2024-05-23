import { Box, Flex, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`${product._id}`}>
      <Flex flexDir="column" gap={4} aspectRatio="5/4">
        <Box
          flex={1}
          borderRadius={10}
          border="1px solid"
          borderColor="primary.100"
          bgImg={product.imageLink[0]}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
        />
        <Flex minH={30} w="100%" justify="space-between">
          <VStack align="start" gap={0}>
            <RText text={product.name} color="primary.800" weight="bolder" />
            <RText
              text={"Rs." + product.salesPrice}
              color="primary.600"
              weight="bolder"
            />
          </VStack>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductCard;
