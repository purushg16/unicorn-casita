import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import PaymentQueryButton from "./PaymentQueryButton";
import useOrderQueryStore from "../../../store/admin/orderQueryStore";

const PaymentQueryMenu = () => {
  const paymentStatus = useOrderQueryStore((s) => s.paymentStatus);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDown />}
        size="sm"
        colorScheme="primary"
        textTransform="capitalize"
      >
        {paymentStatus
          ? paymentStatus === "partially-refunded"
            ? "Partially Refunded"
            : paymentStatus
          : "Select"}
      </MenuButton>
      <MenuList borderRadius={0}>
        <MenuItem p={0}>
          <PaymentQueryButton label="Success" status="success" />
        </MenuItem>
        <MenuItem p={0}>
          <PaymentQueryButton label="Failed" status="failed" />
        </MenuItem>
        <MenuItem p={0}>
          <PaymentQueryButton label="Pending" status="pending" />
        </MenuItem>
        <MenuItem p={0}>
          <PaymentQueryButton label="Refunded" status="refunded" />
        </MenuItem>
        <MenuItem p={0}>
          <PaymentQueryButton
            label="Partially Refunded"
            status="partially-refunded"
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PaymentQueryMenu;
