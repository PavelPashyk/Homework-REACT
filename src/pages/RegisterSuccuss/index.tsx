import { FormInnerBlock } from "../../components/FormInnerBlock";
import { Header } from "../../components/Header";
import styles from "./style.module.css";

export const RegisterSuccuss = () => {
  return (
    <>
      <Header />
      <FormInnerBlock
        title={"Registration Confirmation"}
        textUp={
          "Please activate your account with the activation link in the email "
        }
        textDown={"Please, check your email"}
        children={"test@gmail.com"}
        link={"#"}
        onClick={() => {}}
        textBtn={"Home"}
      />
    </>
  );
};
