import {
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Minus, Plus, Trash2 } from "lucide-react";
import useUserCartStore from "../../../store/user/useCartStore";

const CartQuantityController = ({
  md = false,
  productId,
  attribute,
}: {
  md?: boolean;
  productId: string;
  attribute: string;
}) => {
  const product = useUserCartStore((s) => s.products).find(
    (product) =>
      product.productId === productId && product.attrValue === attribute
  )!;
  const updateQuantity = useUserCartStore((s) => s.updateQuanitity);
  const remove = useUserCartStore((s) => s.removeProduct);

  return (
    <VStack my={md ? 4 : 0}>
      <ButtonGroup variant="outline" isAttached>
        <IconButton
          isDisabled={product.quantity <= 1}
          onClick={() =>
            updateQuantity(productId, product.quantity - 1, product.attrValue)
          }
          icon={<Icon as={Minus} />}
          aria-label="minus"
          size={{ base: "sm", md: "md" }}
        />
        <Input
          size={{ base: "sm", md: "md" }}
          min={0}
          maxH="100%"
          w={50}
          type="number"
          borderRadius={0}
          borderRight="none"
          _hover={{
            outline: "none",
            borderColor: "primary.300",
            boxShadow: "none",
          }}
          _active={{
            outline: "none",
            borderColor: "primary.300",

            boxShadow: "none",
          }}
          _focus={{
            outline: "none",
            borderColor: "primary.300",
            boxShadow: "none",
          }}
          value={product?.quantity}
          onChange={(e) =>
            updateQuantity(
              productId,
              parseInt(e.target.value) > 0 ||
                Number.isNaN(parseInt(e.target.value))
                ? parseInt(e.target.value || "")
                : 1,
              product.attrValue
            )
          }
        />
        <IconButton
          onClick={() =>
            updateQuantity(productId, product.quantity + 1, product.attrValue)
          }
          icon={<Icon as={Plus} />}
          aria-label="minus"
          size={{ base: "sm", md: "md" }}
        />
      </ButtonGroup>
      <Button
        variant="text"
        colorScheme="red"
        size="xs"
        fontWeight="normal"
        leftIcon={<Icon as={Trash2} />}
        onClick={() => remove(product.productId, product.attrValue)}
      >
        Remove
      </Button>
    </VStack>
  );
};

export default CartQuantityController;
