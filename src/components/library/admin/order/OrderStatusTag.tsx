import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import ColorSchemeDetector from "../../../functions/colorSchemeDetector";
import { Order } from "../../../entities/order";
import OrderStatusIcon from "./OrderStatusIcon";

const OrderStatusTag = ({ order }: { order: Order }) => {
  return (
    <Tag
      borderRadius="full"
      colorScheme={ColorSchemeDetector(order.orderStatus)}
    >
      <TagLeftIcon mr={1}>
        <OrderStatusIcon order={order} />
      </TagLeftIcon>
      <TagLabel fontSize="xs" textTransform="capitalize">
        {order.orderStatus}
      </TagLabel>
    </Tag>
  );
};

export default OrderStatusTag;
