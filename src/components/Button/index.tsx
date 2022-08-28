import styles from "./style.module.css";

type btnStyles = "btnStyleFirst" | "btnStyleSecond" | "btnStyleThird";
interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type: btnStyles;
}

const getStyleBtn = (type: btnStyles) => {
  if (type === "btnStyleFirst") {
    return styles.btnStyleFirst;
  } else if (type === "btnStyleSecond") {
    return styles.btnStyleSecond;
  } else if (type === "btnStyleThird") {
    return styles.btnStyleThird;
  }
};

export const Button = (props: Props) => {
  return (
    <button
      className={`${styles.btn} ${getStyleBtn(props.type)}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
