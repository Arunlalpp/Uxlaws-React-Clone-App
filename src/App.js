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
import Page_1 from "./InnerPages/Page_1";
import Page_2 from "./InnerPages/Page_2";
import Page_3 from "./InnerPages/Page_3";
import Page_4 from "./InnerPages/Page_4";
import Page_5 from "./InnerPages/Page_5";
import Page_6 from "./InnerPages/Page_6";
import Page_7 from "./InnerPages/Page_7";
const rootElement = document.getElementById("root");
function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardBoxes />} />
        <Route path="Page_1" element={<Page_1 />} />
        <Route path="Page_2" element={<Page_2 />} />
        <Route path="Page_3" element={<Page_3 />} />
        <Route path="Page_4" element={<Page_4 />} />
        <Route path="Page_5" element={<Page_5 />} />
        <Route path="Page_6" element={<Page_6 />} />
        <Route path="Page_7" element={<Page_7 />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  )
}
export default App;


