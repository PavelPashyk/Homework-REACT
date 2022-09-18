import { Input } from "../Input";
import styles from "./style.module.css";


export const FormLogin = () => {
  return (
    <div className={styles.form}>
      <div className={styles.formBlock}>
        <form action="#">
          <p>User name</p>
          <input type="text" name="user"/>
          <p>Email</p>
          <input type="email" name="email"/>
          <p>Password</p>
          <input type="password" name="password"/>
          <p>Confirm Password</p>
          <input type="password"/>
          <input type="submit" value={"Login"}/>
        </form>
      </div>
      <p>
        If you have account, you can <span>login</span>
      </p>
    </div>
  );
};
