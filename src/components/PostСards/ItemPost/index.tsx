import { IPost } from "../../../types/post";
import styles from "./style.module.css";
import image from "./no-photo.jpg";
import { useContext } from "react";
import { Context } from "../../../App";

interface IProps extends IPost {
  isLarge?: boolean;
}

export const ItemPost = (props: IProps) => {
  const { isDark, setIsDark } = useContext(Context);

  return (
    <div
      className={`${isDark ? styles.postBlockDark : styles.postBlock} ${
        props.isLarge ? styles.largePostBlock : ""
      }`}
    >
      <div
        className={`${styles.postBlockInner} ${
          props.isLarge ? styles.largePostBlockInner : ""
        }`}
      >
        <div
          className={`${styles.postImg} ${
            props.isLarge ? styles.largePostImg : ""
          }`}
        >
          <img
            src={props.image ? props.image : image}
            alt="Фотография"
            title={props.image ? "Фотография" : "Фотография отсутствует ((("}
          />
        </div>
        <div className={styles.postContentBlock}>
          <h2 className={styles.postTitle}>{props.title}</h2>
          <p className={styles.postText}>{props.text}</p>
          <p className={styles.postDate}>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
