import { useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";
import { ErrorResponse } from "react-router-dom";
import { SuccessResponse } from "../../entities/response";
import { InitiateRefund, RejectRefund } from "../../entities/refund";
import { _intitateRefund, _rejectRefund } from "../../services/endpoints";

const initiateRefund = new APIClient<InitiateRefund>(_intitateRefund);
const rejectRefund = new APIClient<RejectRefund>(_rejectRefund);

const useInitiateRefund = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: initiateRefund.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const useRejectRefund = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: rejectRefund.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export { useInitiateRefund, useRejectRefund };
