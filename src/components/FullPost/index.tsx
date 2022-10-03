import { ItemPost } from "../PostСards/ItemPost";
import { IPost } from "../../types/post";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

import { Container } from "../Container";
import { useEffect, useState } from "react";
import { Button } from "../Button";

export const FullPost = (props: IPost) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className={styles.itemBack}>
        <div>
          <ItemPost
            isLarge={true}
            text={props.text}
            image={props.image}
            id={props.id}
            date={props.date}
            lesson_num={props.lesson_num}
            title={props.title}
            autor={props.autor}
          />
        </div>
        <div className={styles.btnBack}>
          <Button
            text={"Back"}
            onClick={navigateToHome}
            type={"btnStyleFirst"}
          />
        </div>
      </div>
    </Container>
  );
};
