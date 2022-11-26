import Image from "next/image";
import React from "react";
import Comments from "../components/Comments";
import styles from "../styles/slug.module.css";

const slug = () => {
  const post =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem accusamus. Pariatur enim odit ut reprehenderit eligendi natus ducimus eius assumenda, placeat, exercitationem dignissimos quos illum repellendus explicabo labore obcaecati.";
  const title = "The Title Goes Here";

  return (
    <div className={styles.slug}>
      <div className={styles.img}>
        <Image
          src="/landscape.jpg"
          alt=""
          layout="fill"
          objectFit="none"
          className={styles.image}
        />
      </div>
      <div className={styles.post}>
        <p>{post}</p>
      </div>
      <Comments />
    </div>
  );
};

export default slug;
