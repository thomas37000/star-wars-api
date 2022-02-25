import logo from "./logo.svg";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Characters />
    </div>
  );
}

export default App;
