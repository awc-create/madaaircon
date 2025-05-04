"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/logo/logo.png"
            alt="Madaaircon"
            width={150}
            height={50}
            priority
          />
        </Link>

        <ul className={styles.links}>
          <li
            className={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services">Services</Link>
            <ul className={`${styles.menu} ${servicesOpen ? styles.show : ""}`}>
              <li><Link href="/services/electrical">Electrical</Link></li>
              <li><Link href="/services/cooling">Cooling</Link></li>
              <li><Link href="/services/security">Security</Link></li>
            </ul>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} />
        </button>

        <div className={`${styles.mobileNav} ${mobileOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <button
                className={styles.mobileToggle}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <Icon icon={servicesOpen ? "mdi:chevron-up" : "mdi:chevron-down"} />
              </button>
              {servicesOpen && (
                <ul className={styles.mobileMenu}>
                  <li><Link href="/services/electrical">Electrical</Link></li>
                  <li><Link href="/services/cooling">Cooling</Link></li>
                  <li><Link href="/services/security">Security</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        {mobileOpen && <div className={styles.backdrop} onClick={() => setMobileOpen(false)} />}
      </div>
    </nav>
  );
}
