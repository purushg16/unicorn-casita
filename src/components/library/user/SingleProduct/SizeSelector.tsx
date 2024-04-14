import { Button, HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";

const SizeSelector = () => {
  return (
    <VStack gap={4} align="start">
      <Label text="Available Sizes" />
      <HStack>
        <Button variant="outline" colorScheme="primary">
          S
        </Button>
        <Button variant="outline" colorScheme="primary">
          M
        </Button>
        <Button variant="primary"> L </Button>
      </HStack>
    </VStack>
  );
};

export default SizeSelector;
