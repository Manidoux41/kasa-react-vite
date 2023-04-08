import React from 'react'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

function Carousel({picProps}) {
    console.log(picProps)
  return (
    <div className='carousel'>
      <img src={leftArrow} alt="" className="leftArrow" />
        <img src={picProps[0]} alt="" />
      <img src={rightArrow} alt="" className="rightArrow" />
      <p className="counter">
        1 / 3
      </p>
    </div>
  )
}

export default Carousel