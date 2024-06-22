import { Button, useToast } from "@chakra-ui/react";
import useUserCartStore from "../../../store/user/useCartStore";
import Toaster from "../../../functions/toaster";
import { useNavigate } from "react-router-dom";
import { ProductAttribute } from "../../../entities/product";

const AddtoCartButton = ({
  productId,
  attribute,
  count,
  price,
  productName,
  imageLink,
  isAttribute,
  soldOut,
}: {
  productId: string;
  imageLink: string;
  attribute: ProductAttribute | undefined;
  count: number;
  price: number;
  isAttribute: boolean;
  productName: string;
  soldOut: boolean;
}) => {
  const product = useUserCartStore((s) => s.products).find((p) =>
    isAttribute
      ? p.productId === productId && p.attrValueId === attribute?._id
      : p.productId === productId
  );

  const addtoCart = useUserCartStore((s) => s.addProduct);
  const toast = useToast();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (
      (isAttribute && product?.attrValueId !== attribute?._id) ||
      product?.productId !== productId
    ) {
      addtoCart(productId, attribute!, count, price, productName, imageLink);
      toast(Toaster("success", "Added to Cart"));
    } else navigate("/cart");
  };

  return (
    <Button
      w="100%"
      variant="black"
      isDisabled={
        soldOut ||
        (isAttribute && !attribute) ||
        count <= 0 ||
        Number.isNaN(count)
      }
      onClick={handleAdd}
    >
      {product ? "Go to Cart" : soldOut ? "Sold Out" : "Add to Cart"}
    </Button>
  );
};

export default AddtoCartButton;
