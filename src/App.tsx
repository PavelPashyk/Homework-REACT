import { createContext, useEffect, useState } from "react";
import "./App.css";
import "react-notifications/lib/notifications.css";
import { AllPosts } from "./components/AllPosts";
import { Button } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { Converter } from "./components/Converter";
import { EmojiList } from "./components/Emoji/EmojiList";
import { FormLogin } from "./components/FormLogin";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PostCards } from "./components/PostСards/ListPost";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList/TodoBox";
import { UserName } from "./components/UserName";
import { emojies } from "./mocks/emojies";
import { listPosts } from "./mocks/listPosts";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import { RegisterSuccess } from "./pages/RegisterSuccess";
import { IUser } from "./types/auth";
import { getUser } from "./api/auth";
import { NotificationContainer } from "react-notifications";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
});

const access = localStorage.getItem("access");

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);

  useEffect(() => {
    let isOk = true;

    if (access) {
      getUser()
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }

          return response.json();
        })
        .then((json) => {
          if (isOk) {
            setUser(json);
          }
        })
        .finally(() => {
          setIsReady(true);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", String(isDark));
  }, [isDark]);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="block-main">
          <Context.Provider
            value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
          >
            {isReady ? <RootRouter /> : null}
          </Context.Provider>
        </div>
      </div>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
