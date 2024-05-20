import { useMutation } from "@tanstack/react-query";
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

const addReview = new APIClient<Review>(_addReview);
const editReview = new APIClient<Partial<Review>>(_editReview);
const deleteReview = new APIClient<DelReview>(_deleteReview);

const useAddReview = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: addReview.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useEditReview = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: editReview.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useDeleteReview = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: deleteReview.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

export { useAddReview, useEditReview, useDeleteReview };
