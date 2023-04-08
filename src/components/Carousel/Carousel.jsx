import React from 'react'

function Carousel({picProps}) {
    console.log(picProps)
  return (
    <div className='carousel'>
        <img src={picProps[0]} alt="" />
    </div>
  )
}

export default Carousel