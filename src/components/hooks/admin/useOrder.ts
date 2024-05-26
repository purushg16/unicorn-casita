import { useInfiniteQuery, useQuery, useMutation } from "@tanstack/react-query";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";
import { PaginatedResponse } from "../../entities/paginatedResponse";
import {
  CACHE_KEY_ALLORDERS,
  CACHE_KEY_SINGLEORDER,
} from "../../constants/cache_keys";
import { ErrorResponse } from "react-router-dom";
import { SuccessResponse } from "../../entities/response";
import { Order } from "../../entities/order";
import {
  _allOrders,
  _confirmOrder,
  _shipOrder,
  _singleOrders,
} from "../../services/endpoints";

interface AdminConfirmOrder {
  mongooseOrderId: string;
}
export interface AdminShipOrder extends AdminConfirmOrder {
  shippingProvider: string;
  trackingNumber: string;
}

const adminConfirmOrder = new APIClient<AdminConfirmOrder>(_confirmOrder);
const useAdminConfirmOrder = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: adminConfirmOrder.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const adminShipOrder = new APIClient<AdminShipOrder>(_shipOrder);
const useAdminShipOrder = (callback: () => void) => {
  const toast = useToast();
  return useMutation({
    mutationFn: adminShipOrder.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      callback();
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const adminGetAllOrders = new APIClient<PaginatedResponse<Order>>(_allOrders);
const useAdminGetAllOrders = () => {
  return useInfiniteQuery<
    SinglePropertyResponse<PaginatedResponse<Order>>,
    Error
  >({
    queryKey: CACHE_KEY_ALLORDERS,
    queryFn: ({ pageParam = 1 }) =>
      adminGetAllOrders.getSingleItem({
        params: {
          page: pageParam,
          itemPerPage: 10,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNextPage ? lastPage.data.nextPage : undefined,
    refetchOnWindowFocus: false,
  });
};

const adminSingleOrder = new APIClient<Order>(_singleOrders);
const useAdminGetSingleOrder = (mongooseOrderId: string, enabled: boolean) => {
  return useQuery({
    queryKey: [...CACHE_KEY_SINGLEORDER, mongooseOrderId],
    queryFn: () =>
      adminSingleOrder
        .getSingleItem({
          params: {
            mongooseOrderId: mongooseOrderId,
          },
        })
        .then((res) => res.data),
    retry: 3,
    enabled: enabled,
    refetchOnWindowFocus: false,
  });
};

export {
  useAdminConfirmOrder,
  useAdminShipOrder,
  useAdminGetAllOrders,
  useAdminGetSingleOrder,
};
