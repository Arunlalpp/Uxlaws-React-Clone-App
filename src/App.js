import "./App.css";
import "./Components/PopupStyle.css";
import './Components/CardBoxStyle.css';
import './Components/CardboxLeftStyle.css';
import './Components/ContainerStyle.css';
import './Components/ButtonStyle.css';
import CardBoxes from "./Components/CardBoxes";
import About from "./About";
import Welcome from "./Components/Welcome";
import {BrowserRouter, Route} from 'react-router-dom'; 


function App() {
  return (
   
   <BrowserRouter>
   <Route path="/" Components={CardBoxes} />   
   <Route path="/About" src={About}/>   
   </BrowserRouter>
   
  );
}
export default App;


