import { SimpleGrid, VStack, Box, FormLabel } from "@chakra-ui/react";
import AddtoCartButton from "./AddtoCartButton";
import AttributeSelector from "./AttributeSelector";
import ColorSelector from "./ColorSelector";
import NumofProductSelector from "./NumofProductSelector";
import ProductHeader from "./ProductHeader";
import { ProductAttribute, ProductResponse } from "../../../entities/product";
import { useState } from "react";
import SpecificationsTable from "./SpecificationsTable";
import EmblaCarousel from "../Embla/ProductSlider/Slider";
import { RText } from "../../../Utilities/Typography";

const SingleProductGridDetails = ({
  product,
}: {
  product: ProductResponse;
}) => {
  const [count, setCount] = useState<number>(1);
  const [attribute, setAttribute] = useState<ProductAttribute>();

  return (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: 2 }}
      spacing={8}
      mt={{ base: 0, md: 4 }}
    >
      <Box pos="relative" px={{ base: 0, md: 0, lg: 4 }}>
        <Box pos="sticky" top={0}>
          <EmblaCarousel slides={product.imageLink} />
        </Box>
      </Box>
      <VStack
        gap={8}
        align={{ base: "center", md: "center", lg: "start" }}
        px={{ base: 4, md: 8 }}
      >
        <ProductHeader product={product} attribute={attribute} />

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
                attributeName={product.attributeName}
                attributes={product.attributes}
                selectedAttribute={attribute}
                setAttribute={setAttribute}
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

        <VStack w="100%" gap={4} align="start" flexWrap="wrap">
          {product.stock !== "sold-out" && (
            <NumofProductSelector
              count={count}
              isAttribute={product.isAttribute}
              setCount={setCount}
              attribute={attribute}
              productId={product._id!}
            />
          )}
          <AddtoCartButton
            imageLink={product.imageLink[0]}
            price={
              product.isAttribute
                ? product.attributes.find(
                    (attr) => attr._id! === attribute?._id
                  )?.salesPrice || 0
                : product.salesPrice
            }
            productName={product.name}
            productId={product._id!}
            count={count}
            attribute={attribute}
            isAttribute={product.isAttribute}
            soldOut={product.stock === "sold-out"}
          />
        </VStack>
        <VStack w="100%" align="start">
          <FormLabel fontSize="xs" color="primary.800" fontWeight="bold">
            Product Description
          </FormLabel>
          <RText text={product.description} color="primary.800" />

          <SpecificationsTable specifications={product.specifications} />
        </VStack>
      </VStack>
    </SimpleGrid>
  );
};

export default SingleProductGridDetails;
