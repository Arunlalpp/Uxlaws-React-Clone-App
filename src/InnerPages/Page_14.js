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
              <Link to="/Page_13">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_15" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(190, 170, 72)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>14/20</h1>
            <span>Parkinson's Law</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598 597">
              <g
                fill="none"
                fill-rule="evenodd"
                transform="rotate(-45 293.76881 309.77343)"
              >
                <circle
                  cx="305.5"
                  cy="305.5"
                  r="54.5"
                  fill="#000"
                  opacity=".2"
                ></circle>
                <path
                  fill="#F4F1D0"
                  fill-rule="nonzero"
                  stroke="#F4F1D0"
                  stroke-width="5"
                  d="M558 251l-9.69375 9.69375 38.3625 38.43125H503v13.75h83.66875l-38.3625 38.43125L558 361l55-55zM55 362l9.69375-9.69375-38.3625-38.43125H110v-13.75H26.33125l38.3625-38.43125L55 252 0 307zM251 55l9.69375 9.69375 38.43125-38.3625V110h13.75V26.33125l38.43125 38.3625L361 55 306 0zM362 557l-9.69375-9.69375-38.43125 38.3625V502h-13.75v83.66875l-38.43125-38.3625L252 557l55 55z"
                ></path>
                <path
                  fill="#F4F1D0"
                  fill-rule="nonzero"
                  d="M114 115v381h383V115H114zM94 95h423v421H94V95z"
                ></path>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Any task will inflate until all of the available time is spent." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Any errand will blow up until the entirety of the accessible time is spent."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(190, 170, 72)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Articulated by Cyril Northcote Parkinson as part of the first sentence of a humorous essay published in The Economist in 1955 and since republished online, it was reprinted with other essays in the book Parkinson's Law: The Pursuit of Progress (London, John Murray, 1958). He derived the dictum from his extensive experience in the British Civil Service." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Parkinson’s Law on Wikipedia"
          linksaparate="Wikipedia"
        />
         <ContainerLinks
          linktext="Parkinson’s Law: Why Constraints Are The Best Thing You Can Work With"
          linksaparate="Louis Chew | Medium.com"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(48, 126, 199)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to ='/Page_15' className='next-link'>Peak-End Rule</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome