import React from 'react'

function ContainernextLink(props) {
  return (
    <div className="wrapper-card-next">
      <div className="wrapper-content-box">
          <div className='next-text-box'>
          <span>next</span>
          <a href='/' className='next-link'>{props.nextlink}</a>
          </div>
      </div>
    </div>
  )
}

export default ContainernextLink