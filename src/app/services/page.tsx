"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/button/Button";
import styles from "./Services.module.scss";

const services = [
  {
    id: "electrical",
    title: "Electrical Solutions",
    icon: "mdi:lightning-bolt-circle",
    description:
      "Comprehensive electrical solutions—from wiring and panel upgrades to 24/7 emergency repairs—for homes, offices and industrial sites.",
    link: "/services/electrical",
    subServices: ["Wiring & Rewiring", "Panel Upgrades", "24/7 Emergency Repairs"],
  },
  {
    id: "cooling",
    title: "Cooling Systems",
    icon: "mdi:air-conditioner",
    description:
      "Energy‑efficient air conditioning installations, duct cleaning, and commercial HVAC maintenance to keep you cool year‑round.",
    link: "/services/cooling",
    subServices: ["AC Installation", "Duct Cleaning", "Commercial HVAC"],
  },
  {
    id: "security",
    title: "Security Solutions",
    icon: "mdi:cctv",
    description:
      "Advanced CCTV, access control, and alarm systems to protect your property—residential or commercial.",
    link: "/services/security",
    subServices: ["CCTV Systems", "Access Control", "Alarm Systems"],
  },
];

export default function ServicesPage() {
  return (
    <section className={styles.servicesPage}>
      {/* Hero */}
      <header className={styles.hero}>
        <h1>Our Services</h1>
        <p>Explore our expert solutions tailored to your needs.</p>
      </header>

      {/* Cards */}
      <div className={styles.cards}>
        {services.map((s) => (
          <article key={s.id} id={s.id} className={styles.card}>
            <div className={styles.header}>
              <Icon icon={s.icon} width="36" height="36" />
              <h2>{s.title}</h2>
            </div>

            <p className={styles.description}>{s.description}</p>

            <ul className={styles.features}>
              {s.subServices.map((feat) => (
                <li key={feat}>
                  <h3>{feat}</h3>
                </li>
              ))}
            </ul>

            <a href={s.link} className={styles.learnMore}>
              Learn More About {s.title}
            </a>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className={styles.cta}>
        <p>Ready to get started? Contact us now for a free quote and expert advice.</p>
        <Button text="Request a Quote" href="/contact" variant="primary" />
      </div>
    </section>
  );
}
