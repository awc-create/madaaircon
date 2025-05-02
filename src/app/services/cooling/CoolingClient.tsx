"use client";

import React from "react";
import styles from "./Cooling.module.scss";

const services = [
  {
    title: "Refrigeration",
    description: "We supply, install, and maintain commercial refrigeration systems including working fridges, display fridges, and ice makers.",
  },
  {
    title: "Air Conditioning",
    description: "Split systems, cassette units, wall-mounted or underfloor air conditioning systems — designed for optimal cooling efficiency.",
  },
  {
    title: "Air Handling Units",
    description: "Install and service AHUs for controlled ventilation and efficient air circulation in commercial and industrial spaces.",
  },
  {
    title: "Air Source Heat Pumps",
    description: "We install, maintain, and repair ASHP systems, providing efficient heating and cooling all year round.",
  },
];

export default function CoolingClient() {
  return (
    <main className={styles.coolingPage}>
      <div className={styles.hero}>
        <h1>Cooling Systems</h1>
        <h2 className={styles.subheading}>Commercial & Residential Cooling Experts Across London & England</h2>
        <p>
          We offer complete cooling system solutions, from refrigeration and air conditioning to air source heat pumps and ventilation units.
          Our F-Gas and MCS-certified engineers serve businesses and homeowners with expert installation, service, and support.
        </p>
      </div>

      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <section className={styles.certifications}>
        <h2>Certifications</h2>
        <div className={styles.certGrid}>
          <a href="https://www.fgasregister.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/fgas-certification-logo.png"
              alt="F-Gas Certification Logo"
              title="F-Gas Certified – Fluorinated Greenhouse Gas Handling"
              loading="lazy"
            />
          </a>
          <a href="https://www.cityandguilds.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/city-and-guilds-certification-logo.png"
              alt="City and Guilds Certification Logo"
              title="City & Guilds – Accredited Technical Training"
              loading="lazy"
            />
          </a>
          <a href="https://mcscertified.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/mcs-certification-logo.png"
              alt="MCS Certification Logo"
              title="MCS – Microgeneration Certification Scheme"
              loading="lazy"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
