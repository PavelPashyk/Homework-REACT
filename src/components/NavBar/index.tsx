import { icoClose } from "../../assets";
import styles from "./style.module.css";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({onClose}: IProps) => {
  return (
    <>
      <div className={styles.navBarMenu}>
          <button onClick={onClose} className={styles.navBarBtn}>
            <img src={icoClose} alt="close" className={styles.closeImg} />
          </button>
          <ul className={styles.navBarList}>
            <li>
              <a href="#">All posts</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
          </ul>
      </div>
    </>
  );
};