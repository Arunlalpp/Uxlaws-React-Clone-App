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
              <Link to="/Page_2">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_4" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(123, 178, 77)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>03/20</h1>
            <span>Fitt's Law</span>
          </div>
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#F4F1D0"
                stroke-width="30"
                fill="none"
                fill-rule="evenodd"
              >
                <circle cx="282.882" cy="282.882" r="267.882"></circle>
                <circle cx="282.861" cy="282.861" r="192.861"></circle>
                <circle cx="283.212" cy="283.212" r="119.212"></circle>
                <circle cx="283.213" cy="283.213" r="45.213"></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="The time to acquire a target is a function of the distance to and size of the target." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Touch targets should be large enough for users to both discern what it is and to accurately select them."
        />
        <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(123, 178, 77)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="In 1954, psychologist Paul Fitts, examining the human motor system, showed that the time required to move to a target depends on the distance to it, yet relates inversely to its size. By his law, fast movements and small targets result in greater error rates, due to the speed-accuracy trade-off. Although multiple variants of Fitts’ law exist, all encompass this idea. Fitts’ law is widely applied in user experience (UX) and user interface (UI) design. For example, this law influenced the convention of making interactive buttons large (especially on finger-operated mobile devices)—smaller buttons are more difficult (and time-consuming) to click. Likewise, the distance between a user’s task/attention area and the task-related button should be kept as short as possible." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Fitts’s Law: The Importance of Size and Distance in UI Design"
          linksaparate="Interaction Design Foundation"
        />
        <ContainerLinks
          linktext="Fitts’s Law on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="blue"></div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(72, 151, 190)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to='/Page_4' className='next-link'>Hick's Law</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome