import { Button, VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";

const ShippingPolicyPage = () => {
  return (
    <VStack align="start" gap={8} px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={0}>
        <RText text="Shipping and Delivery" weight="bold" color="primary.700" />
        <RText text="Last updated on May 19, 2024" small color="primary.700" />
      </VStack>
      <RText text="For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 8-14 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. JANANI ARUMUGAM is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 8-14 days rom the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration." />

      <Button
        py={2}
        height="fit-content"
        maxW="100%"
        flexWrap="wrap"
        size="sm"
        variant="secondary"
        alignSelf="center"
        fontWeight="normal"
        whiteSpace="wrap"
        wordBreak="break-word"
      >
        For any issues in utilizing our services, you may contact our helpdesk
        on,
        <span
          style={{
            fontWeight: "bold",
            padding: "0px 0px 0px 4px",
          }}
        >
          6379785755
        </span>
      </Button>
    </VStack>
  );
};

export default ShippingPolicyPage;
