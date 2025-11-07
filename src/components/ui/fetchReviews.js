import { useEffect, useState } from "react";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxxxxxx/exec"; // replace with your URL

export default function FetchReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await fetch(SHEET_URL);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, []);

  if (loading) return <div>Loading reviews...</div>;

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3>{review.name}</h3>
          <p>{review.text}</p>
          <p>⭐ {review.rating}</p>
          <p>{review.investment}</p>
        </div>
      ))}
    </div>
  );
}
