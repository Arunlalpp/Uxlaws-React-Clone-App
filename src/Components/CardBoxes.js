import React from "react";
import Navbar from "./Navbar";

function CardBoxes() {
  return (
    <div className="box-container">
      <div className="container">
        <div className="box-text">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path></svg>
          </div>
          <h1>Aesthetic Usability Effect</h1>
        </div>
        <div className="end-box">
          <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg" >
            <g fill="none" fill-rule="evenodd">
              <circle  fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
              <path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z" ></path>
              <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z" ></path>
            </g>
          </svg>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default CardBoxes;
