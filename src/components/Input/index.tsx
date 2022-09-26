import { ChangeEventHandler } from "react";
import styles from "./style.module.css";

interface IProps {
  value?: string | number;
  placeholder?: string;
  maxlength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  name?: string;
  className?: string;
}

export const Input = (props: IProps) => {
  return (
    <input
      className={`${styles.input} ${props.className}`}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={props.maxlength}
      onChange={props.onChange}
    ></input>
  );
};
