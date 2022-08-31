import styles from "./style.module.css";

type stylesBlockText = "styleBlockTextOne" | "styleBlockTextTwo";
type stylesText = "styleTextOne" | "styleTextTwo";

interface IProps {
  text: string;
  type: stylesBlockText;
  typeText: stylesText;
}

const getStylesBlockText = (type: stylesBlockText) => {
  if (type === "styleBlockTextOne") {
    return styles.styleBlockTextOne;
  } else {
    return styles.styleBlockTextTwo;
  }
};

const getStylesText = (typeText: stylesText) =>
  typeText === "styleTextOne" ? styles.styleTextOne : styles.styleTextTwo;

export const Title = (props: IProps) => {
  return (
    <div className={getStylesBlockText(props.type)}>
      <h1 className={getStylesText(props.typeText)}>{props.text}</h1>
    </div>
  );
};
