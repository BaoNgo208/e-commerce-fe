import Rating from "../../Overview/Rating.tsx";

interface ReviewsProps {
  reviews: any;
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-6">
        {reviews.map((review: string, index: any) => (
          <div
            className="border h-45 border-gray-300 rounded-xl p-5 flex flex-col gap-2"
            key={index}
          >
            <Rating value={4.5}></Rating>

            <div>
              <h1>Baobap208</h1>
            </div>

            <div>{review} </div>
            <div className="mt-auto">
              <h1>Posted on August 10,2025</h1>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
