import { Divider, HStack, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import AddReviewModal from "../../library/admin/review/AddReviewModal";
import useGetAllReviews from "../../hooks/user/useReview";
import ReviewsGrid from "../../library/admin/review/ReviewsGrid";
import ReviewsSkeleton from "../../Utilities/Skeletons/ReviewsSkeleton";
import NoDataDisplay from "../../Utilities/NoDataDisplay";
import img from "../../../assets/empty_reviews.svg";

const AdminReviewsPage = () => {
  const { data: reviews, status, fetchStatus } = useGetAllReviews();

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Reviews" color="primary.700" small />
        <AddReviewModal />
      </HStack>
      <Divider my={4} />
      {status === "pending" ||
        (fetchStatus === "fetching" && <ReviewsSkeleton />)}
      {status === "success" &&
        fetchStatus === "idle" &&
        reviews.length === 0 && <NoDataDisplay img={img} title="reviews" />}
      {status === "success" && fetchStatus === "idle" && (
        <ReviewsGrid reviews={reviews} />
      )}
    </VStack>
  );
};

export default AdminReviewsPage;
