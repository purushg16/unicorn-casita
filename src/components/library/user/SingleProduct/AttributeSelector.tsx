import { Button, HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { ProductAttribute } from "../../../entities/product";

const AttributeSelector = ({
  attributes,
  attributeName,
}: {
  attributeName: string;
  attributes: ProductAttribute[];
}) => {
  return (
    <VStack gap={4} align="start">
      <Label
        text={"Available " + attributeName}
        textTransform="capitalize"
        color="primary.700"
      />
      <HStack>
        {attributes.map((attr) => (
          <Button variant="outline" colorScheme="primary">
            {attr.value}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default AttributeSelector;
