"use client";

import Image from "next/image";
import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.profileImage}>
          <Image
            src="/assets/placeholder-profile.webp"
            alt="Lead Engineer"
            width={400}
            height={200}
          />
        </div>
        <div className={styles.heroText}>
          <h1>Meet Our Lead Engineer</h1>
          <p>
            With over 15 years of experience in electrical engineering and cooling systems, 
            our lead engineer is a certified expert in designing, installing, and maintaining 
            high-efficiency solutions.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <h2>Certifications & Qualifications</h2>
        <div className={styles.certifications}>
          <div className={styles.certItem}>
            <Image
              src="/public/assets/placeholder-cert.webp" // ✅ Correct placeholder path
              alt="Certification 1"
              width={100}
              height={100}
            />
            <p>Certified Electrical Engineer (CEE)</p>
          </div>
          <div className={styles.certItem}>
            <Image
              src="/public/assets/placeholder-cert.webp" // ✅ Correct placeholder path
              alt="Certification 2"
              width={100}
              height={100}
            />
            <p>HVAC & Cooling Systems Certification</p>
          </div>
          <div className={styles.certItem}>
            <Image
              src="/public/assets/placeholder-cert.webp" // ✅ Correct placeholder path
              alt="Certification 3"
              width={100}
              height={100}
            />
            <p>Safety & Compliance Accreditation</p>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className={styles.experienceSection}>
        <h2>Experience & Expertise</h2>
        <ul>
          <li>15+ years in Electrical & Cooling Systems Engineering</li>
          <li>Specialized in Residential & Commercial Installations</li>
          <li>Certified in Advanced Energy-Efficient Systems</li>
          <li>Project Experience in High-Rise and Industrial Facilities</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Work With an Expert</h2>
        <p>Get in touch today for a consultation on your electrical or cooling system needs.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Us</a>
      </section>
    </div>
  );
};

export default AboutPage;
