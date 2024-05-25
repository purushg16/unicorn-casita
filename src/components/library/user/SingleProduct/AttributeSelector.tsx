import { Button, HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { ProductAttribute } from "../../../entities/product";

const AttributeSelector = ({
  attributes,
  selectedAttribute,
  setAttribute,
}: {
  selectedAttribute: string;
  setAttribute: (attr: ProductAttribute) => void;
  attributes: ProductAttribute[];
}) => {
  return (
    <VStack gap={4} align="start">
      <Label
        text={"Available " + selectedAttribute}
        textTransform="capitalize"
        color="primary.700"
      />
      <HStack>
        {attributes.map((attr) => (
          <Button
            variant="outline"
            colorScheme="primary"
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
