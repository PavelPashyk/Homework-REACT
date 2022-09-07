import { useState } from "react";
import { icoMenu, icoUser } from "../../assets";
import { NavBar } from "../NavBar";
import styles from "./style.module.css";

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  const openNavBar = () => {
    setIsNavBarVisible(true);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  return (
    <>
    <div className={styles.header}>
      <nav className={styles.headerMenu}>
        <div className={styles.headerTop}>
          <button className={styles.headerBtn} onClick={openNavBar}>
            <img src={icoMenu} alt="menu" className={styles.menuBtnImg} />
          </button>
          <img src={icoUser} alt="user" className={styles.menuTitleImg} />
          <h2 className={styles.headerTitle}>Username</h2>
        </div>
        <div className={styles.headerBoby}>
          {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
        </div>
      </nav>
    </div>

    <p>gfdjgjdtjfdgtjm</p>
    <p>dfhdfhfhd</p>
    <p>dfhdfhfhd</p>
    <p>dfhdfhfhd</p>

    </>
  );
};
