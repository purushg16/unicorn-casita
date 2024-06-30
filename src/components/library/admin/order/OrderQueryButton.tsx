import { Button } from "@chakra-ui/react";
import useOrderQueryStore, {
  OrderStatus,
} from "../../../store/admin/orderQueryStore";

const OrderQueryButton = ({
  status,
  label,
}: {
  status: OrderStatus;
  label: string;
}) => {
  const orderStatus = useOrderQueryStore((s) => s.orderStatus);
  const setOrderStatus = useOrderQueryStore((s) => s.setOrderStatus);

  return (
    <Button
      minW="max-content"
      size="sm"
      variant={orderStatus === status ? "solid" : "ghost"}
      colorScheme="primary"
      onClick={() => setOrderStatus(status)}
    >
      {label}
    </Button>
  );
};

export default OrderQueryButton;
