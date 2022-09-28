import { Route, Routes } from "react-router-dom";
import { EmailConfirmed } from "../pages/EmailConfirmed";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterSuccuss } from "../pages/RegisterSuccuss";
import { Registration } from "../pages/Registration";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/register-succuss" element={<RegisterSuccuss />} />
      <Route path="/email-confirmed" element={<EmailConfirmed />} />
    </Routes>
  );
};
