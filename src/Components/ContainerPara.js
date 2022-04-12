import React from "react";
import "./ContainerStyle.css";

function ContainerPara(props) {
  return (
    <div className="wrapper-card">
      <div className="wrapper-content-box">
        <div className="top-para">
          <span className="para-black">{props.para}</span>
        </div>
      </div>
    </div>
  );
}

export default ContainerPara;
