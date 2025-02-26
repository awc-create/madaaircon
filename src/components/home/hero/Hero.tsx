import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        
        {/* ✅ LEFT - TEXT CONTENT */}
        <div className={styles.textContainer}>
          <h1>Expert Electrician and Cooling System Contractor</h1>
          <p>Your trusted air conditioning and electrical solutions provider.</p>
          <div className={styles.buttonContainer}>
            <Button text="Learn More" href="/services" variant="primary" />
          </div>
        </div>

        {/* ✅ RIGHT - IMAGE */}
        <div className={styles.imageContainer}>
          <Image
            src="/assets/room-hero.webp"
            alt="Room being prepped for air conditioning and lighting installation"
            width={700}
            height={450}
            className={styles.heroImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
