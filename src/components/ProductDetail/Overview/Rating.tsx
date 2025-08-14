import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, max = 5 }: { value: number; max?: number }) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex">{stars}</div>
      <span className="text-gray-600 text-sm">{value}/5</span>
    </div>
  );
};

export default Rating;
