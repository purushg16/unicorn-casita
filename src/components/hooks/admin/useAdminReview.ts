import { QueryClient, useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { useToast } from "@chakra-ui/react";
import Toaster from "../../functions/toaster";
import { DelReview, Review } from "../../entities/review";
import {
  _addReview,
  _deleteReview,
  _editReview,
} from "../../services/endpoints";
import { ErrorResponse, SuccessResponse } from "../../entities/response";
import { CACHE_KEY_REVIEW } from "../../constants/cache_keys";

const addReview = new APIClient<Review>(_addReview);
const editReview = new APIClient<Partial<Review>>(_editReview);
const deleteReview = new APIClient<DelReview>(_deleteReview);

const useAddReview = (callback: () => void) => {
  const toast = useToast();
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: addReview.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      callback();
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_REVIEW });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useEditReview = () => {
  const toast = useToast();
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: editReview.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));

      queryClient.invalidateQueries({ queryKey: CACHE_KEY_REVIEW });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useDeleteReview = (callback: () => void) => {
  const toast = useToast();
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: deleteReview.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      callback();
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_REVIEW });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

export { useAddReview, useEditReview, useDeleteReview };
