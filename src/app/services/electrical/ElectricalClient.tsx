"use client";

import React from "react";
import styles from "./Electrical.module.scss";

const services = [
  {
    title: "Wiring & Rewiring",
    description: "Complete wiring installations, upgrades, and safety checks for homes and businesses.",
  },
  {
    title: "Panel Upgrades",
    description: "Modernize outdated electrical panels to meet today’s safety standards and energy demands.",
  },
  {
    title: "24/7 Emergency Call-Outs",
    description: "Round-the-clock emergency support for all electrical issues.",
  },
  {
    title: "Testing & Inspection",
    description: "Certified inspections for landlords, businesses, and residential customers.",
  },
  {
    title: "Smart Home Setup",
    description: "Installation and configuration of smart lighting, sockets, and home automation systems.",
  },
  {
    title: "Network Wiring & Cabling",
    description: "Setup of CAT3, CAT5e, CAT6 network infrastructure for homes and businesses.",
  },
  {
    title: "Fiber Optic (Coming Soon)",
    description: "We’ll soon offer high-speed fiber optic installations for modern homes and offices.",
  },
];

export default function ElectricalClient() {
  return (
    <main className={styles.electricalPage}>
      <div className={styles.hero}>
        <h1>Certified Electrical Services in London & Across England</h1>
        <p>
          Our team of fully accredited electricians offers professional electrical services for homes,
          businesses, and industrial sites in London and throughout England. From rewiring and smart home setup
          to 24/7 emergency call-outs, we deliver reliable, certified work backed by NAPIT, NICEIC, and ECS accreditations.
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
          <a href="https://www.napit.org.uk/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/napit-certification-logo.png"
              alt="NAPIT Certification Logo"
              title="NAPIT – National Association of Professional Inspectors and Testers"
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
          <a href="https://www.ecscard.org.uk/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/ecs-certification-logo.png"
              alt="ECS Certification Logo"
              title="ECS – Electrotechnical Certification Scheme"
              loading="lazy"
            />
          </a>
          <a href="https://www.niceic.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/niceic-certification-logo.png"
              alt="NICEIC Certification Logo"
              title="NICEIC – National Inspection Council for Electrical Installation Contracting"
              loading="lazy"
            />
          </a>
          <a href="https://www.electricalsafetyfirst.org.uk/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/electrical-safety-first-certification-logo.png"
              alt="Electrical Safety First Certification Logo"
              title="Electrical Safety First – Electrical Safety Charity"
              loading="lazy"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
