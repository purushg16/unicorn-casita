import { Button } from "@chakra-ui/react";
import useUserCartStore from "../../../store/user/useCartStore";
import useCartCheckout from "../../../hooks/user/useCart";
import usePaymentStore from "../../../store/user/paymentStateStore";

const CheckoutButton = () => {
  const { mutate, isPending } = useCartCheckout();
  const isVerifying = usePaymentStore((s) => s.isVerifying);

  const products = useUserCartStore((s) => s.products);
  const customerName = useUserCartStore((s) => s.customerName);
  const address = useUserCartStore((s) => s.address);
  const district = useUserCartStore((s) => s.district);
  const state = useUserCartStore((s) => s.state);
  const pincode = useUserCartStore((s) => s.pincode);
  const contact = useUserCartStore((s) => s.contact);
  const email = useUserCartStore((s) => s.email);
  const isDisabled = () => {
    if (
      !customerName ||
      !address ||
      !district ||
      !state ||
      !pincode ||
      !contact ||
      !email
    )
      return true;
    return false;
  };

  const handleSubmit = () => {
    mutate({
      address,
      contact,
      district,
      pincode,
      state,
      products: products.map((pro) => {
        return {
          productId: pro.productId,
          quantity: pro.quantity,
          attrValue: pro.attrValue,
        };
      }),
    });
  };

  return (
    <Button
      variant="primary"
      isDisabled={isDisabled()}
      onClick={handleSubmit}
      isLoading={isPending || isVerifying}
    >
      Proceed to Payment
    </Button>
  );
};

export default CheckoutButton;
