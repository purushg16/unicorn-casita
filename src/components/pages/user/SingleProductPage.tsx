import { Box, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../../hooks/user/useProduct";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import ProductSlider from "../../library/user/Embla/ProductSlider/Slider";
import AddtoCartButton from "../../library/user/SingleProduct/AddtoCartButton";
import AttributeSelector from "../../library/user/SingleProduct/AttributeSelector";
import ColorSelector from "../../library/user/SingleProduct/ColorSelector";
import NumofProductSelector from "../../library/user/SingleProduct/NumofProductSelector";
import ProductHeader from "../../library/user/SingleProduct/ProductHeader";

const SingleProductPage = () => {
  const productId = useParams().id;
  const { data: product } = useGetSingleProduct(productId!, !!productId);

  const [count, setCount] = useState<number>(1);
  const [attribute, setAttribute] = useState<string>("");

  if (product)
    return (
      <Flex gap={8} flexDir="column">
        <BreadCrumbsTile crumbs={["home", "collections", product.name]} />
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8}>
          <Box pos="relative">
            <Box pos="sticky" top={0}>
              <ProductSlider slides={product.imageLink} options={{}} />
            </Box>
          </Box>
          <VStack gap={8} align="start">
            <ProductHeader product={product} />

            {product.attributes.length > 0 && (
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacingX={20}
                spacingY={8}
                w="100%"
                pb={4}
                borderBottom="1px solid"
                borderColor="gray.100"
              >
                {product.attributeName !== "color" && (
                  <AttributeSelector
                    attributes={product.attributes}
                    attributeName={product.attributeName}
                  />
                )}
                {product.attributeName === "color" && (
                  <ColorSelector
                    attributes={product.attributes}
                    selectedColor={attribute}
                    setColor={setAttribute}
                  />
                )}
              </SimpleGrid>
            )}

            <HStack gap={4} align="end">
              <NumofProductSelector
                count={count}
                setCount={setCount}
                attribute={attribute}
                productId={product._id!}
              />
              <AddtoCartButton
                imageLink={product.imageLink[0]}
                price={
                  product.isAttribute
                    ? product.attributes.find(
                        (attr) => attr.value === attribute
                      )?.salesPrice || 0
                    : product.salesPrice
                }
                productName={product.name}
                productId={product._id!}
                count={count}
                attribute={attribute}
              />
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* <VStack gap={8} align="start" my={16}>
        <RHeading small text="Related Products" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} w="100%" spacing={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </VStack> */}
      </Flex>
    );
};

export default SingleProductPage;
