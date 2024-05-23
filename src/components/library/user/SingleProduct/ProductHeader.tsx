import { VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../Utilities/Typography";
import Product from "../../../entities/product";

const ProductHeader = ({ product }: { product: Product }) => {
  return (
    <VStack
      w="100%"
      align="start"
      gap={2}
      pb={4}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <RHeading small text={product.name} color="primary.800" />
      {/* <HStack mb={4}>
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Icon as={StarIcon} />
        <Label text="(4.9)" />
      </HStack> */}
      <RText
        text={
          "Rs." +
          (product.salesPrice > 0
            ? product.salesPrice.toFixed(2)
            : product.attributes[0].salesPrice.toFixed(2))
        }
        color="primary.800"
      />
    </VStack>
  );
};

export default ProductHeader;
