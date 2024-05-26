import { HStack, VStack } from "@chakra-ui/react";
import { Label, RHeading } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";
import dateConverter from "../../../functions/dateConverter";
import AssignShippingPartnerModal from "./AssignShippingPartnerModal";
import CancelledOrderTag from "./CancelledOrderTag";
import SuccessOrderTag from "./SuccessOrderTag";

const SingleOrderHeading = ({ order }: { order: Order }) => {
  return (
    <VStack align="start" w="100%" gap={4}>
      <HStack gap={4}>
        <RHeading
          small
          color="primary.700"
          text={"Order ID: " + order.orderId}
        />
        {order.orderStatus === "cancelled" && <CancelledOrderTag />}
        {order.orderStatus === "completed" && <SuccessOrderTag />}
      </HStack>
      <HStack gap={2}>
        <Label
          text={`${dateConverter(order.createdAt!)}`}
          color="primary.700"
        />
        <Label text="|" color="primary.700" />
        <AssignShippingPartnerModal order={order} />
      </HStack>
    </VStack>
  );
};

export default SingleOrderHeading;
