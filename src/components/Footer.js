import React from "react";
import styles from "../styles/main.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Donate: Address</p>
      <nav>
        <ul>
          <li>
            <a href="/">Link1</a>
          </li>
          <li>
            <a href="/">Link2</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
