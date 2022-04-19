import React, { useState } from "react";
import Popup from "../Components/Popup";
// import ContainerBox from "../Components/ContainerBox";
import PopupContent from "../Components/PopupContent";
import Containerbigpara from "../Components/Containerbigpara";
import ContainerContent from "../Components/ContainerContent";
import ContainerFlexpara from "../Components/ContainerFlexpara";
import ContainerLinks from "../Components/ContainerLinks";
import ContainerPara from "../Components/ContainerPara";

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
            <a href="/">LAWS OF UX</a>
          </li>
          <div className="onchange-event">
          <li>
            <a href="/">prev</a>
          </li>
          <div>
          <hr className="nav-line"></hr>
          </div>
          <li>
            <a href="/">next</a>
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(196, 81, 157)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>02/20</h1>
            <span>Doherty Threshold</span>
          </div>
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: 'rgb(196, 81, 157)'}}>
              <g fill="none" fill-rule="evenodd">
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="282.882"
                  cy="282.882"
                  r="282.882"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="282.861"
                  cy="282.861"
                  r="207.861"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="283.212"
                  cy="283.212"
                  r="134.212"
                ></circle>
                <circle
                  fill="#F4F1D0"
                  cx="283.213"
                  cy="283.213"
                  r="60.213"
                ></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Provide system feedback within 400 ms in order to keep users’ attention and increase productivity."
        />
         <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(196, 81, 157)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="In 1982 Walter J. Doherty and Ahrvind J. Thadani published, in the IBM Systems Journal, a research paper that set the requirement for computer response time to be 400 milliseconds, not 2,000 (2 seconds) which had been the previous standard. When a human being’s command was executed and returned an answer In under 400 milliseconds, it was deemed to exceed the Doherty threshold, and use of such applications were deemed to be “addicting” to users." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="The Economic Value of Rapid Response Time"
          linksaparate="Jim Elliott"
        />
        <ContainerLinks
          linktext="This 70s UX gem still applies today"
          linksaparate="Michael Gugel | Medium"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(123, 178, 77)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_3' className='next-link'>Fitt's Law</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome