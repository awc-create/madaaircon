"use client";

import Image from "next/image";
import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section with Experience & Logo */}
      <section className={styles.heroSection}>
        <div className={styles.experienceContent}>
          <h1>About Us</h1>
          <p>
            With years of expertise in facility management, we specialize in designing, 
            installing, and maintaining high-efficiency electrical and cooling solutions.
          </p>
          <p>
            Our expert team ensures optimal performance in **residential, commercial, and industrial projects** 
            with a commitment to innovation and sustainability.
          </p>
        </div>

        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo/logo-full.png" 
            alt="Madaaircon Logo"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>

      {/* Meet Our Lead Engineer & Qualifications */}
      <section className={styles.engineerSection}>
        <div className={styles.leftContent}>
          <h2>Meet Our Lead Engineer</h2>
          <p>
            With **15+ years of industry experience**, our lead engineer has been 
            instrumental in delivering high-quality solutions across multiple industries.
          </p>
        </div>

        <div className={styles.qualifications}>
          <h2>Certifications</h2>
          <div className={styles.certGrid}>
            <div className={styles.certCard}>
              <Image src="/icons/cert1.svg" alt="Certification 1" width={50} height={50} />
              <p>Certified Electrical Engineer</p>
            </div>
            <div className={styles.certCard}>
              <Image src="/icons/cert2.svg" alt="Certification 2" width={50} height={50} />
              <p>HVAC & Cooling Systems Expert</p>
            </div>
            <div className={styles.certCard}>
              <Image src="/icons/cert3.svg" alt="Certification 3" width={50} height={50} />
              <p>Safety & Compliance Accreditation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className={styles.ctaSection}>
        <h2>Work With an Expert</h2>
        <p>Get in touch today for a consultation on your electrical or cooling system needs.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Us</a>
      </section>
    </div>
  );
};

export default AboutPage;
