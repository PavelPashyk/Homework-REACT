import styles from "./style.module.css";
import { FormInnerBlock } from "../../components/FormInnerBlock";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const EmailConfirmed = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <FormInnerBlock
        title={"Success"}
        textUp={"Email confirmed."}
        textDown={"Your registration is now completed"}
        onClick={navigateToHome}
        textBtn={"Login"}
      />
    </>
  );
};
