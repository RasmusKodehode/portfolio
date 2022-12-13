import "./App.css";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import { Component3 } from "./components/component3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component1 />
        <Component2 />
        <Component3 />
      </header>
    </div>
  );
}

export default App;
