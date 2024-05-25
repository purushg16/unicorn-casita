import { Button, HStack, useToast } from "@chakra-ui/react";
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
}: {
  productId: string;
  imageLink: string;
  attribute: ProductAttribute | undefined;
  count: number;
  price: number;
  isAttribute: boolean;
  productName: string;
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
    <HStack>
      <Button
        variant="primary"
        isDisabled={(isAttribute && !attribute) || count <= 0}
        onClick={handleAdd}
      >
        {product ? "Go to Cart" : "Add to Cart"}
      </Button>
    </HStack>
  );
};

export default AddtoCartButton;
