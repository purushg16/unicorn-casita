import { VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";

const CancellationPage = () => {
  return (
    <VStack my={8} gap={8} align="start" px={{ base: 4, md: 8, lg: 16 }}>
      <VStack align="start" gap={0}>
        <RText
          text="Cancellation & Refund Policy"
          weight="bold"
          color="primary.700"
        />
        <RText text="Last updated on May 19, 2024" small color="primary.700" />
      </VStack>
      <RText text="Unicorn Casita believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:" />
      <RText text="Cancellations will be considered only if the request is made within same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them." />
      <RText text="Unicorn Casita does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good." />
      <RText text="In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within same day of receipt of the products." />
      <RText text="In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision." />
      <RText text="In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them." />
      <RText text="In case of any Refunds approved by the Unicorn Casita, it’ll take 1-2 days for the refund to be processed to the end customer." />
    </VStack>
  );
};

export default CancellationPage;
