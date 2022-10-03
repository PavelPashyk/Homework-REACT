import { ChangeEventHandler, useEffect, useState } from "react";
import { listPosts } from "../../mocks/listPosts";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { FullPost } from "../FullPost";
import { PostCards } from "../PostСards/ListPost";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { Container } from "../Container";
import { Input } from "../Input";
import { fetchPosts } from "../../api/posts";

export const AllPosts = () => {
  const [allPost, setAllPost] = useState<IPost[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const navigateToPost = (id: number) => {
    navigate(`/selected-post/${id}`);
  }

  // useEffect(() => {
  //   const promise = fetch(
  //     "https://studapi.teachmeskills.by/blog/posts/?limit=12"
  //   );

  //   promise
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((value) => {
  //       console.log(value);
  //       setAllPost(value.results);
  //     });
  // }, []);

  const handleSearchText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);

    fetchPosts(searchText, allPost.length)
      .then((value) => {
        if (value.count > value.results.length) {
          setShowLoadMore(true);
        } else {
          setShowLoadMore(false);
        }

        setAllPost(value.results);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  const loadMore = () => {
    const promise = fetchPosts(searchText, allPost.length);

    promise
      .then((value) => {
        console.log(value);

        if (value.results.length + allPost.length === value.count) {
          setShowLoadMore(false);
        }

        setAllPost(allPost.concat(value.results));
      });
  };

  return (
    <Container>
      <div className={styles.innerBlockPost}>
        <div className={styles.inputSearchBlock}>
          <span className={styles.inputSearchTitle}>Search</span>
          <Input
            value={searchText}
            onChange={handleSearchText}
            placeholder="Введите текст"
            className={styles.inputSearch}
          />
        </div>
        {isLoading ? <div className={styles.blockIsLoading}/> : null}
        <PostCards posts={allPost} onClickPost={navigateToPost} />
        {showLoadMore ? (
          <div className={styles.btnNext}>
            <Button text={"Next"} onClick={loadMore} type={"btnStyleFirst"} />
          </div>
        ) : null}
      </div>
    </Container>
  );
};
