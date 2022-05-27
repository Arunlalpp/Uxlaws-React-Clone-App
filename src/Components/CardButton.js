import React from 'react'
import { Link } from 'react-router-dom'

function CardButton({redirect}) {

  return (
    <div className='flex-button'>
    <Link to ={redirect} className='end-button'>Learn more</Link>
    </div>
  )
}

export default CardButton