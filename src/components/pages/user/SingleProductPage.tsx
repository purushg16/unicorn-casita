import { Box, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreadCrumbsTile from "../../library/user/BreadCrumbsTile";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../../library/user/Embla/ProductSlider/Slider";
import ProductHeader from "../../library/user/SingleProduct/ProductHeader";
import SizeSelector from "../../library/user/SingleProduct/SizeSelector";
import ColorSelector from "../../library/user/SingleProduct/ColorSelector";
import NumofProductSelector from "../../library/user/SingleProduct/NumofProductSelector";
import { RHeading } from "../../Utilities/Typography";
import ProductCard from "../../library/user/Product/ProductCard";

const SingleProductPage = () => {
  const productId = useParams().id;

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Flex gap={8} flexDir="column">
      <BreadCrumbsTile
        crumbs={["home", "collections", "Product " + productId]}
      />
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8}>
        <Box pos="relative">
          <Box pos="sticky" top={0}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </Box>
        </Box>
        <VStack gap={8} align="start">
          <ProductHeader />
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacingX={20}
            spacingY={8}
            w="100%"
            pb={4}
            borderBottom="1px solid"
            borderColor="gray.100"
          >
            <SizeSelector />
            <ColorSelector />
          </SimpleGrid>
          <NumofProductSelector />
        </VStack>
      </SimpleGrid>

      <VStack gap={8} align="start" my={16}>
        <RHeading small text="Related Products" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} w="100%" spacing={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default SingleProductPage;
