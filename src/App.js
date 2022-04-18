import "./App.css";
import "./Components/PopupStyle.css";
import './Components/CardBoxStyle.css';
import './Components/CardboxLeftStyle.css';
import './Components/ContainerStyle.css';
import './Components/ButtonStyle.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CardBoxes from "./Components/CardBoxes";
import Welcome from "./Components/Welcome";
const rootElement = document.getElementById("root");
function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardBoxes />} />
        <Route path="Welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  )
}
export default App;


