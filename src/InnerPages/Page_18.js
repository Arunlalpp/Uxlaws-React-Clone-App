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
            <a href="/Page_17">prev</a>
          </li>
          <div>
          <hr className="nav-line"></hr>
          </div>
          <li>
            <a href="/Page_19">next</a>
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(111, 201, 182)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>18/20</h1>
            <span>Tesler's Law</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 490">
              <g fill="#F4F1D0" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  d="M412.46218 20.76492l-259.60061-.35855L23.427 244.59363l130.11082 224.64145 259.60061.35855L542.573 245.40637 412.46218 20.76492zM424 .78084l141.67622 244.60958-141 244.21916L142 489.21916.32378 244.60958l141-244.21916L424 .78084z"
                ></path>
                <path
                  fill-rule="nonzero"
                  d="M564 245.5L146 490l129.5-244.5L146 1l418 244.5zM196.57184 53.75106L298.1321 245.5 196.57184 437.24894 524.38803 245.5 196.57182 53.75106zM2 245.5L426 1 295 245.5 426 490 2 245.5zm373.26538 192.15681L272.3102 245.5 375.26538 53.34319 42.03638 245.5l333.229 192.15681z"
                ></path>
                <path d="M166 21v449h240V21H166zM146 1h280v489H146V1z"></path>
                <path d="M11 256.5v-20h545.00595v20z"></path>
              </g>
            </svg>
        </div>
        <ContainerContent head="overview" />
        <ContainerPara para="Tesler's Law, also known as The Law of Conservation of Complexity, states that for any system there is a certain amount of complexity which cannot be reduced." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          All processes have a core of complexity that cannot be designed away and therefore must be assumed by either the system or the user."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(111, 201, 182)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="While working for Xerox PARC in the mid-1980s, Larry Tesler realized that the way users interact with applications was just as important as the application itself. The book Designing for Interaction by Dan Saffer, includes an interview with Larry Tesler that describes the law of conservation of complexity. The interview is popular among user experience and interaction designers. Larry Tesler argues that, in most cases, an engineer should spend an extra week reducing the complexity of an application versus making millions of users spend an extra minute using the program because of the extra complexity However, Bruce Tognazzini proposes that people resist reductions to the amount of complexity in their lives. Thus, when an application is simplified, users begin attempting more complex tasks." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Explaining the Law of Conservation of Complexity"
          linksaparate="Michael Calleia | Humanist.co"
        />
        <ContainerLinks
          linktext="Controls are Choices"
          linksaparate="Dan Saffer | Medium.com"
        />
        <ContainerLinks
          linktext="Simplicity is Overrated"
          linksaparate="Gabriel Colombo | Marvel"
        />
         <ContainerLinks
          linktext="Nobody Wants To Use Your Product"
          linksaparate="Goran Peuc | Smashing Magazine"
        />
         <ContainerLinks
          linktext="Law of Conservation of Complexity on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(116, 166, 121)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_19' className='next-link'>Von Restorff Effect</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome