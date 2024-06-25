import { Icon, Box } from "@chakra-ui/react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import useUserCartStore from "../../../store/user/useCartStore";

const CartButton = () => {
  const quantity = useUserCartStore((s) => s.products).length;

  return (
    <Link to="/cart" style={{ position: "relative", lineHeight: 0 }}>
      <Icon
        cursor="pointer"
        as={ShoppingBag}
        boxSize={5}
        strokeWidth={2}
        color="black"
      />
      {quantity > 0 && (
        <Box
          id="cart-notification"
          w={3}
          h={3}
          bg="green.400"
          pos="absolute"
          top={-1}
          right={-1}
          borderRadius="full"
        />
      )}
    </Link>
  );
};

export default CartButton;
