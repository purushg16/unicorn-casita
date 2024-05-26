import { Button, Divider, Icon, VStack, useClipboard } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import { Order } from "../../../entities/order";
import OrderShippingStatusTag from "../order/OrderShippingStatusTag";
import { Mail, Phone } from "lucide-react";

const CustomerDetailsHug = ({ order }: { order: Order }) => {
  const { onCopy: onContactCopy } = useClipboard(order.contact.toString());
  const { onCopy: onEmailcopy } = useClipboard(order.email);

  return (
    <VStack
      w={{ base: "100%", md: 350 }}
      align="start"
      borderRadius="xl"
      boxShadow="xs"
      p={4}
      h="max-content"
    >
      <VStack align="start" w="100%">
        <RText small text={order.customerName + " (customer) "} weight="bold" />
        <OrderShippingStatusTag order={order} />
        <RText text={order.address} small />
        <RText text={order.district + " - " + order.pincode} small />
        <Divider my={4} />
        <RText weight="bold" text="Contact" small />
        <VStack align="start" mt={2} gap={4}>
          <Button
            size={{ base: "xs", md: "sm" }}
            borderRadius="full"
            leftIcon={<Icon as={Phone} />}
            onClick={onContactCopy}
          >
            {order.contact.toString()}
          </Button>
          <Button
            size={{ base: "xs", md: "sm" }}
            borderRadius="full"
            leftIcon={<Icon as={Mail} />}
            onClick={onEmailcopy}
          >
            {order.email}
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default CustomerDetailsHug;
