import { useEffect, useState } from "react";
import { listPosts } from "../../mocks/listPosts";
import { IPost } from "../../types/post";
import { Button } from "../Button";
import { FullPost } from "../FullPost";
import { PostCards } from "../PostСards/ListPost";

import styles from "./style.module.css";

export const AllPosts = () => {
  const [allPost, setAllPost] = useState<IPost[]>([]);

  useEffect(() => {
    const promise = fetch(
      "https://studapi.teachmeskills.by/blog/posts/?limit=8&"
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        console.log(value);
        setAllPost(value.results);
      });
  }, []);

  return (
    <>
      <>
        <PostCards posts={allPost} />
      </>
      {/* <FullPost {...listPosts[0]} /> */}
    </>
  );
};
