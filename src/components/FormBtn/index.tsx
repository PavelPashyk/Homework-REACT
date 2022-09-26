import styles from "./style.module.css";

interface IProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const FormBtn = ({ text, onClick, disabled}: IProps) => {
  return (
    <button
      className={styles.formBtn}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};