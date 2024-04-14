import { Button, Divider, HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";

const TotalSection = () => {
  return (
    <VStack
      w="100%"
      align="start"
      borderRadius={10}
      p={4}
      gap={4}
      border="1px solid"
      borderColor="gray.100"
    >
      <HStack w="100%" justify="space-between">
        <Label text="Subtotal" color="gray" />
        <Label weight="bolder" text="Rs. 200.00" />
      </HStack>
      <HStack w="100%" justify="space-between">
        <Label text="Discount" color="gray" />
        <Label weight="bolder" color="primary.400" text="- Rs. 20.00" />
      </HStack>
      <Divider variant="dashed" />
      <HStack w="100%" justify="space-between">
        <Label text="Grand Total" weight="bolder" />
        <Label weight="bolder" text="Rs. 180.00" />
      </HStack>
      <Button w="100%" variant="primary">
        Checkout Now
      </Button>
    </VStack>
  );
};

export default TotalSection;
