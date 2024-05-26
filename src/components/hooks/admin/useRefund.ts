import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import {
  CACHE_KEY_ALLORDERS,
  CACHE_KEY_SINGLEORDER,
} from "../../constants/cache_keys";
import { InitiateRefund } from "../../entities/refund";
import { SuccessResponse } from "../../entities/response";
import Toaster from "../../functions/toaster";
import APIClient from "../../services/api-client";
import { _intitateRefund } from "../../services/endpoints";

const initiateRefund = new APIClient<InitiateRefund>(_intitateRefund);

const useInitiateRefund = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: initiateRefund.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      callback();
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLORDERS });
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_SINGLEORDER });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export { useInitiateRefund };
