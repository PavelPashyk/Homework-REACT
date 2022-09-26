import { Container } from "../Container";
import { FormTitle } from "../FormTitle";
import { Input } from "../Input";
import styles from "./style.module.css";

export const FormRegistration = () => {
  return (
    <Container>
      <div className={styles.form}>
        <FormTitle />
        <div className={styles.formBlock}>
          <form action="#">
            <p>User name</p>
            <Input type="text" name="user" className={styles.formInputStyle} />
            <p>Email</p>
            <Input
              type="email"
              name="email"
              className={styles.formInputStyle}
            />
            <p>Password</p>
            <Input
              type="password"
              name="password"
              className={styles.formInputStyle}
            />
            <p>Confirm Password</p>
            <Input type="password" className={styles.formInputStyle} />
            <Input
              type="submit"
              value={"Login"}
              className={styles.formInputStyleBtn}
            />
          </form>
        </div>
        <p>
          If you have account, you can <span>login</span>
        </p>
      </div>
    </Container>
  );
};
