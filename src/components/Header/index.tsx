import { useContext, useState } from "react";
import { icoMenu, icoUser } from "../../assets";
import { Context } from "../../App";
import { NavBar } from "../NavBar";
import styles from "./style.module.css";

export const Header = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const {user} = useContext(Context);

  const openNavBar = () => {
    setIsNavBarVisible(true);
  };

  const closeNavBar = () => {
    setIsNavBarVisible(false);
  };

  const { isDark, setIsDark } = useContext(Context);

  const toggleBtnThema = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.headerMenu}>
          <div className={isDark ? styles.headerTopDark : styles.headerTop}>
            <div className={styles.headerBlock}>
              <button className={styles.headerBtn} onClick={openNavBar}>
                <img src={icoMenu} alt="menu" className={styles.menuBtnImg} />
              </button>
              <img src={icoUser} alt="user" className={styles.menuTitleImg} />
              {user ? <h2 className={styles.headerTitle}>{user?.username}</h2> : null}
            </div>
            <button
              className={isDark ? styles.btnThemaDarc : styles.btnThema}
              onClick={toggleBtnThema}
            >
              {isDark ? "Светлая тема" : "Тёмная тема"}
            </button>
          </div>
          <div className={styles.headerBoby}>
            {isNavBarVisible ? <NavBar onClose={closeNavBar} /> : null}
          </div>
        </nav>
      </div>
    </>
  );
};
