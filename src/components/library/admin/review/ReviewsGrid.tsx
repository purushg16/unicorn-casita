import { Review } from "../../../entities/review";
import SlideInGrid from "../../../motions/SlideInGrid";
import ReviewCard from "./ReviewCard";

const ReviewsGrid = ({ reviews }: { reviews: Review[] }) => {
  return (
    <SlideInGrid>
      {reviews.map((review, i) => (
        <ReviewCard review={review} key={i} />
      ))}
    </SlideInGrid>
  );
};

export default ReviewsGrid;
