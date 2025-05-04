import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/button/Button";
import styles from "./Services.module.scss";

const services = [
  {
    id: "electrical",
    title: "Electrical Contracting",
    description:
      "Certified electricians offering 24/7 emergency repairs, rewiring, lighting upgrades, and smart home installations across London & the UK.",
    icon: "fluent-color:lightbulb-filament-48",
    iconColor: "#f59e0b",
    href: "/services/electrical",
  },
  {
    id: "cooling",
    title: "Cooling Systems",
    description:
      "F-Gas certified cooling engineers specializing in energy-efficient air conditioning installation, maintenance & repair for homes and businesses.",
    icon: "mdi:air-conditioner",
    iconColor: "#3b82f6",
    href: "/services/cooling",
  },
  {
    id: "security",
    title: "Security Solutions",
    description:
      "Advanced CCTV, alarm and access control installations to protect residential and commercial properties throughout London & the UK.",
    icon: "mdi:security",
    iconColor: "#ef4444",
    href: "/services/security",
  },
];

const Services: React.FC = () => (
  <section
    className={styles.servicesSection}
    aria-labelledby="services-heading"
  >
    <h2 id="services-heading">What We Provide</h2>
    <div className={styles.grid}>
      {services.map((svc) => (
        <article key={svc.id} className={styles.card}>
          <div
            className={styles.iconCircle}
            style={{ background: svc.iconColor + "20" /* 12% opacity */ }}
          >
            <Icon
              icon={svc.icon}
              width={48}
              height={48}
              style={{ color: svc.iconColor }}
              aria-hidden="true"
            />
          </div>
          <h3>{svc.title}</h3>
          <p>{svc.description}</p>
          <Button
            text="Learn More"
            href={svc.href}
            variant="primary"
            aria-label={`Learn more about ${svc.title.toLowerCase()}`}
            className={styles.button}
          />
        </article>
      ))}
    </div>
  </section>
);

export default Services;
