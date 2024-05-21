import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import { VerifyOrder } from "../../entities/order";
import { SuccessResponse } from "../../entities/response";
import Toaster from "../../functions/toaster";
import APIClient from "../../services/api-client";
import { _verifyOrder } from "../../services/endpoints";

const verifyCheckout = new APIClient<VerifyOrder>(_verifyOrder);
const useVerifyCheckout = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: verifyCheckout.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export default useVerifyCheckout;
