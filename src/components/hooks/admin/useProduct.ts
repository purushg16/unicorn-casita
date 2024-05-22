import { useToast } from "@chakra-ui/react";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import Product from "../../entities/product";
import { DeleteProduct } from "../../entities/serviceProduct";
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
import { SuccessResponse, ErrorResponse } from "../../entities/response";

const addProduct = new APIClient<Product>(_addProduct);
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
          itemPerPage: 10,
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
        .getSingleItem({ params: { productId: productId } })
        .then((res) => res.data),
    enabled: enabled,
  });

const useAddProduct = (
  successCallback: () => void,
  failureCallback: () => void
) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct.postRequest,
    onSuccess: (data: SuccessResponse) => {
      successCallback();
      toast(Toaster("success", data.data.message));
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLPRODUCTS });
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_SINGLEPRODUCT });
    },
    onError: (error: ErrorResponse) => {
      failureCallback();
      toast(Toaster("error", error.response?.data.error));
    },
  });
};

const useEditProduct = () => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProduct.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));

      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLPRODUCTS });
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_SINGLEPRODUCT });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

const useDeleteProduct = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: delProduct.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      callback();

      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLPRODUCTS });
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_SINGLEPRODUCT });
    },
    onError: (error: ErrorResponse) =>
      toast(Toaster("error", error.response?.data.error)),
  });
};

export {
  useAddProduct,
  useDeleteProduct,
  useEditProduct,
  useGetAllProducts,
  useGetSingleProduct,
};
