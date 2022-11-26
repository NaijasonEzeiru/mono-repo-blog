import React from "react";
import styles from "../styles/Categories.module.css";
import { FcSearch } from "react-icons/fc";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div>
        <input type="text" placeholder="&#xF007; Search" />

        {/* style={fontFamily:Arial, FontAwesome} */}
      </div>
      <label htmlFor="categories">
        <h2>Categories</h2>
      </label>
      <select className={styles.mobile}>
        <option>List</option>
        <option>List</option>
        <option>List</option>
        <option>List</option>
        <option>List</option>
      </select>
      <ul className={styles.desktop}>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
        <li>list</li>
      </ul>
    </div>
  );
};

export default Categories;
