import { Box, Flex, HStack, Tag, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/collections/${product._id}`}>
      <Flex
        flexDir="column"
        gap={4}
        w="100%"
        minH="100%"
        aspectRatio="6/7"
        pos="relative"
      >
        {product.stock === "sold-out" && (
          <Tag size="sm" pos="absolute" top={2} left={2} colorScheme="red">
            Sold Out
          </Tag>
        )}
        <Box
          flex={1}
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
          pos="relative"
        >
          {product.attributes.length > 0 && (
            <Tag
              id="variants-tag"
              borderRadius={99}
              pos="absolute"
              bottom={2}
              right={2}
              size="sm"
              colorScheme="purple"
              fontWeight="bold"
            >
              {`${product.attributes.length} variants avaiable`}
            </Tag>
          )}
        </Box>
        <Flex minH={30} w="100%" justify="space-between">
          <VStack align="start" gap={1}>
            <RText text={product.name} color="gray.700" weight="semibold" />
            <HStack align="baseline">
              {product.isAttribute ? (
                <RText text="Starts from" color="black" small />
              ) : (
                <>
                  {product.mrp && product.mrp > 0 && (
                    <Box textDecor="line-through" textDecorationColor="skyblue">
                      <RText
                        weight="bold"
                        text={"Rs." + product.mrp.toFixed(2)}
                        color="skyblue"
                        small
                      />
                    </Box>
                  )}
                </>
              )}
              <RText
                text={`Rs. ${
                  product.isAttribute
                    ? product.attributes[0].salesPrice.toFixed(2)
                    : product.salesPrice.toFixed(2)
                }`}
                color="red"
                weight="semibold"
              />
              {!product.isAttribute && product.mrp && product.mrp > 0 && (
                <RText
                  weight="bold"
                  text={
                    "(" +
                    (
                      ((product.mrp - product.salesPrice) / product.mrp) *
                      100
                    ).toFixed(0) +
                    "% off)"
                  }
                  color="pink"
                  small
                />
              )}
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductCard;
