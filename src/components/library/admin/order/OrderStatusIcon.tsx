import { Icon } from "@chakra-ui/react";
import { Clock, X, SearchCheck, Check } from "lucide-react";
import { Order } from "../../../entities/order";

const OrderStatusIcon = ({
  order,
  color = "inherit",
  big = false,
}: {
  order: Order;
  color?: string;
  big?: boolean;
}) => {
  return (
    <Icon
      boxSize={big ? 6 : 4}
      color={color}
      as={
        order.orderStatus === "pending"
          ? Clock
          : order.orderStatus === "cancelled"
          ? X
          : order.orderStatus === "completed"
          ? SearchCheck
          : Check
      }
    />
  );
};

export default OrderStatusIcon;
