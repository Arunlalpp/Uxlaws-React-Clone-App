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
              <Link to="/Page_9">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_11" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(129, 157, 214)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>10/20</h1>
            <span>Law of Uniform Connectedness</span>
          </div>
          <svg viewBox="0 0 576 566" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="282.882"
                  cy="282.882"
                  r="281.382"
                ></circle>
                <circle fill="#F4F1D0" cx="179" cy="22" r="12"></circle>
                <circle fill="#F4F1D0" cx="564" cy="271" r="12"></circle>
                <circle fill="#F4F1D0" cx="37" cy="417" r="12"></circle>
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="282.861"
                  cy="282.861"
                  r="206.361"
                ></circle>
                <circle fill="#F4F1D0" cx="80" cy="247" r="12"></circle>
                <circle fill="#F4F1D0" cx="343" cy="86" r="12"></circle>
                <circle fill="#F4F1D0" cx="383" cy="464" r="12"></circle>
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="283.212"
                  cy="283.212"
                  r="132.712"
                ></circle>
                <circle fill="#F4F1D0" cx="403" cy="343" r="12"></circle>
                <circle fill="#F4F1D0" cx="223" cy="402" r="12"></circle>
                <circle fill="#F4F1D0" cx="223" cy="165" r="12"></circle>
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="283.213"
                  cy="283.213"
                  r="58.713"
                ></circle>
                <circle fill="#F4F1D0" cx="324" cy="240" r="12"></circle>
                <circle fill="#F4F1D0" cx="294" cy="340" r="12"></circle>
                <circle fill="#F4F1D0" cx="226" cy="271" r="12"></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Elements that are visually connected are perceived as more related than elements with no connection." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Group functions of a similar nature so they are visually connected via colors, lines, frames, or other shapes."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(129, 157, 214)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="The principles of grouping (or Gestalt laws of grouping) are a set of principles in psychology, first proposed by Gestalt psychologists to account for the observation that humans naturally perceive objects as organized patterns and objects, a principle known as Prägnanz. Gestalt psychologists argued that these principles exist because the mind has an innate disposition to perceive patterns in the stimulus based on certain rules. These principles are organized into five categories: Proximity, Similarity, Continuity, Closure, and Connectedness." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Gestalt Principles of Perception"
          linksaparate="Andy Rutledge"
        />
        <ContainerLinks
          linktext="Laws of Proximity, Uniform Connectedness, and Continuation"
          linksaparate="Interaction Design Foundation | Mads Soegaard"
        />
         <ContainerLinks
          linktext="Design Principles: Visual Perception And The Principles Of Gestalt"
          linksaparate="Steven Bradley | Smashing Magazine"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(243, 94, 78)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to='/Page_11' className='next-link'>Miller's Law</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome