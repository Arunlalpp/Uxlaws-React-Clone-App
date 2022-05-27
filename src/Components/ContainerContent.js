import React from "react";
import "./ContainerStyle.css";

function ContainerContent(props) {
  return (
    <div className="wrapper-card">
      <div className="wrapper-content-box">
        <div className="main-3">
          <span className="horizone-line">
            <hr></hr>
          </span>
          <span className="content-text">{props.head}</span>
        </div>
      </div>
    </div>
  );
}

export default ContainerContent;
