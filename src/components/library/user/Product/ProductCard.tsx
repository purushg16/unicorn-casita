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
        aspectRatio={{ base: "4/6", md: "1/1" }}
        pos="relative"
      >
        {product.stock === "sold-out" && (
          <Tag
            size="sm"
            pos="absolute"
            top={2}
            left={2}
            colorScheme="red"
            zIndex={1}
          >
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
              bg="pink"
              fontWeight="bold"
            >
              {`${product.attributes.length} ${product.attributeName}`}
            </Tag>
          )}
        </Box>
        <Flex minH={30} w="100%" justify="space-between">
          <VStack align="start" gap={1}>
            <RText text={product.name} color="gray.700" weight="semibold" />
            <HStack align="baseline" flexWrap="wrap">
              {product.isAttribute && (
                <RText text="Starts from" color="black" small />
              )}
              <RText
                text={`Rs. ${
                  product.isAttribute
                    ? product.attributes[0].salesPrice.toFixed(2)
                    : product.salesPrice.toFixed(2)
                }`}
                color="#ED63C3"
                weight="semibold"
              />

              {!product.isAttribute && (
                <>
                  {product.mrp && product.mrp > 0 && (
                    <Box textDecor="line-through" textDecorationColor="#d4d4d4">
                      <RText
                        weight="bold"
                        text={"Rs." + product.mrp.toFixed(2)}
                        color="gray.200"
                        small
                      />
                    </Box>
                  )}
                </>
              )}

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
