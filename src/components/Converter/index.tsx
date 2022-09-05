import { ChangeEventHandler, useState } from "react";
import { Input } from "../Input";
import styles from "./style.module.css";

export interface IProps {
  rate$: number;
  rateByn: number;
}

export const Converter = ({ rate$, rateByn }: IProps) => {
  const [number$, setNumber$] = useState("");

  const handlendOnChange$: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNumber$(event.target.value);
  };

  let numberConverter$ = +number$ * rate$;

  if (isNaN(+number$)) {
    setNumber$("");
  }

  const [numberByn, setNumberByn] = useState("");

  const handlendOnChangeByn: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNumberByn(event.target.value);
  };

  let numberConverterByn = +numberByn * rateByn;

  if (isNaN(+numberByn)) {
    setNumberByn("");
  }

  return (
    <>
      <div className={styles.currencyBlock}>
        <h2>Live currency converter</h2>
        <fieldset>
          <legend>Enter currency in $, USD:</legend>
          <Input
            placeholder={"0"}
            value={numberByn ? numberConverterByn : number$}
            onChange={handlendOnChange$}
          />
        </fieldset>
        <fieldset>
          <legend>Enter currency in BYN:</legend>
          <Input
            placeholder={"0"}
            value={number$ ? numberConverter$ : numberByn}
            onChange={handlendOnChangeByn}
          />
        </fieldset>
      </div>
    </>
  );
};
