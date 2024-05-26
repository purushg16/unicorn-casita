import { SimpleGrid, VStack, HStack, Box } from "@chakra-ui/react";
import AddtoCartButton from "./AddtoCartButton";
import AttributeSelector from "./AttributeSelector";
import ColorSelector from "./ColorSelector";
import NumofProductSelector from "./NumofProductSelector";
import ProductHeader from "./ProductHeader";
import EmblaCarousel from "../Embla/ProductSlider/Slider";
import { ProductAttribute, ProductResponse } from "../../../entities/product";
import { useState } from "react";

const SingleProductGridDetails = ({
  product,
}: {
  product: ProductResponse;
}) => {
  const [count, setCount] = useState<number>(1);
  const [attribute, setAttribute] = useState<ProductAttribute>();

  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8}>
      <Box pos="relative">
        <Box pos="sticky" top={0}>
          <EmblaCarousel slides={product.imageLink} options={{}} />
        </Box>
      </Box>
      <VStack gap={8} align="start">
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

        <HStack gap={4} align="end">
          <NumofProductSelector
            count={count}
            isAttribute={product.isAttribute}
            setCount={setCount}
            attribute={attribute}
            productId={product._id!}
          />
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
          />
        </HStack>
      </VStack>
    </SimpleGrid>
  );
};

export default SingleProductGridDetails;
