import React from 'react'

function Banner({picban, titleBanner}) {
  return (
    <div className='banner'>
        <img src={picban} alt="/" />
        <h1>{titleBanner}</h1>
    </div>
  )
}

export default Banner