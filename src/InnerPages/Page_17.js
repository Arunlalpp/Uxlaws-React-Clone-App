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
              <Link to="/Page_16">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_18" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(137, 89, 169)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>17/20</h1>
            <span>Serial Position Effect</span>
          </div>
          <svg viewBox="0 0 566 569" xmlns="http://www.w3.org/1999/xlink">
              <rect fill="#F4F1D0" x="0" y="0" width="122" height="122"></rect>
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
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="298"
                width="122"
                height="122"
              ></rect>
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
                fill="#F4F1D0"
                x="444"
                y="447"
                width="122"
                height="122"
              ></rect>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Users have a propensity to best remember the first and last items in a series." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Placing the least important items in the middle of lists can be helpful because these items tend to be stored less frequently in long-term and working memory."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(137, 89, 169)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="The serial position effect, a term coined by Herman Ebbinghaus, describes how the position of an item in a sequence affects recall accuracy. The two concepts involved, the primacy effect and the recency effect, explains how items presented at the beginning of a sequence and the end of a sequence are recalled with greater accuracy than items in the middle of a list. Manipulation of the serial position effect to create better user experiences is reflected in many popular designs by successful companies like Apple, Electronic Arts, and Nike." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Serial Position Effect: How to Create Better User Interfaces"
          linksaparate="Euphemia Wong | Interaction Design Foundation"
        />
        <ContainerLinks
          linktext="Robustness and Least Power"
          linksaparate="Adactio"
        />
        <ContainerLinks
          linktext="The Serial Position Effect: Why ABC and XYZ Stand Out the Most Among All the Alphabets."
          linksaparate="Abhishek Chakraborty | Medium.com"
        />
         <ContainerLinks
          linktext="Psychology in Design (Part 1)"
          linksaparate="Andri Budzinskiy | Medium.com"
        />
         <ContainerLinks
          linktext="Serial Position Effect on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(111, 201, 182)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_18' className='next-link'>Tesler's Law</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome