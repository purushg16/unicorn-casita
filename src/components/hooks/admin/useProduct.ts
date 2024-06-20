import { useToast } from "@chakra-ui/react";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Toaster from "../../functions/toaster";
import Product, { ProductResponse } from "../../entities/product";
import { DeleteProduct } from "../../entities/serviceProduct";
import { EditProduct } from "../../entities/editProduct";
import { PaginatedResponse } from "../../entities/paginatedResponse";
import {
  _addProduct,
  _allProducts,
  _deleteProduct,
  _editProduct,
  _searchAdminProducts,
  _singleProduct,
} from "../../services/endpoints";
import {
  CACHE_KEY_ALLPRODUCTS,
  CACHE_KEY_SEARCHPRODUCT,
  CACHE_KEY_SINGLEPRODUCT,
} from "../../constants/cache_keys";
import { SuccessResponse, ErrorResponse } from "../../entities/response";
import useProductEntryStore from "../../store/admin/productEntryStore";

const addProduct = new APIClient<Product>(_addProduct);
const editProduct = new APIClient<EditProduct>(_editProduct);
const delProduct = new APIClient<DeleteProduct>(_deleteProduct);
const getSingleProduct = new APIClient<ProductResponse>(_singleProduct);
const getProducts = new APIClient<PaginatedResponse<Product>>(_allProducts);
const getSearchProduct = new APIClient<Product>(_searchAdminProducts);

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
  });
};

const useGetSingleProduct = (productId: string, enabled: boolean) => {
  const appendProductEntry = useProductEntryStore((s) => s.appendNewEntry);

  return useQuery({
    queryKey: CACHE_KEY_SINGLEPRODUCT,
    queryFn: () =>
      getSingleProduct
        .getSingleItem({ params: { productId: productId } })
        .then((res) => {
          appendProductEntry(res.data);
          return res.data;
        }),
    enabled: enabled,
    refetchOnWindowFocus: false,
  });
};
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

const useEditProduct = (callback: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const resetEntry = useProductEntryStore((s) => s.resetEntry);

  return useMutation({
    mutationFn: editProduct.postRequest,
    onSuccess: (data: SuccessResponse) => {
      toast(Toaster("success", data.data.message));
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_ALLPRODUCTS });
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_SINGLEPRODUCT });
      callback();
      resetEntry();
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

const useAmdinSearchProduct = (q?: string) =>
  useQuery({
    queryKey: [...CACHE_KEY_SEARCHPRODUCT, q],
    queryFn: () =>
      getSearchProduct.getRequest({ params: { q: q } }).then((r) => r.data),
    enabled: !!q,
  });

export {
  useAddProduct,
  useDeleteProduct,
  useEditProduct,
  useGetAllProducts,
  useGetSingleProduct,
  useAmdinSearchProduct,
};
