import "./App.css";
import './Components/CardBoxStyle.css';
import "./Components/PopupStyle.css";
import CardBoxes from "./Components/CardBoxes";
import Navbar from "./Components/Navbar";
import CardBoxLef from "./Components/CardBoxLef";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CardBoxes />
      <CardBoxLef />
    </div>
  );
}

export default App;
