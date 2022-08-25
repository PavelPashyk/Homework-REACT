import styles from "./style.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

export const Button = (props: Props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
