import { ReactNode, useContext } from "react";
import { Context } from "../../App";
import styles from "./style.module.css";

interface IProps {
  children: ReactNode;
}

export const Container = (props: IProps) => {
  const { isDark, setIsDark } = useContext(Context);

  return (
    <div className={isDark ? styles.bodyBlockDark : styles.bodyBlock}>
      {props.children}
    </div>
  );
};
