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
  onClick?: () => void;
  error?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  required?: boolean;
  refObj?: any;

}

export const Input = (props: IProps) => {
  return (
    <label className={styles.blockInput}>
      <input
      className={`${styles.input} ${props.className} ${props.error ? styles.error : ""}`}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={props.maxlength}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onFocus}
      type={props.type}
      name={props.name}
      required={props.required}
      ref={props.refObj}
    ></input>
    <p className={styles.errorText}>{props.error}</p>
    </label>
    
  );
};
