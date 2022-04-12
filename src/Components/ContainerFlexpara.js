import React from "react";
import './ContainerStyle.css';

function ContainerFlexpara(props) {
  return (
    <div className="wrapper-card">
      <div className="wrapper-content-box">
        <div className="para-flex">
          <span>{props.flexpara}</span> 
          <span>{props.flexpara}</span>
          <span>{props.flexpara}</span>
        </div>
      </div>
    </div>
  );
}

export default ContainerFlexpara;
