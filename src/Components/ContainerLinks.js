import React from "react";
import "./ContainerStyle.css";
function ContainerLinks(props) {
  return (
    <div className="wrapper-card">
      <div className="wrapper-content-box">
        <div className="container-link">
          <a href="/">{props.linktext}</a>
        </div>
        <span className="link-separate">{props.linksaparate}</span>
      </div>
    </div>
  );
}

export default ContainerLinks;
