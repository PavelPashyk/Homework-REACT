import { useContext } from "react";
import { Context } from "../../../App";
import { IPost } from "../../../types/post";
import { Button } from "../../Button";
import { Container } from "../../Container";
import { ItemPost } from "../ItemPost";
import styles from "./style.module.css";

// const generateUniqId = () => {
//   return "id_" + Math.random().toString(16).slice(2);
// };

interface IProps {
  posts: IPost[];
}

export const PostCards = (props: IProps) => {
  const {isDark, setIsDark} = useContext(Context);

  return (
    <Container>
      <div>
        <div className={isDark ? styles.postBlockBasicDark : styles.postBlockBasic}>
        {props.posts.map((item) => {
          return (
            <ItemPost
              title={item.title}
              image={item.image}
              text={item.text}
              date={item.date}
              id={item.id}
              lesson_num={item.lesson_num}
              autor={item.autor}
            />
          );
        })}
      </div>
        <div className={styles.btnNext}>
          <Button text={"Next"} onClick={() => { } } type={"btnStyleFirst"} />
        </div>
      </div>
      
    </Container>
  );
};
