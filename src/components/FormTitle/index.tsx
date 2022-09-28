import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

export const FormTitle = () => {
  return (
    <>
      <div className={styles.formTitle}>
        <NavLink
          to={"/registration"}
          className={({ isActive }) =>
            isActive ? styles.formTitleActiv : styles.formTitleNotActiv
          }
        >
          <p>Registration</p>
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive ? styles.formTitleActiv : styles.formTitleNotActiv
          }
        >
          <p>Login</p>
        </NavLink>
      </div>
    </>
  );
};
