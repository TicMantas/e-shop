import { FaStar } from "react-icons/fa";

type RatingProps = {
  rating: number;
  size?: number;
};

export default function Rating({ rating, size = 20 }: RatingProps) {
  const filled = "#f59e0b";
  const empty = "#d1d5db";
  const fillPercent = Math.max(0, Math.min(1, rating / 5)) * 100;

  return (
    <div className="flex gap-2 items-center">
      <div className={`relative inline-block`}>
        <FaStar color={empty} size={size} />
        <div
          className="absolute top-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${fillPercent}%` }}
        >
          <FaStar color={filled} size={size} />
        </div>
      </div>
      <p className={`font-semibold md:text-xl text-lg`}>{rating}</p>
    </div>
  );
}
