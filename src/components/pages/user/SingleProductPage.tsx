import { Box, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import { EmblaOptionsType } from "embla-carousel";
import ProductSlider from "../../library/user/Embla/ProductSlider/Slider";
import ProductHeader from "../../library/user/SingleProduct/ProductHeader";
import AttributeSelector from "../../library/user/SingleProduct/AttributeSelector";
import ColorSelector from "../../library/user/SingleProduct/ColorSelector";
import NumofProductSelector from "../../library/user/SingleProduct/NumofProductSelector";
import { useGetSingleProduct } from "../../hooks/user/useProduct";

const SingleProductPage = () => {
  const productId = useParams().id;
  const { data: product } = useGetSingleProduct(productId!, !!productId);

  const OPTIONS: EmblaOptionsType = {};

  if (product)
    return (
      <Flex gap={8} flexDir="column">
        <BreadCrumbsTile crumbs={["home", "collections", product.name]} />
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8}>
          <Box pos="relative">
            <Box pos="sticky" top={0}>
              <ProductSlider slides={product.imageLink} options={OPTIONS} />
            </Box>
          </Box>
          <VStack gap={8} align="start">
            <ProductHeader product={product} />
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacingX={20}
              spacingY={8}
              w="100%"
              pb={4}
              borderBottom="1px solid"
              borderColor="gray.100"
            >
              {product.attributes.length > 0 &&
                product.attributeName !== "color" && (
                  <AttributeSelector
                    attributes={product.attributes}
                    attributeName={product.attributeName}
                  />
                )}
              {product.attributes.length > 0 &&
                product.attributeName === "color" && (
                  <ColorSelector attributes={product.attributes} />
                )}
            </SimpleGrid>
            <NumofProductSelector />
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
