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
import Page_8 from "./InnerPages/Page_8";
import Page_9 from "./InnerPages/Page_9";
import Page_10 from "./InnerPages/Page_10";
import Page_11 from "./InnerPages/Page_11";
import Page_12 from "./InnerPages/Page_12";
import Page_13 from "./InnerPages/Page_13";
import Page_14 from "./InnerPages/Page_14";
import Page_15 from "./InnerPages/Page_15";
import Page_16 from "./InnerPages/Page_16";
import Page_17 from "./InnerPages/Page_17";
import Page_18 from "./InnerPages/Page_18";
import Page_19 from "./InnerPages/Page_19";
import Page_20 from "./InnerPages/Page_20";
const rootElement = document.getElementById("root");



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
        <Route path="Page_8" element={<Page_8 />} />
        <Route path="Page_9" element={<Page_9 />} />
        <Route path="Page_10" element={<Page_10 />} />
        <Route path="Page_11" element={<Page_11 />} />
        <Route path="Page_12" element={<Page_12 />} />
        <Route path="Page_13" element={<Page_13 />} />
        <Route path="Page_14" element={<Page_14 />} />
        <Route path="Page_15" element={<Page_15 />} />
        <Route path="Page_16" element={<Page_16 />} />
        <Route path="Page_17" element={<Page_17 />} />
        <Route path="Page_18" element={<Page_18 />} />
        <Route path="Page_19" element={<Page_19 />} />
        <Route path="Page_20" element={<Page_20 />} />

      </Routes>
    </BrowserRouter>,
    rootElement
  );





