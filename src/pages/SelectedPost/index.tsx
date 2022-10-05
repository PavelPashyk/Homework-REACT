import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import styles from "./style.module.css";
import { IPost } from "../../types/post";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listPosts } from "../../mocks/listPosts";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export const SelectedPost = () => {
  // const itemPost = listPosts[1];

  const papam = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${papam.id}`
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        console.log(value);
        setPost(value);
      });
  }, []);

  return (
    <>
      <Header />
      {post ? (
        <div>
          <FullPost
            id={post.id}
            image={post.image}
            text={post.text}
            date={post.date}
            lesson_num={post.lesson_num}
            title={post.title}
            autor={post.autor}
          />
        </div>
      ) : (
        <div className={styles.blockIsLoadingSelectPost}/>
      )}
    </>
  );
};
