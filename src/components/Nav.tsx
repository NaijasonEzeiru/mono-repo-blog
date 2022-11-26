import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import styles from "../styles/Nav.module.css";
// import AuthContext from "./AuthContext";
import { trpc } from "../utils/trpc";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ham, setHam] = useState(false);

  const logout = () => trpc.useQuery(["users.logout"])




  //   const {user, signout} = useContext(AuthContext)
  const user = false;

  // const controlNav = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY > lastScrollY) {
  //       setShow(false);
  //     } else {
  //       setShow(true)
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNav);
  //     return () => {
  //       window.removeEventListener('scroll', controlNav)
  //     };
  //   }
  // }, [lastScrollY])

  const handleClick = () => {
    setHam(!ham);
  };
  return (
    <>
      <div className={show ? styles.height : styles.hide}></div>
      <div className={show ? styles.navbarItems : styles.hide}>
        <span className={styles.navbarLogo}>
          <Link href="/">
            <a>
              {/* <Image 
            src="/blog.svg" 
            alt="naijason dot com" 
            width="150px" 
            height="30px"
            className={styles.logo}
            /> */}
              <h2>BLOG</h2>
            </a>
          </Link>
        </span>
        <div className={styles.menuIcon} onClick={handleClick}>
          <div
            className={
              !ham ? styles.patty : `${styles["patty"]} ${styles["active"]}`
            }
          ></div>
        </div>

        <ul
          onClick={handleClick}
          className={
            !ham ? `${styles["navMenu"]} ${styles["active"]}` : styles.navMenu
          }
        >
          {user ? (
            <li className={styles.navLinks}>
              {" "}
              <Link href="/victims">
                <a>Victims</a>
              </Link>
            </li>
          ) : (
            ""
          )}
          {user ? (
            <li className={styles.navLinks}>
              {" "}
              <Link href="/pages">
                <a>Pages</a>
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className={styles.navLinks}>
            {" "}
            
              <a>logout</a>
          </li>
          <li className={styles.navLinks}>
            {" "}
            <Link href="#">
              <a>Contact Us</a>
            </Link>
          </li>
          <li className={styles.navLinks}>
            {!user ? (
              <Link href="/login">
                <a>log in</a>
              </Link>
            ) : (
              <button onClick={logout}>Log Out</button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
