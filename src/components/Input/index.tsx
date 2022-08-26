import styles from "./style.module.css";

interface Props {
  value?: string | number;
  placeholder: string;
  maxlength?: number;
}

export const Input = (props: Props) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={props.maxlength}
    ></input>
  );
};
