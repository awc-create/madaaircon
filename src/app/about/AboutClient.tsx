// src/app/about/AboutClient.tsx
"use client";

import Image from "next/image";
import styles from "./About.module.scss";

export default function AboutClient() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.experienceContent}>
          <h1>About Us</h1>
          <p>
            With years of expertise in facility management, we specialise in designing,
            installing, and maintaining high‑efficiency electrical and cooling solutions.
          </p>
          <p>
            Our expert team ensures optimal performance in <strong>residential, commercial, and industrial projects</strong>,
            with a commitment to innovation and sustainability.
          </p>
        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo/logo-full.png"
            alt="Mada Facility Management Ltd Logo"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>

      {/* Founder & Core Values */}
      <section className={styles.engineerSection}>
        <div className={styles.leftContent}>
          <h2>Meet the Founder & Engineer</h2>
          <p>
            I’m a NAPIT, NICEIC & ECS‑registered engineer with 15 years of hands‑on experience.
            From complex rewires to smart home setups and air‑conditioning installs, I handle
            every project personally, end‑to‑end.
          </p>
        </div>
        <div className={styles.qualifications}>
          <h2>My Core Values</h2>
          <ul className={styles.valuesList}>
            <li><strong>Safety First:</strong> I follow rigorous testing and compliance standards on every job.</li>
            <li><strong>Sustainability:</strong> I prioritise energy‑efficient designs and eco‑friendly materials.</li>
            <li><strong>Reliability:</strong> I back my work with 24/7 support and preventative maintenance.</li>
          </ul>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className={styles.certSection}>
        <h2>Certifications & Affiliations</h2>
        <div className={styles.certGrid}>
          <div className={styles.certCard}>
            <Image
              src="/images/napit-certification-logo.png"
              alt="NAPIT logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>
          <div className={styles.certCard}>
            <Image
              src="/images/city-and-guilds-certification-logo.png"
              alt="City & Guilds logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>
          <div className={styles.certCard}>
            <Image
              src="/images/mcs-certification-logo.png"
              alt="MCS logo"
              width={80}
              height={80}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Call‑to‑Action */}
      <section className={styles.ctaSection}>
        <h2>Work With an Expert</h2>
        <p>Get in touch today for a consultation on your electrical or cooling system needs.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Us</a>
      </section>
    </div>
  );
}
