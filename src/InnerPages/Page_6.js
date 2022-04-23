import React, { useState } from "react";
import Popup from "../Components/Popup";
import PopupContent from "../Components/PopupContent";
import Containerbigpara from "../Components/Containerbigpara";
import ContainerContent from "../Components/ContainerContent";
import ContainerFlexpara from "../Components/ContainerFlexpara";
import ContainerLinks from "../Components/ContainerLinks";
import ContainerPara from "../Components/ContainerPara";
import { Link } from "react-router-dom";


function Welcome(props) {

  const  [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       <nav className="main" style={{background:'transparent'}}>
        <ul>
        <li>
            <Link to="/">LAWS OF UX</Link>
          </li>
          <div className="onchange-event">
            <li>
              <Link to="/Page_5">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_7" className="next-left">
                next
              </Link>
            </li>
          </div>
        </ul>
        <div className="nav-toggle">
          <button className="nav-button" onClick={togglePopup}>
            {isOpen && (
              <Popup
                content={
                  <>
                  <PopupContent />
                  </>
                }
                handleClose={togglePopup}
              />
            )}
            <span className="button-text">Menu</span>
            <div className="toggle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24">
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </div>
          </button>
        </div>
      </nav>
      <div className="wrapper-link-container">
      <div className="wrapper-container" style={{backgroundColor: 'rgb(73, 164, 109)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>06/20</h1>
            <span>Law of Common Region</span>
          </div>
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill-opacity=".1" fill="#000" d="M0 0h566v566H0z"></path>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M40 40h486v486H40z"
                ></path>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M80 80h406v406H80z"
                ></path>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="168"
                  cy="168"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="284"
                  cy="168"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="398"
                  cy="168"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="167.209"
                  cy="282.437"
                  r="47.247"
                ></circle>
                <circle
                  fill="#F4F1D0"
                  cx="283.936"
                  cy="282.437"
                  r="47.247"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="398"
                  cy="282"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="168"
                  cy="398"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="284"
                  cy="398"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="398"
                  cy="398"
                  r="48"
                ></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Adding a border around an element or group of elements is an easy way to create common region."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(73, 164, 109)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="The principles of grouping (or Gestalt laws of grouping) are a set of principles in psychology, first proposed by Gestalt psychologists to account for the observation that humans naturally perceive objects as organized patterns and objects, a principle known as Prägnanz. Gestalt psychologists argued that these principles exist because the mind has an innate disposition to perceive patterns in the stimulus based on certain rules. These principles are organized into five categories: Proximity, Similarity, Continuity, Closure, and Connectedness." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Design Principles: Visual Perception And The Principles Of Gestalt"
          linksaparate="Steven Bradley | Smashing Magazine"
        />
        <ContainerLinks
          linktext="Gestalt principles"
          linksaparate="Scholarpedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(242, 126, 172)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_7' className='next-link'>Law of Prägnanz</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome