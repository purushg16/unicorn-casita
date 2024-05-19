import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { _allUserReviews } from "../../services/endpoints";
import { Review } from "../../entities/review";
import { CACHE_KEY_REVIEW } from "../../constants/cache_keys";

const getAllReviews = new APIClient<Review>(_allUserReviews);

const useGetAllReviews = () => {
  return useQuery({
    queryKey: CACHE_KEY_REVIEW,
    queryFn: () => getAllReviews.getRequest().then((res) => res.data),
    retry: 2,
  });
};

export default useGetAllReviews;
