interface ReviewsHeaderProps {
  totalReviews: number;
}

const ReviewsHeader = ({ totalReviews }: ReviewsHeaderProps) => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row items-center gap-2">
        <h1 className="font-bold text-xl">All Reviews</h1>
        <span className="text-sm font-extralight text-gray-400">
          {`(${totalReviews})`}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M8 12h8m-4 6h0"
            />
          </svg>
        </button>

        <button className="flex items-center gap-2 px-4 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
          <span className="text-sm font-medium">Latest</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <button className="w-full bg-black text-white text-sm px-7 py-3 rounded-full hover:bg-gray-800 transition">
          Write a review
        </button>
      </div>
    </div>
  );
};

export default ReviewsHeader;
