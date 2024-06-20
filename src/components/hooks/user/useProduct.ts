import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  CACHE_KEY_ALLPRODUCTS,
  CACHE_KEY_SEARCHPRODUCT,
  CACHE_KEY_SINGLEPRODUCT,
} from "../../constants/cache_keys";
import { PaginatedResponse } from "../../entities/paginatedResponse";
import Product, { ProductResponse } from "../../entities/product";
import APIClient, { SinglePropertyResponse } from "../../services/api-client";
import {
  _allUserProducts,
  _searchUserProducts,
  _singleUserProducts,
} from "../../services/endpoints";
import useProductQueryStore from "../../store/user/productQueryStore";

const getProducts = new APIClient<PaginatedResponse<Product>>(_allUserProducts);
const getSingleProduct = new APIClient<ProductResponse>(_singleUserProducts);
const getSearchProduct = new APIClient<Product>(_searchUserProducts);

const useGetAllProducts = (
  categoryId?: string,
  bestSeller?: boolean,
  wholesale?: boolean
) => {
  const category = useProductQueryStore((s) => s.category);
  return useInfiniteQuery<
    SinglePropertyResponse<PaginatedResponse<Product>>,
    Error
  >({
    queryKey: [
      ...CACHE_KEY_ALLPRODUCTS,
      category,
      categoryId,
      bestSeller,
      wholesale,
    ],
    queryFn: ({ pageParam = 1 }) =>
      getProducts.getSingleItem({
        params: {
          page: pageParam,
          itemPerPage: 10,
          categoryId:
            !bestSeller && !wholesale
              ? categoryId
                ? categoryId
                : category?._id
              : undefined,
          bestSeller: bestSeller && bestSeller,
          wholesale: wholesale && wholesale,
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

const useSearchProduct = (q?: string) =>
  useQuery({
    queryKey: [...CACHE_KEY_SEARCHPRODUCT, q],
    queryFn: () =>
      getSearchProduct.getRequest({ params: { q: q } }).then((r) => r.data),
    enabled: !!q,
  });

export { useGetAllProducts, useGetSingleProduct, useSearchProduct };
