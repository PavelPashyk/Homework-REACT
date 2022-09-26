import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import styles from "./style.module.css";

// let timer: NodeJS.Timer | null = null;

export const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timer | null>(null);

  const onClickStart = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((state) => state + 1);
      }, 1000);
    }
  };

  const onClickStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = null;
  };

  const onClickReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = null;
    setCount(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.timerBlock}>
      <p>{count}</p>
      <div className={styles.timerBlockBtn}>
        <Button text={"Start"} onClick={onClickStart} type={"btnStyleFirst"} />
        <Button text={"Stop"} onClick={onClickStop} type={"btnStyleSecond"} />
        <Button text={"Reset"} onClick={onClickReset} type={"btnStyleThird"} />
      </div>
    </div>
  );
};
