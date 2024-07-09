import React, { useState } from "react";

const Reviews = ({ reviews = [], onAddReview }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { id: Date.now(), author, content };
    onAddReview(newReview);
    setAuthor("");
    setContent("");
  };

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
      <form onSubmit={handleSubmit}>
        <h3>Leave a Review</h3>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your Name"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your Review"
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
