"use client";

import React, { useState } from "react";
import Button from "@/components/button/Button";
import styles from "./Security.module.scss";

const services = [
  {
    title: "CCTV Installation",
    description:
      "Professional fitting and configuration of third‑party CCTV systems for real‑time remote viewing and reliable 24/7 surveillance.",
  },
  {
    title: "Intercom Setup",
    description:
      "Expert installation of audio and video intercom systems—integrating with your existing door or gate hardware.",
  },
  {
    title: "Smart Lock Integration",
    description:
      "Installation and programming of smart locks and access control hardware from leading manufacturers.",
  },
  {
    title: "Motion Sensor Placement",
    description:
      "Precise positioning and setup of motion detectors—integrated into your CCTV or alarm system for instant alerts.",
  },
  {
    title: "Fire Alarm Commissioning",
    description:
      "Commissioning and testing of fire, smoke and CO detectors to ensure compliance and reliable early warnings.",
  },
  {
    title: "Alarm System Configuration",
    description:
      "Professional setup of alarm panels and sirens—complete with mobile‑alert integration from brands like XYZ and ABC.",
  },
];

const faqs = [
  {
    q: "Can you install my existing CCTV cameras?",
    a: "Absolutely—we’ll mount, wire and configure your current CCTV hardware for live and recorded access via our preferred apps.",
  },
  {
    q: "Do intercoms need internet?",
    a: "Audio‑only intercoms work offline; video or IP‑based systems require a network connection, which we can also set up.",
  },
  {
    q: "Will my smart lock work with my phone?",
    a: "Yes—we integrate leading smart‑lock brands so you can lock/unlock via smartphone, keypad or fob according to your preference.",
  },
];

export default function SecurityClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.securityPage}>
      {/* Hero + CTA */}
      <header className={styles.hero}>
        <h1>Security System Installation</h1>
        <h2 className={styles.subheading}>
          Expert Fitting & Configuration of Market‑Leading Security Hardware
        </h2>
        <p>
          We specialise in professional installation and configuration of
          third‑party CCTV, intercoms, alarms and smart locks. Our engineers
          ensure your chosen system is mounted, wired and tuned for optimal
          performance and reliability.
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

      {/* FAQ Accordion */}
      <section className={styles.faqSection}>
        <h2>Security FAQs</h2>
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
