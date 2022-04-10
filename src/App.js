import "./App.css";
import './Components/CardBoxStyle.css';
import './Components/CardboxLeftStyle.css';
import "./Components/PopupStyle.css";
import CardBoxes from "./Components/CardBoxes";
import Navbar from "./Components/Navbar";
import CardBoxLef from "./Components/CardBoxLef";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <CardBoxes />
      <CardBoxLef para = "Productivity soars when a computer and its users interact at a pace 400ms that ensures that neither has to wait on the other. "
      head = "Doherty Threshold" />
      {/* <CardBoxes head = "Hick's Law"/> */}
      {/* <CardBoxLef /> */}
      {/* <CardBoxes /> */}
    </div>
  );
}

export default App;
