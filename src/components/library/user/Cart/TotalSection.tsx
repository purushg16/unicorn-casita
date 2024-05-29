import { Divider, HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../Utilities/Typography";
import useUserCartStore from "../../../store/user/useCartStore";
import CheckoutModal from "./CheckoutModal";

const TotalSection = () => {
  const products = useUserCartStore((s) => s.products);

  const total = products.reduce(
    (acc, product) => product.price * product.quantity + acc,
    0
  );

  return (
    <VStack
      w="100%"
      align="start"
      borderRadius={10}
      p={4}
      gap={4}
      border="1px solid"
      borderColor="gray.100"
    >
      <HStack w="100%" justify="space-between">
        <Label text="Subtotal" color="gray" />
        <Label
          weight="bolder"
          text={Number.isNaN(total) ? "0.00" : total.toFixed(2)}
        />
      </HStack>
      <HStack w="100%" justify="space-between">
        <Label text="Discount" color="gray" />
        <Label weight="bolder" color="primary.400" text="- 0.00" />
      </HStack>
      <Divider variant="dashed" />
      <HStack w="100%" justify="space-between">
        <Label text="Grand Total" weight="bolder" />
        <Label
          weight="bolder"
          text={Number.isNaN(total) ? "0.00" : total.toFixed(2)}
        />
      </HStack>
      <CheckoutModal />
    </VStack>
  );
};

export default TotalSection;
