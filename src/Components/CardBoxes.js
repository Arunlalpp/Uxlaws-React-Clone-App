import React from "react";
import CardButton from "./CardButton";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";
import Welcome from "./Welcome";

function CardBoxes(props) {
  return (
    <div className="black">
      <Navbar />
      <div className="box-container">
        <a href="/Welcome.js" className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Aesthetic Usability Effect</h1>
          </div>
          <div className="end-box">
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
        </a>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>01</span>
            <hr></hr>
            <p>
              Users often perceive aesthetically pleasing design as design
              that’s more usable.
            </p>
          </div>
          <CardButton />
        </div>
        </div>

      <div className="box-container-1">
        <div className="container-1">
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
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>02</span>
            <hr></hr>
            <p>{props.para}</p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Fitt's Law</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(123, 178, 77)" }}
          >
            <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#F4F1D0"
                stroke-width="30"
                fill="none"
                fill-rule="evenodd"
              >
                <circle cx="282.882" cy="282.882" r="267.882"></circle>
                <circle cx="282.861" cy="282.861" r="192.861"></circle>
                <circle cx="283.212" cy="283.212" r="119.212"></circle>
                <circle cx="283.213" cy="283.213" r="45.213"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>03</span>
            <hr></hr>
            <p>
              The time to acquire a target is a function of the distance to and
              size of the target.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Hick's Law</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: "rgb(72, 151, 190)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
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
                fill="#000"
                fill-opacity=".2"
              ></circle>
              <circle
                cx="118"
                cy="282"
                r="34"
                fill="#000"
                fill-opacity=".2"
              ></circle>
              <circle
                cx="449"
                cy="282"
                r="34"
                fill="#000"
                fill-opacity=".2"
              ></circle>
              <circle
                cx="531"
                cy="282"
                r="34"
                fill="#000"
                fill-opacity=".2"
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
              <path
                fill="#F4F1D0"
                fill-rule="nonzero"
                d="M317 248h-68v68h68v-68zm-22 46h-25v-25h25v25zm91-22.88889v-22.77778h-22.77778v-22.77777c0-12.52778-10.25-22.77778-22.77778-22.77778h-22.77777V180h-22.77778v22.77778H272.1111V180h-22.77778v22.77778h-22.77777c-12.52778 0-22.77778 10.25-22.77778 22.77778v22.77777H181v22.77778h22.77778v22.77778H181v22.77778h22.77778v22.77777c0 12.52778 10.25 22.77778 22.77778 22.77778h22.77777V385h22.77778v-22.77778h22.77778V385h22.77778v-22.77778h22.77777c12.52778 0 22.77778-10.25 22.77778-22.77778v-22.77777H386v-22.77778h-22.77778V271.1111H386zM341 340H225V224h116v116z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>04</span>
            <hr></hr>
            <p>
              The time it takes to make a decision increases with the number and
              complexity of choices.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Jakob's Law</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(214, 194, 48)" }}
          >
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
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>05</span>
            <hr></hr>
            <p>
              Users spend most of their time on other sites. This means that
              users prefer your site to work the same way as all the other sites
              they already know.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Law of Common Region</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: "rgb(73, 164, 109)" }}
          >
            <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill-opacity=".1" fill="#000" d="M0 0h566v566H0z"></path>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M40 40h486v486H40z"
                ></path>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M80 80h406v406H80z"
                ></path>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="168"
                  cy="168"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="284"
                  cy="168"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="398"
                  cy="168"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="167.209"
                  cy="282.437"
                  r="47.247"
                ></circle>
                <circle
                  fill="#F4F1D0"
                  cx="283.936"
                  cy="282.437"
                  r="47.247"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="398"
                  cy="282"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="168"
                  cy="398"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="284"
                  cy="398"
                  r="48"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="398"
                  cy="398"
                  r="48"
                ></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>06</span>
            <hr></hr>
            <p>
              Elements tend to be perceived into groups if they are sharing an
              area with a clearly defined boundary.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Law of Prägnanz</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: " rgb(242, 126, 172)" }}
          >
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
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>07</span>
            <hr></hr>
            <p>
              People will perceive and interpret ambiguous or complex images as
              the simplest form possible, because it is the interpretation that
              requires the least cognitive effort of us.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Law of Proximity</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: " rgb(234, 126, 56)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 516">
              <g fill="none" fill-rule="evenodd">
                <circle cx="55.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="55.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="55.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="55.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="190.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="190.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="55.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="325.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="325.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="55.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="190.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
                <circle cx="325.5" cy="460.5" r="55.5" fill="#F4F1D0"></circle>
                <circle
                  cx="510.5"
                  cy="460.5"
                  r="55.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>08</span>
            <hr></hr>
            <p>
              Objects that are near, or proximate to each other, tend to be
              grouped together.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Law of Similarity</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(128, 73, 94)" }}
          >
            <svg viewBox="0 0 566 565" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#F4F1D0" cx="48.5" cy="48.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="48.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="283.5" cy="48.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="48.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="48.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="48.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="283.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="400.5" cy="165.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="165.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="48.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="283.5" cy="282.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="282.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="48.5" cy="399.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="166.5"
                  cy="399.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="283.5"
                  cy="399.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="399.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="517.5" cy="399.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="48.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
                <circle fill="#F4F1D0" cx="166.5" cy="516.5" r="48.5"></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="283.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="400.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
                <circle
                  fill-opacity=".2"
                  fill="#000"
                  cx="517.5"
                  cy="516.5"
                  r="48.5"
                ></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>09</span>
            <hr></hr>
            <p>
              The human eye tends to perceive similar elements in a design as a
              complete picture, shape, or group, even if those elements are
              separated.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Law of Uniform Connectedness</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: " rgb(129, 157, 214)" }}
          >
            <svg viewBox="0 0 576 566" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="282.882"
                  cy="282.882"
                  r="281.382"
                ></circle>
                <circle fill="#F4F1D0" cx="179" cy="22" r="12"></circle>
                <circle fill="#F4F1D0" cx="564" cy="271" r="12"></circle>
                <circle fill="#F4F1D0" cx="37" cy="417" r="12"></circle>
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="282.861"
                  cy="282.861"
                  r="206.361"
                ></circle>
                <circle fill="#F4F1D0" cx="80" cy="247" r="12"></circle>
                <circle fill="#F4F1D0" cx="343" cy="86" r="12"></circle>
                <circle fill="#F4F1D0" cx="383" cy="464" r="12"></circle>
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="283.212"
                  cy="283.212"
                  r="132.712"
                ></circle>
                <circle fill="#F4F1D0" cx="403" cy="343" r="12"></circle>
                <circle fill="#F4F1D0" cx="223" cy="402" r="12"></circle>
                <circle fill="#F4F1D0" cx="223" cy="165" r="12"></circle>
                <circle
                  stroke="#F4F1D0"
                  stroke-width="3"
                  cx="283.213"
                  cy="283.213"
                  r="58.713"
                ></circle>
                <circle fill="#F4F1D0" cx="324" cy="240" r="12"></circle>
                <circle fill="#F4F1D0" cx="294" cy="340" r="12"></circle>
                <circle fill="#F4F1D0" cx="226" cy="271" r="12"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>10</span>
            <hr></hr>
            <p>
              Elements that are visually connected are perceived as more related
              than elements with no connection.
            </p>
          </div>
          <CardButton />
        </div>
      </div>
      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Miller's Law</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: " rgb(243, 94, 78)" }}
          >
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
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>11</span>
            <hr></hr>
            <p>
              The average person can only keep 7 (plus or minus 2) items in
              their working memory.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Occam's Razor</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: " rgb(181, 74, 72)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565 564">
              <g fill="none" fill-rule="evenodd">
                <path fill-opacity=".1" fill="#000" d="M1 0h270v270H1z"></path>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="100"
                  cy="100"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="171"
                  cy="100"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="101"
                  cy="170"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="171"
                  cy="170"
                  r="100"
                ></circle>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M295 0h270v270H295z"
                ></path>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="430"
                  cy="100"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="395"
                  cy="170"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="465"
                  cy="170"
                  r="100"
                ></circle>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M1 294h270v270H1z"
                ></path>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="101"
                  cy="394"
                  r="100"
                ></circle>
                <circle
                  fill-opacity=".15"
                  fill="#000"
                  cx="171"
                  cy="464"
                  r="100"
                ></circle>
                <path
                  fill-opacity=".1"
                  fill="#000"
                  d="M295 294h270v270H295z"
                ></path>
                <circle fill="#F4F1D0" cx="430" cy="429" r="100"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>12</span>
            <hr></hr>
            <p>
              Among competing hypotheses that predict equally well, the one with
              the fewest assumptions should be selected.
            </p>
          </div>
          <CardButton />
        </div>
      </div>
      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Pareto Principle</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(55, 171, 191)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
              <g fill="none" fill-rule="evenodd">
                <circle cx="48.5" cy="48.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="166.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="166.5" cy="165.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="283.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="400.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="400.5" cy="399.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="517.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>13</span>
            <hr></hr>
            <p>
              The Pareto principle states that, for many events, roughly 80% of
              the effects come from 20% of the causes.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Parkinson's Law</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: " rgb(190, 170, 72)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598 597">
              <g
                fill="none"
                fill-rule="evenodd"
                transform="rotate(-45 293.76881 309.77343)"
              >
                <circle
                  cx="305.5"
                  cy="305.5"
                  r="54.5"
                  fill="#000"
                  opacity=".2"
                ></circle>
                <path
                  fill="#F4F1D0"
                  fill-rule="nonzero"
                  stroke="#F4F1D0"
                  stroke-width="5"
                  d="M558 251l-9.69375 9.69375 38.3625 38.43125H503v13.75h83.66875l-38.3625 38.43125L558 361l55-55zM55 362l9.69375-9.69375-38.3625-38.43125H110v-13.75H26.33125l38.3625-38.43125L55 252 0 307zM251 55l9.69375 9.69375 38.43125-38.3625V110h13.75V26.33125l38.43125 38.3625L361 55 306 0zM362 557l-9.69375-9.69375-38.43125 38.3625V502h-13.75v83.66875l-38.43125-38.3625L252 557l55 55z"
                ></path>
                <path
                  fill="#F4F1D0"
                  fill-rule="nonzero"
                  d="M114 115v381h383V115H114zM94 95h423v421H94V95z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>14</span>
            <hr></hr>
            <p>
              Any task will inflate until all of the available time is spent.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Peak-End Rule</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(48, 126, 199)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 565">
              <g fill="none" fill-rule="evenodd">
                <circle
                  cx="48.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="48.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="165.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="283.5" cy="282.5" r="48.5" fill="#F4F1D0"></circle>
                <circle
                  cx="400.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="282.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="517.5"
                  cy="399.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="48.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="166.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="283.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle
                  cx="400.5"
                  cy="516.5"
                  r="48.5"
                  fill="#000"
                  fill-opacity=".2"
                ></circle>
                <circle cx="517.5" cy="516.5" r="48.5" fill="#F4F1D0"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>15</span>
            <hr></hr>
            <p>
              People judge an experience largely based on how they felt at its
              peak and at its end, rather than the total sum or average of every
              moment of the experience.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Postel's Law</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: " rgb(79, 168, 82)" }}
          >
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
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>16</span>
            <hr></hr>
            <p>
              Be liberal in what you accept, and conservative in what you send.
            </p>
          </div>
          <CardButton />
        </div>
      </div>
      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Serial Position Effect</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(137, 89, 169)" }}
          >
            <svg viewBox="0 0 566 569" xmlns="http://www.w3.org/1999/xlink">
              <rect fill="#F4F1D0" x="0" y="0" width="122" height="122"></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#F4F1D0"
                x="444"
                y="447"
                width="122"
                height="122"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>17</span>
            <hr></hr>
            <p>
              Users have a propensity to best remember the first and last items
              in a series.
            </p>
          </div>
          <CardButton />
        </div>
      </div>

      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Tesler's Law</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: "rgb(111, 201, 182)" }}
          >
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
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>18</span>
            <hr></hr>
            <p>
              Tesler's Law, also known as The Law of Conservation of Complexity,
              states that for any system there is a certain amount of complexity
              which cannot be reduced.
            </p>
          </div>
          <CardButton />
        </div>
      </div>
      <div className="box-container">
        <div className="container">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Von Restorff Effect</h1>
          </div>
          <div
            className="end-box"
            style={{ backgroundColor: "rgb(116, 166, 121)" }}
          >
            <svg viewBox="0 0 566 569" xlink="http://www.w3.org/1999/xlink">
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="0"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="149"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="298"
                width="122"
                height="122"
              ></rect>
              <circle
                id="oval"
                fill="#F4F1D0"
                cx="356"
                cy="359"
                r="61"
              ></circle>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="298"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="0"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="148"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="295"
                y="447"
                width="122"
                height="122"
              ></rect>
              <rect
                fill="#000000"
                opacity="0.2"
                x="444"
                y="447"
                width="122"
                height="122"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="wrapper-text">
            <span>19</span>
            <hr></hr>
            <p>
              The Von Restorff effect, also known as The Isolation Effect,
              predicts that when multiple similar objects are present, the one
              that differs from the rest is most likely to be remembered.
            </p>
          </div>
          <CardButton />
        </div>
      </div>
      <div className="box-container-1">
        <div className="container-1">
          <div className="box-text">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {" "}
                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
              </svg>
            </div>
            <h1>Zeigarnik Effect</h1>
          </div>
          <div
            className="end-box-1"
            style={{ backgroundColor: "rgb(66, 146, 140)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 566">
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="0"
                width="566"
                height="68"
              ></rect>
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="83"
                width="566"
                height="68"
              ></rect>
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="166"
                width="566"
                height="68"
              ></rect>
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="249"
                width="566"
                height="68"
              ></rect>
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="332"
                width="566"
                height="68"
              ></rect>
              <rect
                fill-opacity="0.2"
                fill="#000000"
                x="0"
                y="415"
                width="566"
                height="68"
              ></rect>
              <rect fill="#F4F1D0" x="0" y="498" width="295" height="68"></rect>
            </svg>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="wrapper-text-1">
            <span>20</span>
            <hr></hr>
            <p>
              People remember uncompleted or interrupted tasks better than
              completed tasks.
            </p>
          </div>
          <CardButton />
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default CardBoxes;
