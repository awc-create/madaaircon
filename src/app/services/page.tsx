"use client";

import React from "react";
import { Icon } from "@iconify/react";
import styles from "./Services.module.scss";

const services = [
  {
    id: "electrical",
    title: "Electrical Solutions",
    icon: "mdi:lightning-bolt-circle",
    description: "Comprehensive electrical solutions for residential, commercial, and industrial needs.",
    subServices: [
      { name: "Wiring & Rewiring", description: "Full wiring installation and safety upgrades.", link: "/contact" },
      { name: "Panel Upgrades", description: "Upgrade old electrical panels to meet modern safety standards.", link: "/contact" },
      { name: "Emergency Repairs", description: "24/7 emergency services for electrical issues.", link: "/contact" },
    ],
  },
  {
    id: "cooling-systems",
    title: "Cooling Systems",
    icon: "mdi:air-conditioner",
    description: "Energy-efficient air conditioning and cooling solutions for homes and businesses.",
    subServices: [
      { name: "AC Installation", description: "Expert installation of cooling systems.", link: "/contact" },
      { name: "Duct Cleaning", description: "Improve air quality with professional duct cleaning.", link: "/contact" },
      { name: "Commercial HVAC", description: "Custom HVAC solutions for businesses.", link: "/contact" },
    ],
  },
  {
    id: "security",
    title: "Security Solutions",
    icon: "mdi:cctv",
    description: "Advanced security solutions to protect your home and business.",
    subServices: [
      { name: "CCTV Systems", description: "24/7 surveillance solutions with remote access.", link: "/contact" },
      { name: "Access Control", description: "Smart access control systems for businesses.", link: "/contact" },
      { name: "Alarm Systems", description: "Burglar and fire alarm installation.", link: "/contact" },
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section className={styles.servicesPage}>
      {/* ✅ Hero Section */}
      <div className={styles.hero}>
        <h1>Our Services</h1>
        <p>Explore our expert solutions tailored to your needs.</p>
      </div>

      {/* ✅ Services Cards */}
      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <div key={service.id} id={service.id} className={styles.serviceCard}>
            {/* ✅ Icon and Title */}
            <div className={styles.serviceHeader}>
              <Icon icon={service.icon} className={styles.serviceIcon} />
              <h2>{service.title}</h2>
            </div>
            <p className={styles.serviceDescription}>{service.description}</p>

            {/* ✅ Sub-Services */}
            <div className={styles.subServices}>
              {service.subServices.map((sub, index) => (
                <div key={index} className={styles.subService}>
                  <h3>{sub.name}</h3>
                  <p>{sub.description}</p>
                  <a href={sub.link} className={styles.ctaButton}>Learn More</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
