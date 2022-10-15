import { ReactNode, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../App";
import { FullPost } from "../components/FullPost";
import { MyPostsList } from "../components/MyPostsList";
import { listPosts } from "../mocks/listPosts";
import { Activation } from "../pages/Activation";
import { AddPost } from "../pages/AddPost";
import { EmailConfirmed } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { MyPosts } from "../pages/MyPosts";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { Registration } from "../pages/Registration";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/email-confirmed" element={<EmailConfirmed />} />
      <Route path="/selected-post/:id" element={<SelectedPost />} />
      <Route path="/activate/:uid/:token" element={<Activation />} />
      <Route path="/add-post" element={useLoginGuard(<AddPost />)} />
      <Route path="/myposts" element={useLoginGuard(<MyPosts />)} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

const useLoginGuard = (component: ReactNode) => {
  const { user } = useContext(Context);

  if (user) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
};
