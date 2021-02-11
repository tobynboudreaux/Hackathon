import logo from "./logo.svg";
import "./App.css";
import { ItemCard } from "./components/ItemCard";
import { ItemContainer } from "./components/ItemContainer";

function App() {
  return (
    <div className="App">
      <header>
        <h2>App Component</h2>
      </header>
      <div>
        <ItemContainer />
        {/* <ItemCard /> */}
      </div>
    </div>
  );
}

export default App;
