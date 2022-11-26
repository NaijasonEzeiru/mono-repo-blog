import Image from 'next/image';
import React from 'react'
import styles from "../styles/Cards.module.css";

const Cards = () => {
    const post = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem accusamus. Pariatur enim odit ut reprehenderit eligendi natus ducimus eius assumenda, placeat, exercitationem dignissimos quos illum repellendus explicabo labore obcaecati.";
    const title ="The Title Goes Here";

    // if(post.length > 200) {
    //  var   text = post.substring(0, 200);
    //  var last = text.lastIndexOf(" ");
    //  text = text.substring(0, last);
    //  text = text + ` (...)`;
    // }


  return (
    <div className={styles.card}>
        <div className={styles.imgCard}>
            <Image src="/landscape.jpg" alt='' layout='fill' objectFit='cover' className={styles.image}/>
            <div className={styles.sb}>
                {/* class? */}
                <div className='cFlex'>
                    <p>Author</p>
                    <p>Date</p>
                </div>
                <p>category</p>
            </div>
        </div>
        <div className={styles.details}>
            <h3>{title}</h3>
            <p>{post.substring(0, 180)}{post.length >= 180 && '...'}</p>
            <h6>Read post</h6>
        </div>
    </div>
  )
}

export default Cards