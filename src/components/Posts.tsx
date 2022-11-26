import React from "react";
import styles from "../styles/posts.module.css";
import Cards from "./Cards";
import Categories from "./Categories";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.cat}>
        <Categories />
        <div>
          <div className={styles.flex}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className={styles.center}>
            <button>View more &nbsp; &#x27a4;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
