import { IPost } from "../../../types/post";
import styles from "./style.module.css";
import image from "./no-photo.jpg";

export const ItemPost = (props: IPost) => {
  return (
    <div className={styles.postBlock}>
      <div className={styles.postBlockInner}>
        <div className={styles.postImg}>
          <img
            src={props.imgage ? props.imgage : image}
            alt="Фотография"
            title={props.imgage ? "Фотография" : "Фотография отсутствует ((("}
          />
        </div>
        <div className={styles.postContentBlock}>
          <h2 className={styles.postTitle}>{props.title}</h2>
          <p className={styles.postText}>{props.text}</p>
          <p className={styles.postDate}>{props.data}</p>
        </div>
      </div>
    </div>
  );
};
