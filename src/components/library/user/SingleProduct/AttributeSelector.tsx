import { Button, FormLabel, HStack, VStack } from "@chakra-ui/react";
import { ProductAttribute } from "../../../entities/product";

const AttributeSelector = ({
  attributeName,
  attributes,
  selectedAttribute,
  setAttribute,
}: {
  attributeName: string;
  selectedAttribute: ProductAttribute | undefined;
  setAttribute: (attr: ProductAttribute) => void;
  attributes: ProductAttribute[];
}) => {
  return (
    <VStack gap={4} align="start">
      <FormLabel fontSize="xs" color="black" fontWeight="bold">
        {"Available " + attributeName + "s"}
      </FormLabel>

      <HStack>
        {attributes.map((attr) => (
          <Button
            textTransform="capitalize"
            variant={
              selectedAttribute && attr._id === selectedAttribute._id
                ? "black"
                : "outline"
            }
            onClick={() => setAttribute(attr)}
          >
            {attr.value}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default AttributeSelector;
