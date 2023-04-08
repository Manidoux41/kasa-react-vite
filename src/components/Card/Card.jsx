import React from 'react'
import { Link } from 'react-router-dom'

function Card({logementId, picCard, titleCard}) {
  return (
    <Link to={`/lodging/${logementId}`} className='card'>
        <img src={picCard} alt="/" />
        <h3>{titleCard}</h3>
    </Link>
  )
}

export default Card