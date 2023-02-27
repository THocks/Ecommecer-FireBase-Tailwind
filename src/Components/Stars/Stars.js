import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = (rating) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - hasHalfStar;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <FaStar key={`star-${i}`} className="text-yellow-300 "></FaStar>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        key="half-star"
        className="text-yellow-300"
      ></FaStarHalfAlt>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-star-${i}`} className="text-gray-300"></FaRegStar>
    );
  }

  return stars;
};

export default Stars;
