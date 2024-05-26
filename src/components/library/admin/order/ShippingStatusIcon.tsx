import { Icon } from "@chakra-ui/react";
import { Order } from "../../../entities/order";
import { Clock, X } from "lucide-react";

const ShippingStatusIcon = ({
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
      as={order.shippingStatus === "shipped" ? Clock : X}
      boxSize={big ? 6 : 4}
      color={color}
    />
  );
};

export default ShippingStatusIcon;
