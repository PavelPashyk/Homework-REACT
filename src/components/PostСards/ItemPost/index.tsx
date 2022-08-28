import styles from "./style.module.css";

interface Props {
  textTitle: string;
  text?: string;
  data: string;
  img?: string;
}

export const ItemPost = (props: Props) => {
  return (
    <div className={styles.postBlock}>
      <div className={styles.postBlockInner}>
        <div className={styles.postImg}>
          <img
            src={
              props.img
                ? props.img
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuY9Id_sYMNVbgMYXj3Huo4cSaBHt9HL7TKzLCYONNaBxNjZlYS5VwrRq8xgvZDgTz44&usqp=CAU"
            }
            alt="Фотография"
            title={props.img ? "Фотография" : "Фотография отсутствует ((("}
          />
        </div>
        <div className={styles.postContentBlock}>
          <h2 className={styles.postTitle}>{props.textTitle}</h2>
          <p className={styles.postText}>{props.text}</p>
          <p className={styles.postDate}>{props.data}</p>
        </div>
      </div>
    </div>
  );
};
