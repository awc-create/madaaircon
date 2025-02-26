import React from "react";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        {/* Logo */}
        <Link href="/" className={styles["logo-container"]}>
          <img src="/assets/logo/logo.png" alt="Madaaircon Logo" className={styles["navbar-logo"]} />
        </Link>

        {/* Navigation Links */}
        <ul className={styles["nav-links"]}>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Book Now Button */}
        <Button text="Book Now" href="/book" variant="primary" className={styles["book-now-button"]} />
      </div>
    </nav>
  );
};

export default Navbar;
