import { Header } from "../../components/Header";
import { MyPostsList } from "../../components/MyPostsList";
import styles from "./style.module.css";

export const MyPosts = () => {
  return (
    <>
      <Header />
      <MyPostsList />
    </>
  );
};