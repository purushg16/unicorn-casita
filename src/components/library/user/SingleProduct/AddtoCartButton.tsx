import { Button, HStack, useToast } from "@chakra-ui/react";
import useUserCartStore from "../../../store/user/useCartStore";
import Toaster from "../../../functions/toaster";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleAdd = () => {
    if (product?.attrValue !== attribute) {
      addtoCart(productId, attribute, count, price, productName, imageLink);
      toast(Toaster("success", "Added to Cart"));
    } else navigate("/cart");
  };

  return (
    <HStack>
      <Button
        variant="primary"
        isDisabled={!attribute || count <= 0}
        onClick={handleAdd}
      >
        {product ? "Go to Cart" : "Add to Cart"}
      </Button>
    </HStack>
  );
};

export default AddtoCartButton;
