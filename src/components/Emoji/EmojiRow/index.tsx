import { IEmoji } from "../../../types/emoji";
import styles from "./style.module.css";

export const EmojiRow = ({title, symbol}: IEmoji) => {
  return (
    <li className={styles.emojiItem}>
      <p className={styles.emojiStyle}>{symbol}</p>
      <p>{title}</p>
    </li>
  );
};
