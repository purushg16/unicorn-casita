import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Order } from "../../../entities/order";
import { RText } from "../../../Utilities/Typography";
import OrderPaymentStatusTag from "../order/OrderPaymentStatusTag";
import OrderTotal from "./OrderTotal";
import RefundModal from "./RefundModal";
import ConfirmOrderModal from "./ConfirmOrderModal";

const OrderSummary = ({ order }: { order: Order }) => {
  return (
    <Accordion allowToggle flex={1} w={{ base: "100%", md: 400 }}>
      <AccordionItem border="none">
        <VStack
          align="start"
          gap={4}
          borderTopRadius="xl"
          boxShadow="xs"
          w="100%"
        >
          <AccordionButton borderTopRadius="xl" py={4}>
            <VStack align="start">
              <RText small text="Order Summary" weight="bold" />
              <OrderPaymentStatusTag order={order} expanded />
            </VStack>
          </AccordionButton>
          <AccordionPanel>
            <OrderTotal order={order} />
          </AccordionPanel>
        </VStack>
      </AccordionItem>
      <HStack
        w="100%"
        bg="primary.100"
        justify="space-between"
        left={0}
        borderBottomRadius="xl"
        p={4}
        flexWrap="wrap"
      >
        <RText
          color="primary.800"
          text="This order has been confirmed and shipped successfully"
          small
        />
        <HStack>
          {order.orderStatus !== "completed" &&
            order.orderStatus !== "cancelled" && <RefundModal order={order} />}
          <ConfirmOrderModal
            orderId={order._id!}
            isDisabled={
              order.orderStatus === "confirmed" ||
              order.orderStatus === "cancelled"
            }
          />
        </HStack>
      </HStack>
    </Accordion>
  );
};

export default OrderSummary;
