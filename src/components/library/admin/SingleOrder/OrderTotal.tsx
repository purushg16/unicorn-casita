import { Divider, HStack, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";
import OrderProductsStack from "./OrderProductsStack";

const OrderTotal = ({ order }: { order: Order }) => {
  return (
    <VStack w="100%" align="start" borderRadius={10} gap={4}>
      <OrderProductsStack order={order} />
      <Divider variant="dashed" borderColor="primary.500" />
      <HStack w="100%" justify="space-between">
        <RText small text="Grand Total" weight="bolder" color="primary.800" />
        <RText
          weight="bolder"
          color="primary.800"
          text={order.totalBill.toFixed(2)}
        />
      </HStack>
    </VStack>
  );
};

export default OrderTotal;
