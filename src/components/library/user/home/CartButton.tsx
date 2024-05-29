import { Button, Icon, Badge } from "@chakra-ui/react";
import { ShoppingBasket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useUserCartStore from "../../../store/user/useCartStore";

const CartButton = () => {
  const navigate = useNavigate();
  const quantity = useUserCartStore((s) => s.products).length;

  return (
    <Link to="/cart">
      <Button
        size={{ base: "sm", md: "md" }}
        pos="relative"
        variant="secondary"
        rightIcon={
          <Icon
            cursor="pointer"
            strokeWidth={1}
            as={ShoppingBasket}
            onClick={() => navigate("/cart")}
          />
        }
      >
        {quantity > 0 && (
          <Badge
            pos="absolute"
            colorScheme="green"
            right={-2}
            top={-2}
            p={1}
            px={2}
            borderRadius="xl"
          >
            {quantity}
          </Badge>
        )}
        Cart
      </Button>
    </Link>
  );
};

export default CartButton;