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
  _singleCategory,
} from "../../services/endpoints";
import {
  CACHE_KEY_ALLCATEGORIES,
  CACHE_KEY_SINGLECATEGORY,
} from "../../constants/cache_keys";
import { SuccessResponse, ErrorResponse } from "../../entities/response";
// import useAddCategoryStore from "../../store/admin/addCategoryStore";

const addCategory = new APIClient<Category>(_addCategory);
const delCategory = new APIClient<DeleteCategory>(_deleteCategory);
const getCategories = new APIClient<Category>(_allCategories);
const singleCategory = new APIClient<Category>(_singleCategory);

const useGetAllCategories = () => {
  return useQuery({
    queryKey: CACHE_KEY_ALLCATEGORIES,
    queryFn: () => getCategories.getRequest().then((res) => res.data),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const useGetSingleCategory = (
  categoryId: string | undefined,
  enabled: boolean
) =>
  useQuery({
    queryKey: CACHE_KEY_SINGLECATEGORY,
    queryFn: () =>
      singleCategory
        .getSingleItem({ params: { categoryId: categoryId } })
        .then((res) => res.data),
    retry: 2,
    enabled: enabled,
  });

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
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useDeleteCategory = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: delCategory.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLCATEGORIES });
      callback();
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

export {
  useAddCategory,
  useDeleteCategory,
  useGetAllCategories,
  useGetSingleCategory,
};
