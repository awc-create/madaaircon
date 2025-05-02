"use client";

import React from "react";
import styles from "./Security.module.scss";

const services = [
  {
    title: "CCTV Systems",
    description: "High-definition surveillance including IP-based CCTV for real-time remote access and reliable 24/7 monitoring.",
  },
  {
    title: "Intercom Systems",
    description: "Door, gate, and home intercoms for residential and commercial properties, including audio/video access control.",
  },
  {
    title: "Smart Locks & Security Systems",
    description: "Digital entry systems with smartphone integration, biometric access, and remote unlock — ideal for homes and offices.",
  },
  {
    title: "Motion Detectors",
    description: "Advanced infrared and smart sensors to alert you of any movement — integrated with CCTV and alarms if required.",
  },
  {
    title: "Fire Alarms",
    description: "Smoke, heat, and CO detection systems for early fire alerts and building code compliance.",
  },
  {
    title: "Alarm Systems",
    description: "Complete security alarm installations for domestic and business environments, with optional mobile notifications.",
  },
];

export default function SecurityClient() {
  return (
    <main className={styles.securityPage}>
      <div className={styles.hero}>
        <h1>Security Solutions</h1>
        <h2 className={styles.subheading}>
          Domestic & Commercial Security Installations Across London & England
        </h2>
        <p>
          We install smart and traditional security systems for homes, offices, and businesses. From CCTV and intercoms
          to motion sensors and alarms, we tailor protection solutions to your environment with modern features like mobile access and remote alerts.
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
    </main>
  );
}
