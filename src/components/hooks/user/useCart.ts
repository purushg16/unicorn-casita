import { useToast } from "@chakra-ui/react";
import APIClient from "../../services/api-client";
import { useMutation } from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import { ErrorResponse } from "react-router-dom";
import { SuccessResponse } from "../../entities/response";
import { _cartCheckout } from "../../services/endpoints";
import { CartCheckout } from "../../entities/cart";

const cartCheckout = new APIClient<CartCheckout>(_cartCheckout);
const useCartCheckout = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: cartCheckout.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.msg)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export default useCartCheckout;
