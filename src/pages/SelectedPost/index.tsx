import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import styles from "./style.module.css";
import { IPost } from "../../types/post";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { listPosts } from "../../mocks/listPosts";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Context } from "../../App";
import { removePost } from "../../api/posts";
import { NotificationManager } from "react-notifications";

export const SelectedPost = () => {
  const papams = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${papams.id}`
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

  const handleRemovePost = () => {
    if (post?.id) {
      removePost(post.id).then((response) => {
        if (response.ok) {
          NotificationManager.success("Удаление поста", "Пост успешно удален");
          navigate(-1);
        } else {
          NotificationManager.error("Удаление поста", "Пост не удален");
        }
      });
    }
  };

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
            author={post.author}
          />
          {user?.id === post?.author ? (
            <Button
              type="btnStyleFirst"
              text={"Remove post"}
              onClick={handleRemovePost}
            />
          ) : null}
        </div>
      ) : (
        <div className={styles.blockIsLoadingSelectPost} />
      )}
    </>
  );
};
