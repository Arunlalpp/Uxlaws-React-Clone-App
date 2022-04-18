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
import {Switch, Route} from 'react-router-dom'; 


function App() {
  return (
    <>
   <Welcome />
    </>
  )
}
export default App;


