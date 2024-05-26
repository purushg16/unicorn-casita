import { Divider, HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";

const OrderTotal = ({ order }: { order: Order }) => {
  return (
    <VStack w="100%" align="start" borderRadius={10} gap={4}>
      <VStack align="start" w="100%">
        <Label text="Product" color="gray" />
        {order.product.map((prod, i) => (
          <HStack key={i} w="100%" justify="space-between">
            <Label weight="bolder" text={prod.productId.name} />
            {prod.productId.isAttribute && (
              <Label
                weight="bolder"
                text={prod.productId.salesPrice.toFixed(2)}
              />
            )}
            {!prod.productId.isAttribute && (
              <Label weight="bolder" text={prod.productId.name} />
            )}
          </HStack>
        ))}
      </VStack>
      <Divider variant="dashed" borderColor="primary.500" />
      <HStack w="100%" justify="space-between">
        <Label text="Grand Total" weight="bolder" />
        <Label weight="bolder" text={order.totalBill.toFixed(2)} />
      </HStack>
    </VStack>
  );
};

export default OrderTotal;
