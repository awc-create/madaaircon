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

  // ✅ Close menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

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
          <li className={styles.dropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* ✅ Services is Clickable */}
            <Link href="/services" className={styles.servicesLink}>
              Services
            </Link>

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

        {/* ✅ Book Now Button (Desktop) */}
        <div className={styles.bookNowDesktop}>
          <Button text="Book Now" href="/book" variant="primary" />
        </div>

        {/* ✅ Mobile Hamburger Button */}
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width={30} height={30} />
        </button>

        {/* ✅ Side Navigation (Mobile) */}
        <div className={`${styles.sideNav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.sideNavLinks}>
            {/* ✅ Mobile Dropdown */}
            <li className={styles.mobileDropdown}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Link href="/services" onClick={closeMenu}>Services</Link>
                <Icon icon={dropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"} />
              </button>
              {dropdownOpen && (
                <ul className={styles.mobileDropdownMenu}>
                  <li><Link href="/services/electrical" onClick={closeMenu}>Electrical</Link></li>
                  <li><Link href="/services/cooling" onClick={closeMenu}>Cooling Systems</Link></li>
                  <li><Link href="/services/security" onClick={closeMenu}>Security</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/about" onClick={closeMenu}>About</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          {/* ✅ Mobile Book Now Button */}
          <div className={styles.bookNowMobile}>
            <Button text="Book Now" href="/book" variant="primary" onClick={closeMenu} />
          </div>
        </div>

        {/* ✅ Overlay to close menu when clicking outside */}
        {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
