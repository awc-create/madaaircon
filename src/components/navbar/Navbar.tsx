"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Button from "../button/Button";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ Services dropdown state

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* ✅ Logo */}
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/assets/logo/logo.png"
            alt="Madaaircon Logo"
            width={150}
            height={50}
            priority
            className={styles.navbarLogo}
          />
        </Link>

        {/* ✅ Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/services">Services</Link>
            {/* ✅ Dropdown Menu (Desktop) */}
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/services/electrical">Electrical</Link></li>
                <li><Link href="/services/cooling">Cooling Systems</Link></li>
                <li><Link href="/services/security">Security</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>


        {/* ✅ Mobile Hamburger Button */}
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width={30} height={30} />
        </button>

        {/* ✅ Side Navigation (Mobile) */}
        <div className={`${styles.sideNav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.sideNavLinks}>
            {/* ✅ Mobile Dropdown */}
            <li className={styles.mobileDropdown}>
              <div className={styles.mobileDropdownHeader}>
                {/* ✅ Services is Clickable */}
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <button
                  className={styles.dropdownToggle}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation when clicking arrow
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  <Icon icon={dropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"} />
                </button>
              </div>

              {/* ✅ Dropdown Menu (Mobile) */}
              {dropdownOpen && (
                <ul className={styles.mobileDropdownMenu}>
                  <li><Link href="/services/electrical" onClick={() => setIsOpen(false)}>Electrical</Link></li>
                  <li><Link href="/services/cooling" onClick={() => setIsOpen(false)}>Cooling Systems</Link></li>
                  <li><Link href="/services/security" onClick={() => setIsOpen(false)}>Security</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        {/* ✅ Overlay to close menu when clicking outside */}
        {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
