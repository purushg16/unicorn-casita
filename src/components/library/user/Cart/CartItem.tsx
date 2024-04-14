import { Box, Checkbox, HStack, Show, Td, Tr, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import CartQuantityController from "./CartQuantityController";

const CartItem = () => {
  return (
    <Tr>
      <Show above="lg">
        <Td>
          <Checkbox />
        </Td>
      </Show>
      <Td>
        <HStack gap={4} justify="start" align="start">
          <Box
            w={50}
            aspectRatio="1/1"
            bgColor="primary.200"
            borderRadius={10}
            overflow="hidden"
            bgImg="
            https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
          />
          <VStack align="start" gap={0}>
            <Label weight="bolder" text="Product Name" />
            <Label text="Rs.200" color="primary.700" />
            <Show below="lg">
              <CartQuantityController md />
            </Show>
          </VStack>
        </HStack>
      </Td>
      <Show above="lg">
        <Td>
          <CartQuantityController />
        </Td>
      </Show>
      <Td isNumeric alignItems="start" fontWeight="bolder">
        Rs. 25.40
      </Td>
    </Tr>
  );
};

export default CartItem;
