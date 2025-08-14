import { useState } from "react";
import ReviewsHeader from "./ReviewsHeader.tsx";
import Reviews from "./Reviews.tsx";

const Ratings = () => {
  const [reviews, setReviews] = useState<string[]>([
    "Review 1",
    "Review 2",
    "Review 3",
    "Review 3",
  ]);

  return (
    <div className="space-y-5">
      <ReviewsHeader totalReviews={reviews.length}></ReviewsHeader>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};

export default Ratings;
