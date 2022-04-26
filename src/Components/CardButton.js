import React from 'react'
import { Link } from 'react-router-dom'

function CardButton() {
  return (
    <div className='flex-button'>
      <Link to = "/Page1">
        <button  className='end-button'>Learn more</button> </Link>
    </div>
  )
}

export default CardButton