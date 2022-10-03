import { Route, Routes } from "react-router-dom";
import { FullPost } from "../components/FullPost";
import { listPosts } from "../mocks/listPosts";
import { Activation } from "../pages/Activation";
import { EmailConfirmed } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
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
    </Routes>
  );
};
