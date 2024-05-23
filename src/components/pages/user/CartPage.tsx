import { Box, Button, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import CartTable from "../../library/user/Cart/CartTable";
import ClearCartButton from "../../library/user/Cart/ClearCartButton";
import TotalSection from "../../library/user/Cart/TotalSection";
import useUserCartStore from "../../store/user/useCartStore";
import img from "../../../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const CartPage = () => {
  const products = useUserCartStore((s) => s.products);

  if (products.length === 0)
    return (
      <VStack gap={2}>
        <Image src={img} alt="" mx="auto" w="30%" mb={8} />
        <RHeading text="Your Cart is Emprty" color="primary.800" small />
        <Link to="/collections">
          <Button variant="secondary" size={{ base: "sm", md: "md" }}>
            Let's add something!
          </Button>
        </Link>
      </VStack>
    );
  return (
    <Flex
      w="100%"
      flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
      gap={8}
    >
      {products.length > 0 && (
        <>
          <VStack gap={8} align="start" flex={1}>
            <HStack justify="space-between" w="100%">
              <RHeading small text="Cart" />
              <ClearCartButton />
            </HStack>
            <CartTable products={products} />
          </VStack>
          <Box w={{ base: "100%", md: "100%", lg: 350 }} minW={300}>
            <TotalSection />
          </Box>
        </>
      )}
    </Flex>
  );
};

export default CartPage;
