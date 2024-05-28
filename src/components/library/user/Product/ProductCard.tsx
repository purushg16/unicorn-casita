import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`${product._id}`}>
      <Flex flexDir="column" gap={2} aspectRatio="5/4">
        <Box
          flex={1}
          borderRadius={10}
          border="1px solid"
          borderColor="primary.100"
          bgImg={product.imageLink[0]}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          _hover={{
            bgImg:
              product.imageLink.length > 1
                ? product.imageLink[1]
                : product.imageLink[0],
          }}
          transition="all 0.7s"
        />
        <Flex minH={30} w="100%" justify="space-between">
          <VStack align="start" gap={1}>
            <RHeading
              small
              text={product.name}
              color="primary.800"
              weight="bold"
            />
            <HStack align="baseline">
              {product.isAttribute ? (
                <RText text="Starts from" color="primary.800" small />
              ) : (
                <Box textDecor="line-through" textDecorationColor="gray">
                  <RText
                    text={"Rs." + product.mrp.toString()}
                    color="gray"
                    small
                  />
                </Box>
              )}
              <RText
                text={`Rs. ${
                  product.isAttribute
                    ? product.attributes[0].salesPrice.toFixed(2)
                    : product.salesPrice.toFixed(2)
                }`}
                color="primary.800"
                weight="semibold"
              />
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductCard;
