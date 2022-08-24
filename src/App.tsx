import './App.css';
import { Button } from './components/Button';

function App() {

  const onClickPrimary = () => {
    alert("Hello 1")
  }
  const onClickSecondary = () => {
    alert("Hello 2")
  }
  const onClickSecondary2 = () => {
    alert("Hello 3")
  }

  return (
    <div className="App">
      <Button text="Primary" onClick={onClickPrimary}/>
      <Button text="Secondary" onClick={onClickSecondary}/>
      <Button text="Secondary 2" onClick={onClickSecondary2}/>
    </div>
  );
}

export default App;
