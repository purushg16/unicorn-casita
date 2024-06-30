import { Box, HStack } from "@chakra-ui/react";
import OrderQueryButton from "./OrderQueryButton";
import PaymentQueryMenu from "./PaymentQueryMenu";

const OrderTabStack = () => {
  return (
    <HStack w="100%" justify="space-between">
      <Box flex={1} maxW="100%" overflowY="auto">
        <HStack gap={2}>
          <OrderQueryButton status="pending" label="New Orders" />
          <OrderQueryButton status="confirmed" label="Confirmed Orders" />
          <OrderQueryButton status="completed" label="Completed Orders" />
          <OrderQueryButton status="cancelled" label="Cancelled Orders" />
        </HStack>
      </Box>

      <PaymentQueryMenu />
    </HStack>
  );
};

export default OrderTabStack;
