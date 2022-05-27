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
              <Link to="/Page_18">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_20" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(116, 166, 121)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>19/20</h1>
            <span>Von Restorff Effect</span>
          </div>
          <svg viewBox="0 0 566 569" xlink="http://www.w3.org/1999/xlink">
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="298"
                width="122"
                height="122"
              ></rect>
              <circle
                id="oval"
                fill="#F4F1D0"
                cx="356"
                cy="359"
                r="61"
              ></circle>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="447"
                width="122"
                height="122"
              ></rect>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="The Von Restorff effect, also known as The Isolation Effect, predicts that when multiple similar objects are present, the one that differs from the rest is most likely to be remembered." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Make important information or key actions visually distinctive."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(116, 166, 121)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="The theory was coined by German psychiatrist and pediatrician Hedwig von Restorff (1906–1962), who, in her 1933 study, found that when participants were presented with a list of categorically similar items with one distinctive, isolated item on the list, memory for the item was improved." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Psychology in Design (Part 1)"
          linksaparate="Andri Budzinskiy | Medium.com"
        />
        <ContainerLinks
          linktext="The Psychology Principles Every UI/UX Designer Needs to Know"
          linksaparate="Thanasis Rigopoulos | Marvel"
        />
         <ContainerLinks
          linktext="Von Restorff Effect on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(66, 146, 140)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to ='/Page_20' className='next-link'>Zeigarnik Effect</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome