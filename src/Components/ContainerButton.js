import React from 'react';
import './ContainerButton.css';

function ContainerButton(props) {
  return (
    <div className="wrapper-card">
      <div className="wrapper-content-box">
      <div className='container-button-top'>
        <button className='container-button'>{props.content}</button>
    </div>
      </div>
    </div>
  )
}

export default ContainerButton