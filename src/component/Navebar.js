import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className={styles.Navbar}>
      <span className={styles.nav_logo}>Shallow</span>
      <div
        className={`${styles.nav_items} ${isOpen && styles.open}`}
      >
        
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/link">Link</Link>
      </div>
      <div
        className={`${styles.nav_toggle} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;
