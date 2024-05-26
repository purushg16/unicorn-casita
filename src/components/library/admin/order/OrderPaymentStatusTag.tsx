import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { Order } from "../../../entities/order";
import ColorSchemeDetector from "../../../functions/colorSchemeDetector";
import PaymentStatusIcon from "./PaymentStatusIcon";

const OrderPaymentStatusTag = ({
  order,
  expanded = false,
}: {
  order: Order;
  expanded?: boolean;
}) => {
  return (
    <Tag
      borderRadius="full"
      colorScheme={ColorSchemeDetector(order.paymentStatus)}
      textTransform="capitalize"
    >
      <TagLeftIcon mr={1}>
        <PaymentStatusIcon order={order} />
      </TagLeftIcon>
      <TagLabel fontSize="xs">
        {expanded && "Payment"} {order.paymentStatus}
      </TagLabel>
    </Tag>
  );
};

export default OrderPaymentStatusTag;
