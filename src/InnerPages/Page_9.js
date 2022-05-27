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
              <Link to="/Page_8">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_10" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(128, 73, 94)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>09/20</h1>
            <span>Law of Similarity</span>
          </div>
          <svg viewBox="0 0 566 565" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#F4F1D0" cx="48.5" cy="48.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="48.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="283.5" cy="48.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="48.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="48.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="48.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="283.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="400.5" cy="165.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="48.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="283.5" cy="282.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="48.5" cy="399.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="399.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="283.5"
                  cy="399.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="399.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="517.5" cy="399.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="48.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="166.5" cy="516.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="283.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="The human eye tends to perceive similar elements in a design as a complete picture, shape, or group, even if those elements are separated." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Ensure that links and navigation systems are visually differentiated from normal text elements, and are consistently styled."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(128, 73, 94)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="The principles of grouping (or Gestalt laws of grouping) are a set of principles in psychology, first proposed by Gestalt psychologists to account for the observation that humans naturally perceive objects as organized patterns and objects, a principle known as Prägnanz. Gestalt psychologists argued that these principles exist because the mind has an innate disposition to perceive patterns in the stimulus based on certain rules. These principles are organized into five categories: Proximity, Similarity, Continuity, Closure, and Connectedness." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="The Law of Similarity - Gestalt Principles"
          linksaparate="Interaction Deisgn Foundation | Mads Soegaard"
        />
        <ContainerLinks
          linktext="Design Principles: Visual Perception And The Principles Of Gestalt"
          linksaparate="Steven Bradley | Smashing Magazine"
        />
         <ContainerLinks
          linktext="Use Gestalt Laws to Improve Your UX"
          linksaparate="Sabina Idler | Usabilla Blog"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(129, 157, 214)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to='/Page_10' className='next-link'>Law of Uniform Connectedness</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome