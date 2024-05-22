import { VStack } from "@chakra-ui/react";
import { RText } from "../../../Utilities/Typography";
import { Review } from "../../../entities/review";
import DeleteReviewButton from "../ActionButtons/DeleteReviewButton";
import RatingShower from "./RatingShower";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <VStack
      opacity={1}
      w="100%"
      align="start"
      borderRadius="xl"
      overflow="clip"
      gap={4}
      bg="primary.50"
      transition="all 0.7s"
    >
      <VStack w="100%" align="start" gap={0} bg="primary.300" p={4}>
        <RText
          text={review.name}
          textTransform="capitalize"
          color="primary.800"
          weight="bold"
        />
        <RText
          text={review.company || ""}
          textTransform="capitalize"
          small
          color="primary.800"
        />
      </VStack>

      <VStack w="100%" align="start" gap={2} p={4}>
        <RatingShower value={review.rating} />
        <RText
          text={review.shortReview}
          textTransform="capitalize"
          small
          color="primary.800"
        />
      </VStack>
      <DeleteReviewButton reviewId={review._id!} />
    </VStack>
  );
};

export default ReviewCard;
