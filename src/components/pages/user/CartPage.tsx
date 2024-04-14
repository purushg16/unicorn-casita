import { Box, Button, Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import { Trash2 } from "lucide-react";
import TotalSection from "../../library/user/Cart/TotalSection";
import CartTable from "../../library/user/Cart/CartTable";

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
          <Button
            variant="text"
            colorScheme="red"
            color="red.400"
            leftIcon={<Icon as={Trash2} />}
            size={{ base: "sm", md: "md" }}
          >
            Clear
          </Button>
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
