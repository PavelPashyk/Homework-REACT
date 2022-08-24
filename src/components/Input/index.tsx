import style from "./style.module.css";

interface Props {
   value: number;
}

export const Input = (props: Props) => {
   return <input className={style.input} value={props.value}></input>
};