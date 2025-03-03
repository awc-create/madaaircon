"use client";

import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import styles from "./ReviewSlider.module.scss";

// Dynamically import react-slick to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review: "Excellent service! The team was professional and efficient.",
  },
  {
    name: "Sarah Johnson",
    rating: 4,
    review: "Very satisfied with the installation. Highly recommend!",
  },
  {
    name: "Michael Smith",
    rating: 5,
    review: "Top-notch quality and customer service!",
  },
];

const ReviewSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        icon={index < rating ? "mdi:star" : "mdi:star-outline"}
        width="24"
        height="24"
        style={{ color: "#FFD700" }}
        data-testid="star-icon" // ✅ Added for testability
      />
    ));
  };

  return (
    <section className={styles.reviewSection}>
      <h2>What Our Clients Say</h2>
      <Slider {...settings} className={styles.slider} data-testid="mock-slider">
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewBox}>
            <div className={styles.stars}>{renderStars(review.rating)}</div>
            <p className={styles.reviewText}>"{review.review}"</p>
            <p className={styles.reviewerName}>- {review.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSlider;
