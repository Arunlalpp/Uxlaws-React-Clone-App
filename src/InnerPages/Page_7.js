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
            <a href="/Page_6">prev</a>
          </li>
          <div>
          <hr className="nav-line"></hr>
          </div>
          <li>
            <a href="/Page_8">next</a>
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(242, 126, 172)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>07/20</h1>
            <span>Law of Prägnanz</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 507">
              <path
                d="M77.5218237,15.8098047 L18.2743646,118.429414 L77.5218237,221.049023 L196.016742,221.049023 L255.264201,118.429414 L196.016742,15.8098047 L77.5218237,15.8098047 Z M68.8615697,0.809804688 L204.676996,0.809804688 L272.584709,118.429414 L204.676996,236.049023 L68.8615697,236.049023 L0.953856568,118.429414 L68.8615697,0.809804688 Z M71,1 L205,1 L205,236 L71,236 L71,1 Z M86,16 L86,221 L190,221 L190,16 L86,16 Z M14.9246324,126 L14.9246324,111 L260.089469,111 L260.089469,126 L14.9246324,126 Z M272,118.5 L68,236 L124.328358,118.5 L68,1 L272,118.5 Z M102.44341,38.148972 L140.962912,118.5 L102.44341,198.851028 L241.946471,118.5 L102.44341,38.148972 Z M1,118.5 L205,1 L146,118.5 L205,236 L1,118.5 Z M169.156836,198.044797 L129.215193,118.5 L169.156836,38.9552028 L31.0535285,118.5 L169.156836,198.044797 Z"
                fill="#F4F1D0"
                fill-rule="nonzero"
              ></path>
              <path
                d="M372.521824,15.8098047 L313.274365,118.429414 L372.521824,221.049023 L491.016742,221.049023 L550.264201,118.429414 L491.016742,15.8098047 L372.521824,15.8098047 Z M363.86157,0.809804688 L499.676996,0.809804688 L567.584709,118.429414 L499.676996,236.049023 L363.86157,236.049023 L295.953857,118.429414 L363.86157,0.809804688 Z M366,1 L500,1 L500,236 L366,236 L366,1 Z M381,16 L381,221 L485,221 L485,16 L381,16 Z M309.924632,126 L309.924632,111 L555.089469,111 L555.089469,126 L309.924632,126 Z"
                fill="#F4F1D0"
                fill-rule="nonzero"
              ></path>
              <path
                d="M73.1916967,278.309805 L200.346869,278.309805 L263.924455,388.429414 L200.346869,498.549023 L73.1916967,498.549023 L9.61411061,388.429414 L73.1916967,278.309805 Z M200.346869,278.309805 L73.1916967,278.309805 L9.61411061,388.429414 L73.1916967,498.549023 L200.346869,498.549023 L263.924455,388.429414 L200.346869,278.309805 Z"
                stroke="#F4F1D0"
                stroke-width="15"
                fill-rule="nonzero"
              ></path>
              <circle
                stroke="#F4F1D0"
                stroke-width="15"
                cx="432.5"
                cy="388.5"
                r="110"
                fill="none"
              ></circle>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="People will perceive and interpret ambiguous or complex images as the simplest form possible, because it is the interpretation that requires the least cognitive effort of us." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          The human eye likes to find simplicity and order in complex shapes because it prevents us from becoming overwhelmed with information."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(242, 126, 172)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="In 1910, psychologist Max Wertheimer had an insight when he observed a series of lights flashing on and off at a railroad crossing. It was similar to how the lights encircling a movie theater marquee flash on and off. To the observer, it appears as if a single light moves around the marquee, traveling from bulb to bulb, when in reality it’s a series of bulbs turning on and off and the lights don’t move it all. This observation led to a set of descriptive principles about how we visually perceive objects. These principles sit at the heart of nearly everything we do graphically as designers." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Design Principles: Visual Perception And The Principles Of Gestalt"
          linksaparate="Steven Bradley | Smashing Magazine"
        />
        <ContainerLinks
          linktext="The Laws of Figure/Ground, Prägnanz, Closure, and Common Fate"
          linksaparate="Mads Soegaard | Interation Design Foundation"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(234, 126, 56)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_8' className='next-link'>Law of Proximity</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome