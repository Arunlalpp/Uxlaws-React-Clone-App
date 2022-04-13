import "./App.css";
import "./Components/PopupStyle.css";
import './Components/CardBoxStyle.css';
import './Components/CardboxLeftStyle.css';
import './Components/ContainerStyle.css';
import './Components/ButtonStyle.css';
import CardBoxes from "./Components/CardBoxes";
import About from "./Components/About";
import Welcome from "./Components/Welcome";
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 


function App() {
  return (
   <div className="App">
   <Router>
   <Route path='/' component={CardBoxes} exact/>   
   <Route path='/About' component={About} exact/>   
   </Router>
   </div>
   
  );
}
export default App;


