import { Button } from "@chakra-ui/react";
import useOrderQueryStore, {
  PaymentStatus,
} from "../../../store/admin/orderQueryStore";

const PaymentQueryButton = ({
  status,
  label,
}: {
  status: PaymentStatus;
  label: string;
}) => {
  const paymentStatus = useOrderQueryStore((s) => s.paymentStatus);
  const setPaymentStatus = useOrderQueryStore((s) => s.setPaymentStatus);

  return (
    <Button
      w="100%"
      size="sm"
      variant={paymentStatus === status ? "solid" : "ghost"}
      colorScheme={paymentStatus === status ? "primary" : "gray"}
      onClick={() => setPaymentStatus(status)}
    >
      {label}
    </Button>
  );
};

export default PaymentQueryButton;
