import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { Order } from "../../../entities/order";
import ShippingStatusIcon from "./ShippingStatusIcon";

const OrderShippingStatusTag = ({ order }: { order: Order }) => {
  return (
    <Tag
      borderRadius="full"
      colorScheme={order.shippingStatus === "shipped" ? "green" : "red"}
      textTransform="capitalize"
    >
      <TagLeftIcon mr={1}>
        <ShippingStatusIcon order={order} />
      </TagLeftIcon>
      <TagLabel fontSize="xs" textTransform="capitalize">
        {order.shippingStatus}
      </TagLabel>
    </Tag>
  );
};

export default OrderShippingStatusTag;
