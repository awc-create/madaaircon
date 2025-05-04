"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const categories = [
  {
    title: "Electrical",
    items: [
      {
        q: "Do you offer emergency electrical call‑outs?",
        a: "Yes—our NAPIT & NICEIC‑registered electricians respond 24/7 to urgent electrical breakdowns and safety issues.",
      },
      {
        q: "Do you provide landlord electrical safety certificates?",
        a: "Yes—we’re qualified to carry out EICRs (Electrical Installation Condition Reports) for HMO and private rentals.",
      },
      {
        q: "Can you work outside London?",
        a: "Yes—travel fees may apply for locations beyond Greater London. Get in touch to check availability.",
      },
    ],
  },
  {
    title: "Cooling",
    items: [
      {
        q: "How often should I service my air conditioning?",
        a: "We recommend bi‑annual maintenance (pre‑season checks) to maintain efficiency and prolong system lifespan.",
      },
      {
        q: "Which air conditioning brands do you install?",
        a: "We install all major brands—Daikin, Mitsubishi Electric, Fujitsu, Samsung—tailoring to your efficiency needs.",
      },
      {
        q: "Are your cooling engineers F‑Gas certified?",
        a: "Yes—all our cooling engineers hold up‑to‑date F‑Gas & MCS qualifications for legal compliance and safe refrigerant handling.",
      },
      {
        q: "Do you offer maintenance contracts?",
        a: "Yes—we provide tailored maintenance packages with priority service and discounted call‑out rates.",
      },
    ],
  },
  {
    title: "Security",
    items: [
      {
        q: "Can you install my existing CCTV hardware?",
        a: "Absolutely—we’ll mount, wire and configure your current CCTV cameras for live & recorded access via our preferred apps.",
      },
      {
        q: "Do your intercom systems require internet?",
        a: "Audio‑only intercoms work offline; video or IP‑based intercoms need network connectivity, which we can also install.",
      },
      {
        q: "Do you offer alarm system monitoring?",
        a: "Yes—we partner with leading monitoring providers to offer 24/7 alarm response services.",
      },
      {
        q: "Can you integrate CCTV with my smartphone?",
        a: "Yes—remote viewing via iOS & Android apps is set up as standard.",
      },
    ],
  },
  {
    title: "General",
    items: [
      {
        q: "What is included in a smart home electrical setup?",
        a: "Smart home setup covers smart lighting, Wi‑Fi enabled sockets, automated heating controls and integration with Alexa/Google Home.",
      },
      {
        q: "Do you offer warranties on installations?",
        a: "Yes—all our installations come with a minimum 2‑year workmanship warranty and manufacturer warranties up to 10 years.",
      },
      {
        q: "Which areas do you serve in London & the UK?",
        a: "We cover all Greater London boroughs and offer nationwide electrical and cooling services via our partner network.",
      },
      {
        q: "How can I book a service or request a quote?",
        a: "Simply use our online contact form, email us at localmaintenance75@gmail.com or call 07908 833 222 for a free, no‑obligation quote.",
      },
    ],
  },
];

export default function FAQClient() {
  const [open, setOpen] = useState<{ [cat: string]: number | null }>({});

  const toggle = (cat: string, idx: number) => {
    setOpen((prev) => ({ ...prev, [cat]: prev[cat] === idx ? null : idx }));
  };

  return (
    <main className={styles.faqPage}>
      <h1>Frequently Asked Questions</h1>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <section key={cat.title} className={styles.faqSection}>
            <h2>{cat.title}</h2>
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.faqItem} ${open[cat.title] === idx ? styles.open : ""}`}
              >
                <button
                  aria-expanded={open[cat.title] === idx}
                  onClick={() => toggle(cat.title, idx)}
                >
                  {item.q}
                </button>
                <div className={styles.answer}>{item.a}</div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
