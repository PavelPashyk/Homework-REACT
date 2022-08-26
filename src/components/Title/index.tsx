import styles from "./style.module.css"

interface Props {
text: string;
}

export const Title = (props: Props) => {
  return (
    <div className={styles.textBlock}>
      <h1 className={styles.textStyle}>{props.text}</h1>
    </div>
  );
};