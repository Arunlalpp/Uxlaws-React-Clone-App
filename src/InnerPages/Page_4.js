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
      <div className="wrapper-link-container">
      <div className="wrapper-container" style={{backgroundColor: 'rgb(72, 151, 190)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>04/20</h1>
            <span>Hick's Law</span>
          </div>
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
        <ContainerContent head="overview" />
        <ContainerPara para="The time it takes to make a decision increases with the number and complexity of choices." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Simplify choices for the user by breaking down complex tasks into smaller steps."
        />
        <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(72, 151, 190)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Hick’s Law (or the Hick-Hyman Law) is named after a British and an American psychologist team of William Edmund Hick and Ray Hyman. In 1952, this pair set out to examine the relationship between the number of stimuli present and an individual’s reaction time to any given stimulus. As you would expect, the more stimuli to choose from, the longer it takes the user to make a decision on which one to interact with. Users bombarded with choices have to take time to interpret and decide, giving them work they don’t want." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="Hick’s Law: Making the choice easier for users"
          linksaparate="Mads Soegaard | Interaction Design Foundation"
        />
        <ContainerLinks
          linktext="Hick’s Law — Quick Decision Making"
          linksaparate="Anton Nikolov | Medium.com"
        />
        <ContainerLinks
          linktext="The Psychology Principles Every UI/UX Designer Needs to Know"
          linksaparate="Thanasis Rigopoulos | Marvel"
        />
        <ContainerLinks
          linktext="Hick’s Law — Quick Decision Making"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(214, 194, 48)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_5' className='next-link'>Jakob's Law</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome