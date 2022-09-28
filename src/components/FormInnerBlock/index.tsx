import styles from "./style.module.css";
import { Container } from "../Container";
import { FormBtn } from "../FormBtn";
import { ReactNode } from "react";

interface IProps {
  title: string;
  textUp: string;
  textDown?: string;
  children?: ReactNode;
  onClick: () => void;
  textBtn: string;
  link?: string;
}

export const FormInnerBlock = ({ title, textUp, textDown, children, link, textBtn, onClick }: IProps) => {
  return (
    <Container>
      <div className={styles.blockForm}>
        <h2 className={styles.titleForm}>{title}</h2>
        <div className={styles.textForm}>
          <p>
            {textUp}
            <a href={link} className={styles.titreForm}>{children}</a>
          </p>
          <p>{textDown}</p>
        </div>
        <FormBtn text={textBtn} onClick={onClick} />
      </div>
    </Container>
  );
};
