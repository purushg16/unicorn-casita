import { useToast } from "@chakra-ui/react";
import APIClient from "../../services/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import Category, { DeleteCategory } from "../../entities/category";
import useImageStore from "../../store/admin/imageStore";
import {
  _addCategory,
  _allCategories,
  _deleteCategory,
} from "../../services/endpoints";
import { CACHE_KEY_ALLCATEGORIES } from "../../constants/cache_keys";
import { ErrorResponse } from "react-router-dom";
import { SuccessResponse } from "../../entities/response";
// import useAddCategoryStore from "../../store/admin/addCategoryStore";

const addCategory = new APIClient<Category>(_addCategory);
const delCategory = new APIClient<DeleteCategory>(_deleteCategory);
const getCategories = new APIClient<Category>(_allCategories);

const useGetAllCategories = () => {
  return useQuery({
    queryKey: CACHE_KEY_ALLCATEGORIES,
    queryFn: () => getCategories.getRequest().then((res) => res.data),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useAddCategory = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  // const setName = useAddCategoryStore((s) => s.setName);
  // const setPId = useAddCategoryStore((s) => s.setPId);
  const clearImages = useImageStore((s) => s.clearImages);

  return useMutation({
    mutationFn: addCategory.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLCATEGORIES });

      // setName("");
      // setPId("");
      clearImages();
      callback();
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const useDeleteCategory = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: delCategory.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export { useAddCategory, useDeleteCategory, useGetAllCategories };
