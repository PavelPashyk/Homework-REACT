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
import { RegisterSuccuss } from "./pages/RegisterSuccuss";


const onClickLogin = () => {
  alert("Hello 1");
};

const onClickSingUp = () => {
  alert("Hello 2");
};

const onClickLogout = () => {
  alert("Hello 3");
};

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}>({ isDark: false, setIsDark: () => {} });

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        {/* <div className="app-block block-btn">
          <Button text="Login" onClick={onClickLogin} type="btnStyleFirst" />
          <Button
            text="Sing up"
            onClick={onClickSingUp}
            disabled={false}
            type="btnStyleSecond"
          />
          <Button
            text="Logout"
            onClick={onClickLogout}
            disabled={true}
            type="btnStyleThird"
          />
        </div> */}
        {/* <div className="app-block block-input">
          <Input value={5486} placeholder={"string"} maxlength={10} />
          <Input value={"Hello"} placeholder={"number"} />
          <Input placeholder={"string"} maxlength={11} />
        </div> */}
        {/* <div className="app-block block-title">
          <Title
            text="Sign in"
            type="styleBlockTextOne"
            typeText="styleTextOne"
          />
          <Title
            text="Sign in"
            type="styleBlockTextTwo"
            typeText="styleTextTwo"
          />
          <Title
            text="Sign in"
            type="styleBlockTextOne"
            typeText="styleTextTwo"
          />
          <Title
            text="Sign in"
            type="styleBlockTextTwo"
            typeText="styleTextOne"
          />
        </div> */}
        {/* <div className="app-block block-user">
          <UserName userName="Pavel Pashyk" isDark={true} />
          <UserName userName="Artem Nord" />
          <UserName userName="Darya Wills" isDark={true} />
          <UserName userName="Olga" />
        </div> */}
        {/* <div className="app-block block-clicker">
          <Clicker />
        </div> */}
        {/* <div className="app-block block-post">
          <PostCards posts={listPosts} />
        </div> */}
        {/* <div className="app-block block-emoji">
          <EmojiList emojies={emojies} />
        </div> */}
        {/* <div className="app-block block-todo">
          <TodoList />
        </div> */}
        {/* <div className="app-block block-converter">
          <Converter rate$={2.52} rateByn={0.4} />
        </div> */}
        {/* <div className="app-block block-time">
          <Time />
        </div> */}
        {/* <div className="app-block block-main">
          <Header />
        </div> */}
        {/* <div className="app-block block-form">
          <FormLogin />
        </div> */}
        {/* <div className="app-block block-post">
          <AllPosts />
        </div> */}
        {/* <div className="app-block block-time">
          <Timer />
        </div> */}
        <div className="block-main">
          <>
            <Context.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
              <RootRouter />
            </Context.Provider>
          </>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
