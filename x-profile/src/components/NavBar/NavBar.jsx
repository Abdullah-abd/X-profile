import React from "react";
import styles from "./NavBar.module.css"
import { Link,useLocation } from "react-router-dom";
export default function NavBar(){
    const location = useLocation();
    return (
        <nav className={styles.nav}>
          <div className={styles.logo}>X-profile</div>
          <button className={styles.button}>
          {location.pathname === "/admin" ? (
        <Link to="/" className={styles.link}>Go to Home</Link>
      ) : (
        <Link to="/admin" className={styles.link}>Go to Admin</Link>
      )}
          </button>
          
        </nav>
      );
}