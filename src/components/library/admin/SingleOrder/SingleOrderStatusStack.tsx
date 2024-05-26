import { HStack } from "@chakra-ui/react";
import { Order } from "../../../entities/order";
import ColorSchemeDetector from "../../../functions/colorSchemeDetector";
import OrderStatusCard from "./OrderStatusCard";
import OrderStatusIcon from "../order/OrderStatusIcon";
import PaymentStatusIcon from "../order/PaymentStatusIcon";
import ShippingStatusIcon from "../order/ShippingStatusIcon";

const SingleOrderStatusStack = ({ order }: { order: Order }) => {
  return (
    <HStack gap={4} maxW="100%" overflowX="auto">
      <OrderStatusCard
        tag="Order Status"
        status={order.orderStatus}
        color={ColorSchemeDetector(order.orderStatus)}
        icon={
          <OrderStatusIcon
            order={order}
            color={`${ColorSchemeDetector(order.orderStatus)}.700`}
            big
          />
        }
      />
      <OrderStatusCard
        tag="Payment Status"
        status={order.paymentStatus}
        color={ColorSchemeDetector(order.paymentStatus)}
        icon={
          <PaymentStatusIcon
            order={order}
            color={`${ColorSchemeDetector(order.paymentStatus)}.700`}
            big
          />
        }
      />
      <OrderStatusCard
        tag="Shipping Status"
        status={order.shippingStatus}
        color={ColorSchemeDetector(order.shippingStatus)}
        icon={
          <ShippingStatusIcon
            order={order}
            color={`${ColorSchemeDetector(order.shippingStatus)}.700`}
            big
          />
        }
      />
    </HStack>
  );
};

export default SingleOrderStatusStack;
