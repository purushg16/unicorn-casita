import { useToast } from "@chakra-ui/react";
import APIClient from "../../services/api-client";
import { useMutation } from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import { ErrorResponse } from "react-router-dom";
import { _cartCheckout } from "../../services/endpoints";
import { CartCheckout } from "../../entities/cart";
import { AxiosResponse } from "axios";
import raporpayVerifyOrder from "./useRazorpay";
import useVerifyCheckout from "./useVerifyOrder";
import usePaymentStore from "../../store/user/paymentStateStore";
import { VerifyOrder } from "../../entities/order";

interface OrderResponse {
  amount: number;
  message: string;
  orderId: string;
}

const cartCheckout = new APIClient<CartCheckout>(_cartCheckout);
const useCartCheckout = () => {
  const toast = useToast();
  const { mutate } = useVerifyCheckout();
  const setIsVerifying = usePaymentStore((s) => s.setIsVerifying);

  return useMutation({
    mutationFn: cartCheckout.postRequest,
    onSuccess: (data: AxiosResponse<OrderResponse>) => {
      setIsVerifying(true);
      const verifyOrder = raporpayVerifyOrder(
        data.data.amount,
        data.data.orderId
      );

      toast.promise<VerifyOrder>(verifyOrder, {
        success: {
          title: "Order Placed",
          description: "Purchase has been successfully completed",
          position: "top",
        },
        error: {
          title: "Something went wrong",
          description: "Please Try again Later",
          position: "top",
        },
        loading: {
          title: "Please Wait...",
          description: "Do not change tab or go back!",
          position: "top",
        },
      });

      verifyOrder.then((res) => {
        mutate(res);
      });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export default useCartCheckout;
