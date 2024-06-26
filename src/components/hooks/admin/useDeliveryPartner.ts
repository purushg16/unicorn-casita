import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import {
  _addDeliveryPartner,
  _allDeliveryPartners,
  _deleteDeliveryPartner,
} from "../../services/endpoints";
import { CACHE_KEY_ALL_PARTNERS } from "../../constants/cache_keys";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";
import { SuccessResponse } from "../../entities/response";
import { DeletePartner, DeliveryPartner } from "../../entities/deliveryPartner";

const getAll = new APIClient<DeliveryPartner>(_allDeliveryPartners);
const addPartner = new APIClient<DeliveryPartner>(_addDeliveryPartner);
const deletePartner = new APIClient<DeletePartner>(_deleteDeliveryPartner);

const useGetAllDeliveryParteners = (enabled: boolean) =>
  useQuery({
    queryKey: CACHE_KEY_ALL_PARTNERS,
    queryFn: () => getAll.getRequest().then((res) => res.data),
    retry: 3,
    enabled: enabled,
  });

const useAddDeliveryPartner = (callback: () => void) => {
  const toast = useToast();
  const querClient = useQueryClient();

  return useMutation({
    mutationFn: addPartner.postRequest,
    onSuccess: (data: SuccessResponse) => {
      callback();
      toast(Toaster("success", data.data.message));
      querClient.invalidateQueries({ queryKey: CACHE_KEY_ALL_PARTNERS });
    },
  });
};

const useDeleteDeliveryPartner = (callback: () => void) => {
  const toast = useToast();
  const querClient = useQueryClient();

  return useMutation({
    mutationFn: deletePartner.postRequest,
    onSuccess: (data: SuccessResponse) => {
      callback();
      toast(Toaster("success", data.data.message));
      querClient.invalidateQueries({ queryKey: CACHE_KEY_ALL_PARTNERS });
    },
  });
};

export {
  useGetAllDeliveryParteners,
  useAddDeliveryPartner,
  useDeleteDeliveryPartner,
};
