import React, { useState } from "react";
import Popup from "./Popup";
import PopupContent from "./PopupContent";
import ContainerBox from "./ContainerBox";

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
      <ContainerBox/>
    </div>
  )
}

export default Welcome