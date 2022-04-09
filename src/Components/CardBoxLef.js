import React from 'react'
import CardButton from './CardButton'
import Navbar from './Navbar'

function CardBoxLef(props) {
  return (
    <div>
      <div className="box-container">
      <div className="wrapper">
          <div className="wrapper-text">
            <span>02</span>
            <hr></hr>
            <p>{props.para}</p>
          </div>
          <CardButton />
        </div>
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>{props.head}</h1>
          </div>
          <div className="end-box-1">
            <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        
      </div>
      <Navbar />
    </div>
  )
}

export default CardBoxLef