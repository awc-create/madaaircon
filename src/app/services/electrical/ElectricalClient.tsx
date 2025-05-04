"use client";

import React, { useState } from "react";
import Button from "@/components/button/Button";
import styles from "./Electrical.module.scss";

const services = [
  { title: "Wiring & Rewiring", description: "Complete wiring installations, upgrades, and safety checks for homes and businesses." },
  { title: "Panel Upgrades",       description: "Modernize outdated electrical panels to meet today’s safety standards and energy demands." },
  { title: "24/7 Emergency Call‑Outs", description: "Round‑the‑clock emergency support for all electrical issues." },
  { title: "Testing & Inspection",  description: "Certified inspections for landlords, businesses, and residential customers." },
  { title: "Smart Home Setup",     description: "Installation and configuration of smart lighting, sockets, and home automation systems." },
  { title: "Network Cabling",      description: "Setup of CAT3, CAT5e, CAT6 network infrastructure for homes and businesses." },
  { title: "Fiber Optic (Coming Soon)", description: "High‑speed fiber optic installations for modern homes and offices." },
];

const faqs = [
  { q: "What accreditations do your electricians hold?", a: "All our engineers are NAPIT & NICEIC registered, with ECS gold cards for full compliance." },
  { q: "Do you offer emergency call‑outs?",             a: "Yes—our team is available 24/7 for urgent electrical breakdowns and safety concerns." },
  { q: "Can you install smart home systems?",          a: "Absolutely—we integrate lighting, sockets, heating controls and more via top smart‑home platforms." },
];

export default function ElectricalClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.electricalPage}>
      {/* Hero + CTA */}
      <header className={styles.hero}>
        <h1>Certified Electrical Services</h1>
        <h2 className={styles.subheading}>London & UK‑Wide NAPIT, NICEIC & ECS Engineers</h2>
        <p>
          From full rewires and panel upgrades to smart home automation and 24/7 emergency call‑outs, our
          accredited electricians deliver safe, reliable service to homes, offices and industrial sites.
        </p>
        <Button text="Request a Quote" href="/contact" variant="primary" />
      </header>

      {/* Services Grid */}
      <section className={styles.servicesList}>
        {services.map((svc, i) => (
          <div key={i} className={styles.serviceItem}>
            <h3>{svc.title}</h3>
            <p>{svc.description}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className={styles.certifications}>
        <h2>Certifications</h2>
        <div className={styles.certGrid}>
          <a href="https://www.napit.org.uk/" target="_blank" rel="noopener noreferrer">
            <img src="/images/napit-certification-logo.png" alt="NAPIT Certification" loading="lazy" />
          </a>
          <a href="https://www.niceic.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/niceic-certification-logo.png" alt="NICEIC Certification" loading="lazy" />
          </a>
          <a href="https://www.ecscard.org.uk/" target="_blank" rel="noopener noreferrer">
            <img src="/images/ecs-certification-logo.png" alt="ECS Certification" loading="lazy" />
          </a>
          <a href="https://www.electricalsafetyfirst.org.uk/" target="_blank" rel="noopener noreferrer">
            <img src="/images/electrical-safety-first-certification-logo.png" alt="Electrical Safety First" loading="lazy" />
          </a>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqSection}>
        <h2>Electrical FAQs</h2>
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${openFaq === idx ? styles.open : ""}`}
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
          >
            <button aria-expanded={openFaq === idx}>{item.q}</button>
            <div className={styles.faqAnswer}>{item.a}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
