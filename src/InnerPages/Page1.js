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
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="main" style={{ background: "transparent" }}>
        <ul>
          <li>
            <Link to="/">LAWS OF UX</Link>
          </li>
          <div className="onchange-event">
            <li>
              <Link to="/Page_20">prev</Link>
            </li>
            <hr></hr>
            <li>
              <Link to ="/Page_2" className="next-left">
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
        <div className="wrapper-container">
          <div className="container-box-bg">
            <div className="container-text">
              <h1>01/20</h1>
              <span>Aesthetic Usability Effect</span>
            </div>
            <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="282.882"
                  cy="282.882"
                  r="282.882"
                ></circle>
                <path
                  fill-opacity=".15"
                  fill="#000"
                  d="M82.937 82.897h399.886v399.967H82.937z"
                ></path>
                <path
                  fill="#F4F1D0"
                  d="M282.88 82.897l199.943 399.966H82.937z"
                ></path>
              </g>
            </svg>
          </div>
          <ContainerContent head="overview" />
          <ContainerPara para="Users often perceive aesthetically pleasing design as design that’s more usable." />
          <ContainerContent head="KEY TAKEAWAYS" />
          <ContainerFlexpara
            flexpara="
            An aesthetically pleasing design creates a positive response in
            people’s brains and leads them to believe the design actually works
            better."
            para="People are more tolerant of minor usability issues when the design of a product or service is aesthetically pleasing."
            last = "Visually pleasing design can mask usability problems and prevent issues from being discovered during usability testing."
          />
          <div className="wrapper-card">
            <div className="wrapper-content-box">
              <div className="container-button-top">
                <button
                  className="container-button"
                  style={{ backgroundColor: "rgb(80, 100, 133)" }}
                >
                  Download Poster
                </button>
              </div>
            </div>
          </div>
          <ContainerContent head="ORIGINS" />
          <Containerbigpara bigpara="The aesthetic-usability effect was first studied in the field of human–computer interaction in 1995. Researchers Masaaki Kurosu and Kaori Kashimura from the Hitachi Design Center tested 26 variations of an ATM UI, asking the 252 study participants to rate each design on ease of use, as well as aesthetic appeal. They found a stronger correlation between the participants’ ratings of aesthetic appeal and perceived ease of use than the correlation between their ratings of aesthetic appeal and actual ease of use. Kurosu and Kashimura concluded that users are strongly influenced by the aesthetics of any given interface, even when they try to evaluate the underlying functionality of the system." />
          <ContainerContent head="FURTHER READING" />
          <ContainerLinks
            linktext="The Aesthetic-Usability Effect"
            linksaparate="Kate Moran | Nielsen Norman Group"
          />
          <ContainerLinks
            linktext="Aesthetic-Usability Effect"
            linksaparate="Wikipedia"
          />
          <ContainerLinks
            linktext="The Aesthetic-Usability Effect: Why beautiful-looking products are preferred over usable-but-not-beautiful ones."
            linksaparate="Abhishek Chakraborty | Medium"
          />
        </div>
        <div className="blue"></div>
        <div
          className="wrapper-card-next"
          style={{ backgroundColor: "rgb(196, 81, 157)" }}
        >
          <div className="wrapper-content-box">
            <div className="next-text-box">
              <span>next</span>
              <Link to="/Page_2" className="next-link">
                Doherty Threshold
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
