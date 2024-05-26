import { Icon } from "@chakra-ui/react";
import { Order } from "../../../entities/order";
import { Truck, X } from "lucide-react";

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
      as={order.shippingStatus === "shipped" ? Truck : X}
      boxSize={big ? 6 : 4}
      color={color}
    />
  );
};

export default ShippingStatusIcon;
