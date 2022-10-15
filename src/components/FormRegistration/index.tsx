import { error } from "console";
import { ChangeEventHandler, useState } from "react";
import { getUser, registerUser } from "../../api/auth";
import {
  validateEmail,
  validateUser,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation";
import { Container } from "../Container";
import { FormTitle } from "../FormTitle";
import { FormBtn } from "../FormBtn";
import { Input } from "../Input";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

export const FormRegistration = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateUser(event.target.value);
    if (error) {
      setUserError(error);
    } else {
      setUserError("");
    }

    setUser(event.target.value);
  };

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
    }

    setEmail(event.target.value);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError("");
    }

    setPassword(event.target.value);
  };

  const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateConfirmPassword(event.target.value, password);
    if (error) {
      setConfirmError(error);
    } else {
      setConfirmError("");
    }

    setConfirm(event.target.value);
  };

  const onClickLogin = () => {
    setError("");
    const errors = {
      user: validateUser(user),
      email: validateEmail(email),
      password: validateUser(password),
      confirm: validateConfirmPassword(password, confirm),
    };

    setUserError(errors.user);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setConfirmError(errors.confirm);

    const isValidForm = Object.values(errors).every((error) => error === "");
    if (isValidForm) {
      const promise = registerUser(user, email, password);
      let isOk = true;

      promise
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
            navigate("/register-success");
          } else {
            //обработка ошибок

            if (json?.email?.includes("user with this Email already exists.")) {
              setError("Пользователь с таким email уже существует");
              return;
            }

            if (
              json?.username?.includes(
                "A user with that username already exists."
              )
            ) {
              setError("Пользователь с таким username уже существует");
              return;
            }

            //обработка пороля

            // "This password is too short. It must contain at least 8 characters."

            // "This password is too common."

            // "This password is entirely numeric."
          }
        });
    }
  };

  return (
    <Container>
      <div className={styles.form}>
        <FormTitle />
        <div className={styles.formBlock}>
          <form action="#">
            <p>User name</p>
            <Input
              type="text"
              name="user"
              className={styles.formInputStyle}
              value={user}
              onChange={handleUser}
              error={userError}
            />
            <p>Email</p>
            <Input
              type="email"
              name="email"
              className={styles.formInputStyle}
              value={email}
              onChange={handleEmail}
              error={emailError}
            />
            <p>Password</p>
            <Input
              type="password"
              name="password"
              className={styles.formInputStyle}
              value={password}
              onChange={handlePassword}
              error={passwordError}
              minLength={8}
              maxlength={30}
            />
            <p>Confirm Password</p>
            <Input
              type="password"
              className={styles.formInputStyle}
              value={confirm}
              onChange={handleConfirm}
              error={confirmError}
            />
            <p className={styles.textErrorForm}>{error}</p>
            <FormBtn
              className={styles.formInputStyleBtn}
              onClick={onClickLogin}
              text={"Register"}
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
