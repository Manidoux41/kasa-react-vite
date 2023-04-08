import React, { useState } from 'react'
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

function Carousel({picProps}) {
    console.log(picProps)

    const [indexPic, setIndexPic] = useState(0)

    const incrementDown = () => {
      setIndexPic((indexPic + picProps.length - 1) % picProps.length)
    }

    const incrementUp = () => {
      setIndexPic((indexPic + 1) % picProps.length)
    }

  return (
    <div className='carousel'>
      <img src={leftArrow} alt="" className="leftArrow" onClick={incrementDown} />
        <img src={picProps[indexPic]} alt="" />
      <img src={rightArrow} alt="" className="rightArrow" onClick={incrementUp} />
      <p className="counter">
        {indexPic+1} / {picProps.length}
      </p>
    </div>
  )
}

export default Carousel