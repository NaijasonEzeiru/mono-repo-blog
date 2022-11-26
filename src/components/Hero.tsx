import Image from "next/image";
import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.details}>
        <h3>WEB DESIGN AND DEVELOPMENT</h3>
        <p className={styles.text}>
          Hello, my name is <span>Chibuike Ezeiru</span>, a web developer who is
          interested in using my skills in web development to help you create
          well-designed websites with the industry best practices for your
          business or personal activity.{" "}
        </p>
        <div className={styles.flex}>
          <button>Contact me</button>
          <p>
            <a>My portfolio &#x27a4;</a>{" "}
          </p>
        </div>
      </div>
      <div className={styles.img}>
        <Image
          src="/web-development.png"
          alt=""
          layout="fill"
          objectFit="fill"
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
