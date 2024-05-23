import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import { VerifyOrder } from "../../entities/order";
import { SuccessResponse } from "../../entities/response";
import Toaster from "../../functions/toaster";
import APIClient from "../../services/api-client";
import { _verifyOrder } from "../../services/endpoints";
import usePaymentStore from "../../store/user/paymentStateStore";

const verifyCheckout = new APIClient<VerifyOrder>(_verifyOrder);
const useVerifyCheckout = () => {
  const toast = useToast();

  const setIsVerifying = usePaymentStore((s) => s.setIsVerifying);
  const setIsVerified = usePaymentStore((s) => s.setIsVerified);

  return useMutation({
    mutationFn: verifyCheckout.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      setIsVerifying(false);
      setIsVerified(true);
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export default useVerifyCheckout;
