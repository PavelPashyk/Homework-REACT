import { useContext } from "react";
import { Context } from "../../../App";
import { listPosts } from "../../../mocks/listPosts";
import { IPost } from "../../../types/post";
import { Button } from "../../Button";
import { Container } from "../../Container";
import { FullPost } from "../../FullPost";
import { ItemPost } from "../ItemPost";
import styles from "./style.module.css";

// const generateUniqId = () => {
//   return "id_" + Math.random().toString(16).slice(2);
// };

interface IProps {
  posts: IPost[];
  onClickPost: (id: number) => void;
}

export const PostCards = (props: IProps) => {
  const { isDark, setIsDark } = useContext(Context);

  return (
    <>
      <div>
        <div
          className={isDark ? styles.postBlockBasicDark : styles.postBlockBasic}
        >
          {props.posts.map((item) => {
            const clickPost = () => {
              props.onClickPost(item.id);
            };

            const loadMore = () => {};

            return (
              <div onClick={clickPost}>
                <ItemPost
                  title={item.title}
                  image={item.image}
                  text={item.text}
                  date={item.date}
                  id={item.id}
                  lesson_num={item.lesson_num}
                  autor={item.autor}
                />
              </div>
            );
          })}
        </div>
        {/* <FullPost id={listPosts[0].id} image={listPosts[0].image} date={listPosts[0].date} lesson_num={listPosts[0].lesson_num} text={listPosts[0].text} title={listPosts[0].title} autor={listPosts[0].autor}/> */}
        {/* <FullPost {...listPosts[0]}/> */}
      </div>
    </>
  );
};
