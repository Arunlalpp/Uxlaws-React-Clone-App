import React from "react";
import './ContainerStyle.css';

function Containerbigpara(props) {
  return (
    <div className="wrapper-card">
      <div className="wrapper-content-box">
        <div className="big-para">
          <span>{props.bigpara}</span>
        </div>
        <a  className="sources-text" href="/">Sources</a>
      </div>
    </div>
  );
}

export default Containerbigpara;
