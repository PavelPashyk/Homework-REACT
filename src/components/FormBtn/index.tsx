import styles from "./style.module.css";

interface IProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  btnType?: "button" | "submit" | "reset" | undefined;
}

export const FormBtn = ({ btnType, text, onClick, disabled}: IProps) => {
  return (
    <button
      className={styles.formBtn}
      onClick={onClick}
      disabled={disabled}
      type={btnType}
    >
      {text}
    </button>
  );
};