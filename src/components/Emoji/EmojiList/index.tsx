import styles from "./style.module.css";
import { EmojiRow } from "../EmojiRow";
import { IEmoji } from "../../../types/emoji";
import { Input } from "../../Input";
import { ChangeEventHandler, useState } from "react";
import { render } from "@testing-library/react";

interface IProps {
  emojies: IEmoji[];
}

export const EmojiList = (props: IProps) => {
  const [text, setText] = useState("");

  const handlendonChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  let filteredEmojies = props.emojies.filter((item) => {
    if (
      item.keywords.toLowerCase().includes(text.toLowerCase()) ||
      item.title.toLowerCase().includes(text.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <div className={styles.InputSearch}>
        <Input
          value={text}
          placeholder={"Введите текст"}
          onChange={handlendonChange}
        />
      </div>
      <ul className={styles.emojiBlock}>
        {filteredEmojies.map((item) => {
          return (
            <EmojiRow
              title={item.title}
              symbol={item.symbol}
              keywords={item.keywords}
            />
          );
        })}
      </ul>
    </div>
  );
};
