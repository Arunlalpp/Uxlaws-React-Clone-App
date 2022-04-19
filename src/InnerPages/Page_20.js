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
            <a href="/Page_19">prev</a>
          </li>
          <div>
          <hr className="nav-line"></hr>
          </div>
          <li>
            <a href="/Page_1">next</a>
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
      <div className="wrapper-container" style={{backgroundColor: 'rgb(66, 146, 140)'}}>
        <div className="container-box-bg">
          <div className="container-text">
            <h1>20/20</h1>
            <span>Zeigarnik Effect</span>
          </div>
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
        <ContainerContent head="overview" />
        <ContainerPara para="People remember uncompleted or interrupted tasks better than completed tasks." />
        <ContainerContent head="KEY TAKEAWAYS" />
        <ContainerFlexpara
          flexpara="
          Use progress bars for complex tasks to visually indicate when a task is incomplete, and thus increase the likelihood it will be completed."
        />
       <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
      <button className='container-button' style={{backgroundColor: 'rgb(66, 146, 140)'}}>Download Poster</button>
    </div>
      </div>
    </div>
        <ContainerContent head="ORIGINS" />
        <Containerbigpara bigpara="Bluma Wulfovna Zeigarnik (1900 – 1988) was a Soviet psychologist and psychiatrist, a member of the Berlin School of experimental psychology and Vygotsky Circle. She discovered the Zeigarnik effect and contributed to the establishment of experimental psychopathology as a separate discipline in the Soviet Union in the post-World War II period. In the 1920s she conducted a study on memory, in which she compared memory in relation to incomplete and complete tasks. She had found that incomplete tasks are easier to remember than successful ones. This is now known as the Zeigarnik effect. She later began working at the Institute of Higher Nervous Activity which is where she would meet her next big influence Vygowski, and become a part of his circle of scientists. It was also there that Zeigarnik founded the Department of Psychology. During that time, Zeigarnik received the Lewin Memorial Award in 1983 for her psychological research." />
        <ContainerContent head="FURTHER READING" />
        <ContainerLinks
          linktext="The Zeigarnik Effect: Why it is so hard to leave things incomplete"
          linksaparate="Abhishek Chakraborty | Medium.com"
        />
        <ContainerLinks
          linktext="Zeigarnik Effect"
          linksaparate="Coglode"
        />
         <ContainerLinks
          linktext="Zeigarnik Effect on Wikipedia"
          linksaparate="Wikipedia"
        />
      </div>
    </div>
    <div className="wrapper-card-next"style={{backgroundColor:'rgb(80, 100, 133)'}}>
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/Page_1' className='next-link'>Aesthetic Usability Effect</a>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Welcome