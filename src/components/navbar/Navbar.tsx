import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
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

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Book Now Button */}
        <Button text="Book Now" href="/book" variant="primary" className={styles.bookNowButton} />
      </div>
    </nav>
  );
};

export default Navbar;
