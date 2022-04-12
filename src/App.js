import "./App.css";
import "./Components/PopupStyle.css";
import './Components/CardBoxStyle.css';
import './Components/CardboxLeftStyle.css';
import './Components/ContainerStyle.css';
import './Components/ButtonStyle.css';
import CardBoxes from "./Components/CardBoxes";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <CardBoxes para = "Productivity soars when a computer and its users interact at a pace 400ms that ensures that neither has to wait on the other. "
      head = "Doherty Threshold"/> */}
      <Welcome />
    </div>
  );
}

export default App;
