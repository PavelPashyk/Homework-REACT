import { useEffect } from "react";
import { Button } from "../../Button";
import styles from "./style.module.css";

type todoItemStyles = "TodoItemBlock" | "TodoItemBlock2";

const getTodoItemStyles = (type: todoItemStyles) => {
  if (type === "TodoItemBlock") {
    return styles.TodoItemBlock;
  } else {
    return styles.TodoItemBlock2;
  }
};

export interface ITodoItem {
  text: string;
  onClickRemove: () => void;
  type: todoItemStyles;
  checked: boolean;
  onClickChecked: () => void;
}

export const TodoItem = (props: ITodoItem) => {
  return (
    <div className={getTodoItemStyles(props.type)}>
      <div className={styles.TodoItemHeader}>
        <input
          type={"checkbox"}
          checked={props.checked}
          onChange={props.onClickChecked}
        />
        <h3>Заметка</h3>
        <Button
          text="Remove"
          onClick={props.onClickRemove}
          type={"btnStyleFirst"}
        />
      </div>
      <p className={styles.TodoItemBody}>{props.text}</p>
    </div>
  );
};
