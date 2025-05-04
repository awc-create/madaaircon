"use client";

import Image from "next/image";
import React from "react";
import styles from "./About.module.scss";

export default function AboutClient() {
  return (
    <main className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.experienceContent}>
          <h1>About Mada Facility Management Ltd</h1>
          <p>
            Welcome to Mada Facility Management Ltd—I’m a London‑based electrical
            contractor and F‑Gas certified cooling specialist, designing,
            installing and maintaining energy‑efficient systems for homes,
            businesses and industry.
          </p>
          <p>
            With over <strong>15 years of facility management</strong> experience,
            I’m committed to sustainability, safety, and innovation to deliver
            reliable, future‑proof solutions across the UK.
          </p>
        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo/logo-full.png"
            alt="Mada Facility Management Ltd logo"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>

      {/* Founder & Values */}
      <section className={styles.engineerSection}>
        <div className={styles.leftContent}>
          <h2>Meet the Founder & Engineer</h2>
          <p>
            I’m a NAPIT, NICEIC & ECS‑registered engineer with 15 years of
            hands‑on experience. From complex rewires to smart home setups and
            air‑conditioning installs, I handle every project personally, end‑to‑end.
          </p>
        </div>
        <div className={styles.qualifications}>
          <h2>My Core Values</h2>
          <ul className={styles.valuesList}>
            <li>
              <strong>Safety First:</strong> I follow rigorous testing and
              compliance standards on every job.
            </li>
            <li>
              <strong>Sustainability:</strong> I prioritize energy‑efficient
              designs and eco‑friendly materials.
            </li>
            <li>
              <strong>Reliability:</strong> I back my work with 24/7 support and
              preventative maintenance.
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className={styles.certSection}>
        <h2>Certifications & Affiliations</h2>
        <div className={styles.certGrid}>
          {/* ...certCard blocks unchanged... */}
        </div>
      </section>

      {/* Call‑to‑Action */}
      <section className={styles.ctaSection}>
        <h2>Work With Me</h2>
        <p>
          Ready to upgrade your electrical or cooling systems? Let’s talk—get
          your free consultation today.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          Contact Me
        </a>
      </section>
    </main>
  );
}
