import { useToast } from "@chakra-ui/react";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import { useQuery, useInfiniteQuery, useMutation } from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import Product from "../../entities/product";
import { AddProduct, DeleteProduct } from "../../entities/serviceProduct";
import { EditProduct } from "../../entities/editProduct";
import { PaginatedResponse } from "../../entities/paginatedResponse";
import {
  _addProduct,
  _allProducts,
  _deleteProduct,
  _editProduct,
  _singleProduct,
} from "../../services/endpoints";
import {
  CACHE_KEY_ALLPRODUCTS,
  CACHE_KEY_SINGLEPRODUCT,
} from "../../constants/cache_keys";
import { ErrorResponse } from "react-router-dom";
import { SuccessResponse } from "../../entities/response";

const addProduct = new APIClient<AddProduct>(_addProduct);
const editProduct = new APIClient<EditProduct>(_editProduct);
const delProduct = new APIClient<DeleteProduct>(_deleteProduct);
const getSingleProduct = new APIClient<Product>(_singleProduct);
const getProducts = new APIClient<PaginatedResponse<Product>>(_allProducts);

const useGetAllProducts = () => {
  return useInfiniteQuery<
    SinglePropertyResponse<PaginatedResponse<Product>>,
    Error
  >({
    queryKey: CACHE_KEY_ALLPRODUCTS,
    queryFn: ({ pageParam = 1 }) =>
      getProducts.getSingleItem({
        params: {
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNextPage ? lastPage.data.nextPage : undefined,
    refetchOnWindowFocus: false,
  });
};

const useGetSingleProduct = (productId: string, enabled: boolean) =>
  useQuery({
    queryKey: CACHE_KEY_SINGLEPRODUCT,
    queryFn: () =>
      getSingleProduct
        .getRequest({ params: { productId: productId } })
        .then((res) => res.data),
    enabled: enabled,
  });

const useAddProduct = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: addProduct.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const useEditProduct = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: editProduct.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

const useDeleteProduct = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: delProduct.postRequest,
    onSuccess: (data: SuccessResponse) =>
      toast(Toaster("success", data.data.message)),
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.data.error)),
  });
};

export {
  useAddProduct,
  useDeleteProduct,
  useEditProduct,
  useGetAllProducts,
  useGetSingleProduct,
};
