import { Box, Flex, HStack, Tag, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  big = false,
}: {
  product: Product;
  big?: boolean;
}) => {
  return (
    <Link to={`/collections/${product._id}`}>
      <Flex
        flexDir="column"
        gap={2}
        aspectRatio={big ? "9/16" : "2/3"}
        pos="relative"
      >
        {product.stock === "sold-out" && (
          <Tag size="sm" pos="absolute" top={2} left={2} colorScheme="red">
            Sold Out
          </Tag>
        )}
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
            <RText text={product.name} color="primary.800" weight="bold" />
            <HStack align="baseline">
              {product.isAttribute ? (
                <RText text="Starts from" color="primary.800" small />
              ) : (
                <Box textDecor="line-through" textDecorationColor="#C4E4FF">
                  <RText
                    text={"Rs." + product.mrp.toFixed(2)}
                    color="#C4E4FF"
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
