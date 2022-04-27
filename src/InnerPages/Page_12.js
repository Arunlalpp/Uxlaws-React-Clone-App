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
              <Link to="/Page_11">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_13" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(181, 74, 72)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>12/20</h1>
            <span>Occam's Razor</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
              <g fill="none" fill-rule="evenodd">
                <path fill-opacity=".1" fill="#000" d="M1 0h270v270H1z"></path>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="100"
                  cy="100"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="171"
                  cy="100"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="101"
                  cy="170"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="171"
                  cy="170"
                  r="100"
                ></circle>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M295 0h270v270H295z"
                ></path>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="430"
                  cy="100"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="395"
                  cy="170"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="465"
                  cy="170"
                  r="100"
                ></circle>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M1 294h270v270H1z"
                ></path>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="101"
                  cy="394"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="171"
                  cy="464"
                  r="100"
                ></circle>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M295 294h270v270H295z"
                ></path>
                <circle fill="#F4F1D0" cx="430" cy="429" r="100"></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Analyze each element and remove as many as possible, without compromising the overall function."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(181, 74, 72)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Occam's razor (also Ockham's razor; Latin: lex parsimoniae 'law of parsimony') is a problem-solving principle that, when presented with competing hypothetical answers to a problem, one should select the one that makes the fewest assumptions. The idea is attributed to William of Ockham (c. 1287–1347), who was an English Franciscan friar, scholastic philosopher, and theologian." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Designing with Occam’s Razor"
          linksaparate="Jon Yablonski | Medium"
        />
        <ContainerLinks
          linktext="Occam’s Razor: The Simplest Solution is Always the Best"
          linksaparate="Mads Soegaard | Interaction Design Foundation"
        />
         <ContainerLinks
          linktext="Occam’s Razor: A Great Principle for Designers"
          linksaparate="Web Designer Depot"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(55, 171, 191)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to ='/Page_13' className='next-link'>Pareto Principle</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome