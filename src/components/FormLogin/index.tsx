import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useRef,
  useState,
} from "react";
import { Container } from "../Container";
import { FormTitle } from "../FormTitle";
import { Input } from "../Input";
import styles from "./style.module.css";
import { FormBtn } from "../FormBtn";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { getUser, login } from "../../api/auth";

export const FormLogin = () => {
  const refEmail: any = useRef(null);
  const refPassword: any = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let isOk = true;
    login(email, password)
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }

        return response.json();
      })
      .then((json) => {
        if (isOk) {
          localStorage.setItem("access", json.access);
          localStorage.setItem("refresh", json.refresh);

          getUser()
            .then((response) => {
              return response.json();
            })
            .then((user) => {
              console.log(user);
              setUser(user);
              navigate("/");
            });
        } else {
          //ошибки обрабатываем
        }
      });
  };

  return (
    <Container>
      <div className={styles.form}>
        <FormTitle />
        <div className={styles.formBlock}>
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <Input
              name="email"
              className={styles.formInputStyle}
              required={true}
              refObj={refEmail}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <p>Password</p>
            <Input
              name="password"
              className={styles.formInputStyle}
              required={true}
              type="password"
              refObj={refPassword}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <FormBtn
              className={styles.formInputStyleBtn}
              onClick={() => {}}
              text={"Login"}
              btnType="submit"
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
