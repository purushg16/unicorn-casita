import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { RHeading } from "../../../Utilities/Typography";
import { ProductAttribute, ProductResponse } from "../../../entities/product";
import { Link } from "react-router-dom";

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
      align={{ base: "center", md: "center", lg: "start" }}
      gap={2}
      pb={4}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      {/* <Label
        small
        text={product.category.name}
        color="primary.800"
        textTransform="uppercase"
      /> */}
      <Box maxW="100%">
        <RHeading
          big
          textTransform="uppercase"
          text={product.name}
          color="black"
        />
      </Box>
      <HStack>
        <Text
          children={`Rs. ${product.mrp.toFixed(2)}`}
          color="skyblue"
          textDecor="line-through"
        />
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
      </HStack>
      <Text fontSize={{ base: "xs", md: "sm" }}>
        Tax included.{" "}
        <Link
          to="/shippinganddeliverypolicy"
          style={{ textDecoration: "underline" }}
        >
          Shipping{" "}
        </Link>
        calculated at checkout.
      </Text>

      <Box mt={4} />
    </VStack>
  );
};

export default ProductHeader;
