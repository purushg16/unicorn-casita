import { VStack } from "@chakra-ui/react";
import CaptionedDetails from "../../../Utilities/CaptionedDetails";
import { Order } from "../../../entities/order";

const DetailsStack = ({ order }: { order: Order }) => {
  return (
    <VStack align="start" gap={4}>
      <CaptionedDetails title="Name" value={order.customerName} />
      <CaptionedDetails title="Address" value={order.address} />
      <CaptionedDetails title="district" value={order.district} />
      <CaptionedDetails title="state" value={order.state} />
      <CaptionedDetails title="pincode" value={order.pincode} />
      <CaptionedDetails title="contact" value={order.contact.toString()} />
      <CaptionedDetails title="email" value={order.email} />
    </VStack>
  );
};

export default DetailsStack;
