import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { UserName } from "./components/UserName";

const onClickLogin = () => {
  alert("Hello 1");
};

const onClickSingUp = () => {
  alert("Hello 2");
};

const onClickLogout = () => {
  alert("Hello 3");
};

function App() {
  return (
    <div className="app">
      <div className="app-block block-btn">
        <Button text="Login" onClick={onClickLogin} />
        <Button text="Sing up" onClick={onClickSingUp} />
        <Button text="Logout" onClick={onClickLogout} />
      </div>
      <div className="app-block block-input">
        <Input value={5486} placeholder={"string"} maxlength={10} />
        <Input value={"Hello"} placeholder={"number"} />
        <Input placeholder={"string"} maxlength={11} />
      </div>
      <div className="app-block block-title">
        <Title text="Sign in" />
        <Title text="nSign in" />
      </div>
      <div className="app-block block-user">
        <UserName userName="Pavel Pashyk" />
        <UserName userName="Artem Nord" />
        <UserName userName="Darya Wills" />
        <UserName userName="Olga" />
      </div>
    </div>
  );
}

export default App;
