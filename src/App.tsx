import { createContext, useState } from "react";
import "./App.css";
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

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: any) => {},
});

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="block-main">
          <Context.Provider
            value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
          >
            <RootRouter />
          </Context.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
