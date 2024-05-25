import { Box, VStack } from "@chakra-ui/react";
import { Label, RHeading, RText } from "../../../Utilities/Typography";
import { ProductAttribute, ProductResponse } from "../../../entities/product";

const ProductHeader = ({
  product,
  attribute,
}: {
  product: ProductResponse;
  attribute: ProductAttribute | undefined;
}) => {
  return (
    <VStack
      w="100%"
      align="start"
      gap={2}
      pb={4}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Label
        small
        text={product.category.name}
        color="primary.800"
        textTransform="uppercase"
      />
      <RHeading text={product.name} color="primary.800" />
      <RHeading
        weight="semibold"
        small
        text={
          "Rs." +
          (!product.isAttribute
            ? product.salesPrice.toFixed(2)
            : attribute
            ? product.attributes
                .find((a) => a._id! === attribute._id!)
                ?.salesPrice.toFixed(2)
            : product.attributes[0].salesPrice.toFixed(2))
        }
        color="primary.800"
      />
      <Box mt={4} />
      <RText text={product.description} color="primary.800" />
    </VStack>
  );
};

export default ProductHeader;
