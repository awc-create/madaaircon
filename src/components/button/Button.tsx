import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, variant = "primary", className }) => {
  return (
    <Link href={href} className={`${styles.button} ${styles[variant]} ${className || ""}`}>
      {text}
    </Link>
  );
};

export default Button;
