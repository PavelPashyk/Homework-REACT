import { useEffect, useState } from "react";
import { IPost } from "../../types/post";
import { PostCards } from "../PostСards/ListPost";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { Container } from "../Container";

import { fetchMyPosts } from "../../api/posts";

export const MyPostsList = () => {
  const [allPost, setAllPost] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMyPosts()
      .then((values) => {
        if (values?.status === 404) {
          setAllPost([]);
        } else {
          setAllPost(values);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const navigateToPost = (id: number) => {
    navigate(`/selected-post/${id}`);
  };

  return (
    <Container>
      <div className={styles.innerBlockPost}>
        {isLoading ? <div className={styles.blockIsLoading} /> : null}
        <PostCards posts={allPost} onClickPost={navigateToPost} />
      </div>
    </Container>
  );
};
