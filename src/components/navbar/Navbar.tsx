"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Button from "../button/Button";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
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

        {/* Regular Navigation Links (Visible on Desktop) */}
        <ul className={styles.navLinks}>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Book Now Button (Desktop Only) */}
        <div className={styles.bookNowDesktop}>
          <Button text="Book Now" href="/book" variant="primary" />
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width={30} height={30} />
        </button>

        {/* Side Navigation (Mobile) */}
        <div className={`${styles.sideNav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.sideNavLinks}>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* Book Now Button (Mobile) */}
          <div className={styles.bookNowMobile}>
            <Button text="Book Now" href="/book" variant="primary" />
          </div>
        </div>

        {/* Overlay (Click to Close Mobile Menu) */}
        {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
