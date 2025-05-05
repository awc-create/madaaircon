// src/app/navbar/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };
  const toggleServices = () => setServicesOpen((o) => !o);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" onClick={closeAll} className={styles.logo}>
          <Image
            src="/assets/logo/logo.png"
            alt="Mada Facility Management Ltd"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          <Link href="/services" onClick={closeAll}>Services</Link>
          <Link href="/about"    onClick={closeAll}>About</Link>
          <Link href="/contact"  onClick={closeAll}>Contact</Link>
        </div>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} width="28" height="28" />
        </button>
      </div>

      {mobileOpen && <div className={styles.backdrop} onClick={closeAll} />}

      <aside className={`${styles.mobileNav} ${mobileOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <Image
            src="/assets/logo/logo.png"
            alt="Mada Facility Management Ltd"
            width={120}
            height={40}
            priority
          />
          <button onClick={closeAll} className={styles.closeBtn} aria-label="Close menu">
            <Icon icon="mdi:close" width="24" height="24" />
          </button>
        </div>

        <ul className={styles.mobileList}>
          <li className={styles.servicesItem}>
            <div className={styles.servicesLinkWrapper}>
              <Link href="/services" onClick={closeAll}>
                Services
              </Link>
              <button
                className={styles.servicesToggle}
                onClick={toggleServices}
                aria-expanded={servicesOpen}
                aria-label="Toggle services submenu"
              >
                <Icon
                  icon={servicesOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                  width="20"
                  height="20"
                />
              </button>
            </div>
            {servicesOpen && (
              <ul className={styles.mobileSubList}>
                <li>
                  <Link href="/services/electrical" onClick={closeAll}>
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link href="/services/cooling" onClick={closeAll}>
                    Cooling
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" onClick={closeAll}>
                    Security
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/about" onClick={closeAll}>About</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeAll}>Contact</Link>
          </li>
        </ul>

        <div className={styles.drawerFooter}>
          <a href="tel:07908833222" aria-label="Call us">
            <Icon icon="mdi:phone" width="24" height="24" />
          </a>
          <a href="mailto:localmaintenance75@gmail.com" aria-label="Email us">
            <Icon icon="mdi:email" width="24" height="24" />
          </a>
        </div>
      </aside>
    </nav>
);
}
