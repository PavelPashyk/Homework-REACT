import { useContext } from "react";
import { icoClose } from "../../assets";
import { Context } from "../../App";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark } = useContext(Context);

  return (
    <>
      <div className={isDark ? styles.navBarMenuDark : styles.navBarMenu}>
        <button onClick={onClose} className={styles.navBarBtn}>
          <img src={icoClose} alt="close" className={styles.closeImg} />
        </button>
        <ul className={styles.navBarList}>
          <li>
            <Link to="/">All posts</Link>
          </li>
          <li>
            <Link to="/login">
              <a href="#">Login</a>
            </Link>
          </li>
          <li>
            <Link to="/registration">
              <a href="#">
                <a href="#">Registration</a>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
