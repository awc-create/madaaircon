import Head from "next/head";
import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import { Icon } from "@iconify/react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
      <Head>
        {/* Preload hero image for performance */}
        <link
          rel="preload"
          href="/assets/room-hero.webp"
          as="image"
          type="image/webp"
        />
      </Head>

      <header className={styles.hero} role="banner" aria-label="Homepage Hero">
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/room-hero.webp"
            alt="Technician installing an air conditioning unit in a modern living room"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className={styles.overlay} />

        <div className={styles.content}>
          <h1>
            Certified Electricians & F-Gas Air Conditioning Engineers in London
            & the UK
          </h1>
          <p>
            Certified electricians and F-Gas cooling specialists providing 24/7
            emergency electrical repairs, energy-efficient air conditioning
            installations, preventative maintenance, and smart home electrical
            upgrades across London and the UK.
          </p>
          <div className={styles.buttonContainer}>
            <Button
              text="Learn More"
              href="/services"
              aria-label="Learn more about our services"
            />
          </div>
        </div>

        <div className={styles.scrollDown} aria-hidden="true">
          <Icon icon="mdi:chevron-down" />
        </div>
      </header>
    </>
  );
}
