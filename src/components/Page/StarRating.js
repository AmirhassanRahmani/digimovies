import React, { useState } from "react";
import { Container, RankValue } from "./StarRating-styles";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  return (
    <Container>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= (hover || rating) ? " #f6b801" : "#ccc"}
              size={20}
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <RankValue>امتیاز {rating}</RankValue>
    </Container>
  );
}

export default StarRating;
