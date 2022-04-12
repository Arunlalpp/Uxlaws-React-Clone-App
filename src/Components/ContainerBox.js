import React from "react";
import Containerbigpara from "./Containerbigpara";
import ContainerButton from "./ContainerButton";
import ContainerContent from "./ContainerContent";
import ContainerFlexpara from "./ContainerFlexpara";
import ContainerLinks from "./ContainerLinks";
import ContainerPara from "./ContainerPara";

function ContainerBox() {
  return (
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
      />
      <ContainerButton content="download the poster" />
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
  );
}

export default ContainerBox;
