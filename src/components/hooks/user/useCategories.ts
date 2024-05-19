import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_ALL_USER_CATEGORIES } from "../../constants/cache_keys";
import Category from "../../entities/category";
import APIClient from "../../services/api-client";
import { _allUserCategories } from "../../services/endpoints";

const getCategories = new APIClient<Category>(_allUserCategories);

const useGetAllCategories = () => {
  return useQuery({
    queryKey: CACHE_KEY_ALL_USER_CATEGORIES,
    queryFn: () => getCategories.getRequest().then((res) => res.data),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

export default useGetAllCategories;
