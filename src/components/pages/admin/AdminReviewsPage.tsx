import { Divider, HStack, VStack } from "@chakra-ui/react";
import { RHeading } from "../../Utilities/Typography";
import AddReviewModal from "../../library/admin/review/AddReviewModal";
import useGetAllReviews from "../../hooks/user/useReview";
import ReviewsGrid from "../../library/admin/review/ReviewsGrid";
import ReviewsSkeleton from "../../Utilities/Skeletons/ReviewsSkeleton";

const AdminReviewsPage = () => {
  const { data: reviews, status } = useGetAllReviews();

  return (
    <VStack align="start">
      <HStack w="100%" justify="space-between">
        <RHeading text="Your Reviews" color="primary.700" small />
        <AddReviewModal />
      </HStack>
      <Divider my={4} />
      {status === "success" && <ReviewsGrid reviews={reviews} />}
      {status === "pending" && <ReviewsSkeleton />}
    </VStack>
  );
};

export default AdminReviewsPage;
