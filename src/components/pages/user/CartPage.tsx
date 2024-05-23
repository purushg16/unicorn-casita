import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import CartTable from "../../library/user/Cart/CartTable";
import ClearCartButton from "../../library/user/Cart/ClearCartButton";
import TotalSection from "../../library/user/Cart/TotalSection";

const CartPage = () => {
  return (
    <Flex
      w="100%"
      flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
      gap={8}
    >
      <VStack gap={8} align="start" flex={1}>
        <HStack justify="space-between" w="100%">
          <RHeading small text="Cart" />
          <ClearCartButton />
        </HStack>
        <CartTable />
      </VStack>
      <Box w={{ base: "100%", md: "100%", lg: 350 }} minW={300}>
        <TotalSection />
      </Box>
    </Flex>
  );
};

export default CartPage;
