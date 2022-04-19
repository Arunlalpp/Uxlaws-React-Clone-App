import React, { useState } from "react";
import Popup from "../Components/Popup";
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
            <a href="/Page_15">prev</a>
          </li>
          <div>
          <hr className="nav-line"></hr>
          </div>
          <li>
            <a href="/Page_17">next</a>
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(79, 168, 82)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>16/20</h1>
            <span>Postel's Law</span>
          </div>
          <svg viewBox="0 0 567 580" xmlns="http://www.w3.org/2000/svg">
              <g fill="#F4F1D0" fill-rule="evenodd">
                <path d="M94.5 145L0 0h189z"></path>
                <path d="M283.5 145L189 0h189z"></path>
                <path d="M472.5 145L378 0h189z"></path>
                <path fill-opacity=".8" d="M94.5 290L0 145h189z"></path>
                <path fill-opacity=".8" d="M283.5 290L189 145h189z"></path>
                <path fill-opacity=".8" d="M472.5 290L378 145h189z"></path>
                <path fill-opacity=".6" d="M94.5 435L0 290h189z"></path>
                <path fill-opacity=".6" d="M283.5 435L189 290h189z"></path>
                <path fill-opacity=".6" d="M472.5 435L378 290h189z"></path>
                <path fill-opacity=".4" d="M94.5 580L0 435h189z"></path>
                <path fill-opacity=".4" d="M283.5 580L189 435h189z"></path>
                <path fill-opacity=".4" d="M472.5 580L378 435h189z"></path>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Be liberal in what you accept, and conservative in what you send." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Be empathetic, flexible, and tolerant to any number of actions the user could possibly take. This means accepting variable input from users, translating input to meet the requirements, defining boundaries for input, and providing clear feedback to the user."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(79, 168, 82)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Postel's Law (also known as the Robustness Principle) was formulated by Jon Postel, an early pioneer of the Internet. The Law is a design guideline for software, specifically in regards to TCP and networks." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Design Systems and Postel’s Law"
          linksaparate="Mark Boulton"
        />
        <ContainerLinks
          linktext="Robustness and Least Power"
          linksaparate="Adactio"
        />
        <ContainerLinks
          linktext="Your Website has Two Faces"
          linksaparate="A List Apart"
        />
         <ContainerLinks
          linktext="Design with Difficult Data"
          linksaparate="Steven Garrity"
        />
         <ContainerLinks
          linktext="Robustness Principle"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(137, 89, 169)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_17' className='next-link'>Serial Position Effect</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome