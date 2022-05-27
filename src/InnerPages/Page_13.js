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
              <Link to="/Page_12">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_14" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(55, 171, 191)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>13/20</h1>
            <span>Pareto Principle</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
              <g fill="none" fill-rule="evenodd">
                <circle cx="48.5" cy="48.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="166.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="166.5" cy="165.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="283.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="400.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="400.5" cy="399.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="517.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0"></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="The Pareto principle states that, for many events, roughly 80% of the effects come from 20% of the causes." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Focus the majority of effort on the areas that will bring the largest benefits to the most users."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(55, 171, 191)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Its origins stem back to Vilfredo Pareto, an economist who noticed 80% of Italy’s land was owned by 20% of the population. Though it might seem vague, the 80/20 way of thinking can provide insightful and endlessly applicable analysis of lopsided systems, including user experience strategy." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="The 80/20 Rule in User Experience"
          linksaparate="Arin Bhowmick | Medium"
        />
        <ContainerLinks
          linktext="Applying the Pareto Principle to the User Experience"
          linksaparate="Jeff Sauro | Measuring U"
        />
        <ContainerLinks
          linktext="The Pareto Principle and Your User Experience Work"
          linksaparate="Interaction Design Foundation"
        />
         <ContainerLinks
          linktext="Pareto Principle on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(190, 170, 72)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to ='/Page_14' className='next-link'>Parkinson's Law</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome