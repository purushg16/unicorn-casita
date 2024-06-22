import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_OFFER } from "../../constants/cache_keys";
import APIClient from "../../services/api-client";
import { _addOffer, _getOffer } from "../../services/endpoints";
import { Offer } from "../../entities/Offer";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";
import { SuccessResponse, ErrorResponse } from "../../entities/response";

const getOffer = new APIClient<Offer>(_getOffer);
const postOffer = new APIClient<Offer>(_addOffer);

const useGetOffer = () =>
  useQuery({
    queryKey: CACHE_KEY_OFFER,
    queryFn: getOffer.getSingleItem,
  });

const usePostOffer = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postOffer.postRequest,
    onSuccess: (res: SuccessResponse) => {
      callback();
      toast(Toaster("success", res.data.message));
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_OFFER });
    },
    onError: (error: ErrorResponse) => {
      toast(Toaster("success", error.response?.data.error));
    },
  });
};

export { useGetOffer, usePostOffer };
