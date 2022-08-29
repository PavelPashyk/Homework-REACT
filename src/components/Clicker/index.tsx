import { useState } from "react";
import styles from "./style.module.css";
import { Button } from "../Button";

export const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  const onClickPlus = () => {
    setClickCount(clickCount + 1);
  };

  const onClickMinus = () => {
    setClickCount(clickCount - 1);
  };

  return (
    <div className={styles.stylesBlockClicker}>
      <Button
        text={"-"}
        onClick={onClickMinus}
        type="btnStyleSecond"
        disabled={clickCount <= 0 ? true : false}
      />
      <h2>{clickCount}</h2>
      <Button
        text={"+"}
        onClick={onClickPlus}
        type="btnStyleFirst"
        disabled={clickCount < 10 ? false : true}
      />
    </div>
  );
};
