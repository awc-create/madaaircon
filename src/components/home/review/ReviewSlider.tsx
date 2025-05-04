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
    name: "Ayaan Ali",
    rating: 5,
    review: "The technicians were punctual and did a fantastic job.",
  },
  {
    name: "Mohamed Yusuf",
    rating: 4,
    review: "Great quality and friendly staff—would use their services again!",
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

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        icon={i < rating ? "mdi:star" : "mdi:star-outline"}
        width="24"
        height="24"
        style={{ color: "#FFD700" }}
        aria-hidden="true"
      />
    ));

  return (
    <section className={styles.reviewSection} aria-labelledby="reviews-heading">
      <h2 id="reviews-heading">What Our Clients Say</h2>
      <Slider {...settings} className={styles.slider}>
        {reviews.map((r, idx) => (
          <div key={idx} className={styles.reviewBox}>
            <div className={styles.stars}>{renderStars(r.rating)}</div>
            <p className={styles.reviewText}>&quot;{r.review}&quot;</p>
            <p className={styles.reviewerName}>— {r.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSlider;
