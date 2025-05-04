// src/app/services/cooling/CoolingClient.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import styles from "./Cooling.module.scss";

const services = [
  {
    title: "Refrigeration",
    description:
      "We supply, install, and maintain commercial refrigeration systems including working fridges, display fridges, and ice makers.",
  },
  {
    title: "Air Conditioning",
    description:
      "Split systems, cassette units, wall‑mounted or underfloor air conditioning systems — designed for optimal cooling efficiency.",
  },
  {
    title: "Air Handling Units",
    description:
      "Install and service AHUs for controlled ventilation and efficient air circulation in commercial and industrial spaces.",
  },
  {
    title: "Air Source Heat Pumps",
    description:
      "We install, maintain, and repair ASHP systems, providing efficient heating and cooling all year round.",
  },
];

const faqs = [
  {
    q: "Do you offer emergency AC repairs?",
    a: "Yes — our engineers respond 24/7 for breakdowns, refrigerant leaks or compressor faults.",
  },
  {
    q: "How often should I service my air conditioning?",
    a: "We recommend bi‑annual maintenance (pre‑season checks) to optimise efficiency and lifespan.",
  },
  {
    q: "Are you F‑Gas and MCS certified?",
    a: "Absolutely — all our cooling engineers hold up‑to‑date F‑Gas & MCS qualifications for legal compliance.",
  },
];

export default function CoolingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.coolingPage}>
      {/* Hero + CTA */}
      <header className={styles.hero}>
        <h1>Cooling Systems</h1>
        <h2 className={styles.subheading}>
          Commercial & Residential Cooling Experts Across London & England
        </h2>
        <p>
          We offer complete cooling system solutions—from refrigeration and
          air conditioning to air source heat pumps and AHUs. Our F‑Gas & MCS‑
          certified engineers serve businesses and homeowners with expert
          installation, maintenance, and rapid breakdown support.
        </p>
        <Button
          text="Request a Quote"
          href="/contact"
          variant="primary"
          aria-label="Request a quote for cooling systems"
        />
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
          <a
            href="https://www.fgasregister.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/fgas-certification-logo.png"
              alt="F‑Gas Certification Logo"
              title="F‑Gas Certified – Fluorinated Greenhouse Gas Handling"
              width={120}
              height={60}
              loading="lazy"
            />
          </a>
          <a
            href="https://www.cityandguilds.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/city-and-guilds-certification-logo.png"
              alt="City & Guilds Certification Logo"
              title="City & Guilds – Accredited Technical Training"
              width={120}
              height={60}
              loading="lazy"
            />
          </a>
          <a
            href="https://mcscertified.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/mcs-certification-logo.png"
              alt="MCS Certification Logo"
              title="MCS – Microgeneration Certification Scheme"
              width={120}
              height={60}
              loading="lazy"
            />
          </a>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className={styles.faqSection}>
        <h2>Cooling FAQs</h2>
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${
              openFaq === idx ? styles.open : ""
            }`}
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
