import { HStack } from "@chakra-ui/react";
import { Blocks, Eclipse, ShoppingBag, Smile } from "lucide-react";
import AppBarAddMenu from "./AppBarAddMenu";
import AppBarBtn from "./AppBarBtn";

const AppBar = () => {
  return (
    <HStack
      pos="fixed"
      left="50%"
      right="50%"
      transform="translate(-50%, -50%)"
      bottom={-2}
      px={4}
      py={2}
      gap={4}
      bg="primary.200"
      w="max-content"
      mx="auto"
      borderRadius={20}
    >
      <AppBarBtn icon={Eclipse} route="products" />
      <AppBarBtn icon={Blocks} route="categories" />
      <AppBarAddMenu />
      <AppBarBtn icon={ShoppingBag} route="orders" />
      <AppBarBtn icon={Smile} route="reviews" />
    </HStack>
  );
};

export default AppBar;
