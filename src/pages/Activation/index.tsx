import styles from "./style.module.css";
import { FormInnerBlock } from "../../components/FormInnerBlock";
import { Header } from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { activateUser } from "../../api/auth";

export const Activation = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <FormInnerBlock
        title={"Активация прошла успешно"}
        textUp={"Теперь вы можете залогиниться"}
        textDown={"Спасибо"}
        onClick={navigateToLogin}
        textBtn={"Login"}
      />
    </>
  );
};
