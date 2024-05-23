import { Button, HStack, useToast } from "@chakra-ui/react";
import useUserCartStore from "../../../store/user/useCartStore";
import Toaster from "../../../functions/toaster";

const AddtoCartButton = ({
  productId,
  attribute,
  count,
  price,
  productName,
  imageLink,
}: {
  productId: string;
  imageLink: string;
  attribute: string;
  count: number;
  price: number;
  productName: string;
}) => {
  const product = useUserCartStore((s) => s.products).find(
    (p) => p.productId === productId && p.attrValue === attribute
  );
  const addtoCart = useUserCartStore((s) => s.addProduct);
  const toast = useToast();

  const handleAdd = () => {
    addtoCart(productId, attribute, count, price, productName, imageLink);
    toast(Toaster("success", "Added to Cart"));
  };

  return (
    <HStack>
      <Button
        variant="primary"
        isDisabled={
          !attribute || count <= 0 || product?.attrValue === attribute
        }
        onClick={handleAdd}
      >
        {product ? "Added to Cart" : "Add to Cart"}
      </Button>
    </HStack>
  );
};

export default AddtoCartButton;
