import { useState } from "react";
import styles from "./style.module.css";

export const Time = () => {
  const [date, setDate] = useState('');

  setInterval(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className={styles.timeBlock}>
      <p>{date}</p>
    </div>
  );
};
