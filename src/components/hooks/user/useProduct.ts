import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  CACHE_KEY_ALLPRODUCTS,
  CACHE_KEY_SINGLEPRODUCT,
} from "../../constants/cache_keys";
import { PaginatedResponse } from "../../entities/paginatedResponse";
import Product, { ProductResponse } from "../../entities/product";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import {
  _allUserProducts,
  _singleUserProducts,
} from "../../services/endpoints";
import useProductQueryStore from "../../store/user/productQueryStore";

const getProducts = new APIClient<PaginatedResponse<Product>>(_allUserProducts);
const getSingleProduct = new APIClient<ProductResponse>(_singleUserProducts);

const useGetAllProducts = () => {
  const category = useProductQueryStore((s) => s.category);
  return useInfiniteQuery<
    SinglePropertyResponse<PaginatedResponse<Product>>,
    Error
  >({
    queryKey: [...CACHE_KEY_ALLPRODUCTS, category],
    queryFn: ({ pageParam = 1 }) =>
      getProducts.getSingleItem({
        params: {
          page: pageParam,
          itemPerPage: 10,
          categoryId: category?._id,
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
    queryKey: [...CACHE_KEY_SINGLEPRODUCT, productId],
    queryFn: () =>
      getSingleProduct
        .getSingleItem({ params: { productId: productId } })
        .then((res) => res.data),
    enabled: enabled,
  });

export { useGetAllProducts, useGetSingleProduct };
