import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.sub}>
        <h1>Welcome!!!</h1>
        <p>
          Want to receive the latest news and updates from our blog? Sign up for
          our newsletter!
        </p>
        <form action="post">
          <input type="email" placeholder="Enter Your Email Address" />
          <p>
            We care about your data in our <a href="">privacy policy</a>
          </p>
          <button>Subscribe</button>
        </form>
      </div>
      <div className={styles.me}>
        <p>
          Designed by <a>Chibuike Ezeiru</a>
        </p>
        <h5>Contact me</h5>
        <ul>
          <li>Whatsapp</li>
          <li>Whatsapp</li>
          <li>Whatsapp</li>
          <li>Whatsapp</li>
        </ul>
      </div>
      <div className={styles.categories}>
        <ul>
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
