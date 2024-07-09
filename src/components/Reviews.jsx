import React from "react";

const Reviews = ({ reviews = [] }) => {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <p>
            <strong>{review.author}</strong>
          </p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
