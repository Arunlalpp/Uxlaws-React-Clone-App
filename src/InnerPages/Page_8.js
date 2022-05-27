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
              <Link to="/Page_7">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_9" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(234, 126, 56)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>08/20</h1>
            <span>Law of Proximity</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 516">
              <g fill="none" fill-rule="evenodd">
                <circle cx="55.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="55.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="55.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="190.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="55.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="325.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="55.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="460.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Objects that are near, or proximate to each other, tend to be grouped together." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Proximity helps to establish a relationship with nearby objects."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(234, 126, 56)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="The principles of grouping (or Gestalt laws of grouping) are a set of principles in psychology, first proposed by Gestalt psychologists to account for the observation that humans naturally perceive objects as organized patterns and objects, a principle known as Prägnanz. Gestalt psychologists argued that these principles exist because the mind has an innate disposition to perceive patterns in the stimulus based on certain rules. These principles are organized into five categories: Proximity, Similarity, Continuity, Closure, and Connectedness." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Laws of Proximity, Uniform Connectedness, and Continuation"
          linksaparate="Mads Soegaard | Interation Design Foundation"
        />
        <ContainerLinks
          linktext="The Psychology Principles Every UI/UX Designer Needs to Know"
          linksaparate="Thanasis Rigopoulos | Marvel"
        />
         <ContainerLinks
          linktext="Design Principles: Visual Perception And The Principles Of Gestalt"
          linksaparate="Steven Bradley | Smashing Magazine"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(128, 73, 94)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to='/Page_8' className='next-link'>Law of Similarity</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome