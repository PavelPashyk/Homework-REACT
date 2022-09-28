import { Container } from "../Container";
import { FormTitle } from "../FormTitle";
import { Input } from "../Input";
import styles from "./style.module.css";

export const FormLogin = () => {
  return (
    <Container>
      <div className={styles.form}>
        <FormTitle />
        <div className={styles.formBlock}>
          <form action="#">
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
            <Input
              type="submit"
              value={"Login"}
              className={styles.formInputStyleBtn}
            />
          </form>
        </div>
        <p>
          Forgot your password? <span>Reset password</span>
        </p>
      </div>
    </Container>
  );
};
