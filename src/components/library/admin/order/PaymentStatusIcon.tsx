import { Icon } from "@chakra-ui/react";
import { Check, X, ScanLine, Undo, Undo2 } from "lucide-react";
import { Order } from "../../../entities/order";

const PaymentStatusIcon = ({
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
      boxSize={big ? 6 : 8}
      color={color}
      as={
        order.paymentStatus === "success"
          ? Check
          : order.paymentStatus === "failed"
          ? X
          : order.paymentStatus === "created"
          ? ScanLine
          : order.paymentStatus === "refunded"
          ? Undo
          : Undo2
      }
    />
  );
};

export default PaymentStatusIcon;
