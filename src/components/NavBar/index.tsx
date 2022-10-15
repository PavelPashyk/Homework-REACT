import { useContext, useState } from "react";
import { icoClose } from "../../assets";
import { Context } from "../../App";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  onClose: () => void;
}

export const NavBar = ({ onClose }: IProps) => {
  const { isDark, setIsDark, user, setUser } = useContext(Context);
  const [activeStyle, setActiveStyle] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    setUser(null);

    localStorage.clear();
  };

  return (
      <div className={isDark ? styles.navBarMenuDark : styles.navBarMenu}>
        <button onClick={onClose} className={styles.navBarBtn}>
          <img src={icoClose} alt="close" className={styles.closeImg} />
        </button>
        <ul className={styles.navBarList}>
          {user ? (
            <>
              <li>
                <Link to="/">All posts</Link>
              </li>
              <li>
                <Link to="/myposts">My post</Link>
              </li>
              <li>
                <Link to="/add-post">Add new post</Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
        <button className={styles.btnOut} onClick={logout}>Logout</button>
      </div>
  );
};
