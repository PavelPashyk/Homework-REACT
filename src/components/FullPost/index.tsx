import { ItemPost } from "../PostСards/ItemPost";
import { IPost } from "../../types/post";
import styles from "./style.module.css";

export const FullPost = (props: IPost) => {
  return <ItemPost {...props} isLarge={true} />;
};
