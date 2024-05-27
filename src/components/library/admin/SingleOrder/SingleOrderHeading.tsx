import { Box, HStack, Show, VStack } from "@chakra-ui/react";
import { Label, RHeading } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";
import dateConverter from "../../../functions/dateConverter";
import AssignShippingPartnerModal from "./AssignShippingPartnerModal";
import CancelledOrderTag from "./CancelledOrderTag";
import SuccessOrderTag from "./SuccessOrderTag";
import PendingOrderTag from "./PendingOrderTag";
import ConfirmedOrderTag from "./ConfirmedOrderTag";

const SingleOrderHeading = ({ order }: { order: Order }) => {
  return (
    <VStack align="start" w="100%" gap={2}>
      <HStack gap={2} flexWrap="wrap">
        <Box minW="max-content">
          <RHeading color="primary.700" text={"Order ID: " + order.orderId} />
        </Box>
        {order.orderStatus === "pending" && <PendingOrderTag />}
        {order.orderStatus === "cancelled" && <CancelledOrderTag />}
        {order.orderStatus === "confirmed" && <ConfirmedOrderTag />}
        {order.orderStatus === "completed" && <SuccessOrderTag />}
      </HStack>
      <HStack gap={2} flexWrap="wrap">
        <Box minW="max-content">
          <Label
            text={`${dateConverter(order.createdAt!)}`}
            color="primary.700"
          />
        </Box>
        {order.orderStatus !== "cancelled" && (
          <>
            <Show above="md">
              <Label text="|" color="primary.700" />
            </Show>
            <AssignShippingPartnerModal order={order} />
          </>
        )}
      </HStack>
    </VStack>
  );
};

export default SingleOrderHeading;
