import styles from "./style.module.css";
import { FormInnerBlock } from "../../components/FormInnerBlock";
import { Header } from "../../components/Header";

export const EmailConfirmed = () => {
  return (
    <>
      <Header />
      <FormInnerBlock
        title={"Success"}
        textUp={"Email confirmed."}
        textDown={"Your registration is now completed"}
        onClick={() => {}}
        textBtn={"Login"}
      />
    </>
  );
};
