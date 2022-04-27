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
              <Link to="/Page_14">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_16" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(48, 126, 199)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>15/20</h1>
            <span>Peak-End Rule</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
              <g fill="none" fill-rule="evenodd">
                <circle
                  cx="48.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
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
                <circle
                  cx="166.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
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
                <circle
                  cx="400.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
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
        <ContainerPara para="People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum or average of every moment of the experience." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Pay close attention to the most intense points and the final moments (the “end”) of the user journey."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(48, 126, 199)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="A 1993 study titled 'When More Pain Is Preferred to Less: Adding a Better End' by Kahneman, Fredrickson, Charles Schreiber, and Donald Redelmeier provided groundbreaking evidence for the peak–end rule. Participants were subjected to two different versions of a single unpleasant experience. The first trial had subjects submerge a hand in 14°C water for 60 seconds. The second trial had subjects submerge the other hand in 14°C water for 60 seconds, but then keep their hand submerged for an additional 30 seconds, during which the temperature was raised to 15 °C. Subjects were then offered the option of which trial to repeat. Against the law of temporal monotonicity, subjects were more willing to repeat the second trial, despite a prolonged exposure to uncomfortable temperatures. Kahneman et al. concluded that 'subjects chose the long trial simply because they liked the memory of it better than the alternative (or disliked it less)'." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="The Peak–End Rule: How Impressions Become Memories"
          linksaparate="Nielsen Norman Group"
        />
        <ContainerLinks
          linktext="Peak–End Rule"
          linksaparate="UX Collective"
        />
        <ContainerLinks
          linktext="What is Peak-End Theory? A Psychologist Explains How Our Memory Fools Us"
          linksaparate="Positive Psychology"
        />
         <ContainerLinks
          linktext="Peak–End Rule"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(79, 168, 82)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to='/Page_16' className='next-link'>Postel's Law</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome