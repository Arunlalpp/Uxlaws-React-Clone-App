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
              <Link to="/Page_10">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_12" className="next-left">
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(243, 94, 78)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>11/20</h1>
            <span>Miller's Law</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
              <g fill="none" fill-rule="evenodd">
                <circle
                  cx="34"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="118"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="199"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="365"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="449"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="531"
                  cy="34"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="34"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="118"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="199"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="365"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="449"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="531"
                  cy="117"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="34"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="118"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="199"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="365"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="449"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="531"
                  cy="199"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="34"
                  cy="282"
                  r="34"
                  fill="#F4F1D0"
                  fill-opacity=".25"
                ></circle>
                <circle
                  cx="118"
                  cy="282"
                  r="34"
                  fill="#F4F1D0"
                  fill-opacity=".5"
                ></circle>
                <circle cx="199" cy="282" r="34" fill="#F4F1D0"></circle>
                <circle cx="283" cy="282" r="34" fill="#F4F1D0"></circle>
                <circle cx="365" cy="282" r="34" fill="#F4F1D0"></circle>
                <circle
                  cx="449"
                  cy="282"
                  r="34"
                  fill="#F4F1D0"
                  fill-opacity=".5"
                ></circle>
                <circle
                  cx="531"
                  cy="282"
                  r="34"
                  fill="#F4F1D0"
                  fill-opacity=".25"
                ></circle>
                <circle
                  cx="34"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="118"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="199"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="365"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="449"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="531"
                  cy="365"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="34"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="118"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="199"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="365"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="449"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="531"
                  cy="448"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="34"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="118"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="199"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="365"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="449"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="531"
                  cy="530"
                  r="34"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="The average person can only keep 7 (plus or minus 2) items in their working memory." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Chunking is an effective method of presenting groups of content in a manageable way. Organize content in groups of 5-9 items at a time."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(243, 94, 78)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="In 1956, George Miller asserted that the span of immediate memory and absolute judgment were both limited to around 7 pieces of information. The main unit of information is the bit, the amount of data necessary to make a choice between two equally likely alternatives. Likewise, 4 bits of information is a decision between 16 binary alternatives (4 successive binary decisions). The point where confusion creates an incorrect judgment is the channel capacity. In other words, the quantity of bits which can be transmitted reliably through a channel, within a certain amount of time." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Miller’s Law, Chunking, and the Capacity of Working Memory"
          linksaparate="Khan Academy"
        />
        <ContainerLinks
          linktext="Design Principles for Reducing Cognitive Load"
          linksaparate="Jon Yablonski | Medium.com"
        />
         <ContainerLinks
          linktext="Miller’s Law on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(181, 74, 72)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <Link to ='/Page_12' className='next-link'>Occam's Razor</Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome