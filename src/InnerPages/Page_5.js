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
            <a href="/Page_4">prev</a>
          </li>
          <div>
          <hr className="nav-line"></hr>
          </div>
          <li>
            <a href="/Page_6">next</a>
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(214, 194, 48)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>05/20</h1>
            <span>Jakob's Law</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 563">
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#F4F1D0"
                stroke-width="30"
              >
                <path d="M15 98h454v450H15z"></path>
                <path d="M98 15h454v450H98z"></path>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Users will transfer expectations they have built around one familiar product to another that appears similar."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(214, 194, 48)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Jakob's Law was coined by Jakob Nielsen, a User Advocate and principal of the Nielsen Norman Group which he co-founded with Dr. Donald A. Norman (former VP of research at Apple Computer). Dr. Nielsen established the 'discount usability engineering' movement for fast and cheap improvements of user interfaces and has invented several usability methods, including heuristic evaluation." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Jakob’s Law of Internet User Experience"
          linksaparate="Nielsen Norman Group"
        />
        <ContainerLinks
          linktext="Top 10 Mistakes in Web Design"
          linksaparate="Nielsen Norman Group"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(73, 164, 109)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_6' className='next-link'>Law of Common Region</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome