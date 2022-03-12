import React from "react";
import Link from "next/link";
import * as styles from "./NavBar.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.bar}>
        <LittleStack />
        <Link href="/">
          <a className={styles.a}>downtime.dev</a>
        </Link>
      </div>
      <div className={styles.bar}></div>
    </nav>
  );
};

export default NavBar;

const LittleStack = () => (
  <div className={styles.outerStack}>
    <div className={styles.innerStack} />
    <div className={styles.innerStack} />
    <div className={styles.innerStack} />
    <div className={styles.innerStack} />
  </div>
);
