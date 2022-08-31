import { IEmoji } from "../../../types/emoji";
import styles from "./style.module.css";

export const EmojiRow = (props: IEmoji) => {
  return (
    <li className={styles.emojiItem}>
      <p className={styles.emojiStyle}>{props.symbol}</p>
      <p>{props.title}</p>
    </li>
  );
};
