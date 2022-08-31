import { IPost } from "../../../types/post";
import { ItemPost } from "../ItemPost";
import styles from "./style.module.css";

// const generateUniqId = () => {
//   return "id_" + Math.random().toString(16).slice(2);
// };

interface IProps {
  posts: IPost[];
}

export const PostCards = (props: IProps) => {
  return (
    <div className={styles.postBlockBasic}>
      {props.posts.map((item) => {
        return (
          <ItemPost
            title={item.title}
            imgage={item.imgage}
            text={item.text}
            data={item.data}
            id={item.id}
            lesson_num={item.lesson_num}
            autor={item.autor}
          />
        );
      })}
    </div>
  );
};
