import { ChangeEventHandler, useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { TodoItem } from "../TodoItem";
import styles from "./style.module.css";

interface ITodo {
  id: string;
  text: string;
  checked: boolean;
}

const generateUniqId = () => {
  return "id_" + Math.random().toString(16).slice(2);
};

const numberRandom = () => {
  return Math.floor(Math.random() * 10) + 2;
};

export const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const addTodo = () => {

    const newTodo = {
      text: text,
      id: generateUniqId(),
      checked: false,
    };

    const newTodos = todos.concat([newTodo]);
    setTodos(newTodos);
    setText("");
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((element) => {
      if (element.id === id) {
        return false;
      }
      return true;
    });

    setTodos(newTodos);
  };

  const checkTodo = (id: string) => {
    const newTodos = todos.map((el) => {
      if (el.id === id) {
        if (el.checked) {
          el.checked = false;
        } else {
          el.checked = true;
        }
        return el
      }
      return el;
    });

    setTodos(newTodos);
  };

  return (
    <div className={styles.TodoBox}>
      <div className={styles.TodoBoxHeader}>
        <h2>Мои заметки</h2>
        <div className={styles.TodoBoxHeaderIneer}>
          <Input
            placeholder={"Введите текст"}
            value={text}
            onChange={handleOnChange}
          />
          <Button text={"Add"} onClick={addTodo} type={"btnStyleThird"} disabled={text.length === 0 ? true : false}/>
        </div>
      </div>
      <div className={styles.TodoBoxBody}>
        {todos.map((item) => {
          const onClickRemoveTodoItem = () => {
            removeTodo(item.id);
          };

          const onClickCheckedInput = () => {
            checkTodo(item.id)
          };

          return (
            <TodoItem
              key={item.id}
              text={item.text}
              onClickRemove={onClickRemoveTodoItem}
              type={
                +numberRandom() % 2 === 0 ? "TodoItemBlock" : "TodoItemBlock2"
              }
              checked={item.checked}
              onClickChecked={onClickCheckedInput}
            />
          );
        })}
      </div>
    </div>
  );
};
