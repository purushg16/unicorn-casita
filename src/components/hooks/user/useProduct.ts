import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  CACHE_KEY_ALLPRODUCTS,
  CACHE_KEY_SINGLEPRODUCT,
} from "../../constants/cache_keys";
import { PaginatedResponse } from "../../entities/paginatedResponse";
import Product from "../../entities/product";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import {
  _allUserProducts,
  _singleUserProducts,
} from "../../services/endpoints";

const getProducts = new APIClient<PaginatedResponse<Product>>(_allUserProducts);
const getSingleProduct = new APIClient<Product>(_singleUserProducts);

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

export { useGetAllProducts, useGetSingleProduct };
