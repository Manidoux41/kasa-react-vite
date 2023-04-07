import React from 'react'
import Banner from '../components/Banner/Banner'
import imageBanner1 from '../assets/banner1.jpg'

function Home() {
  return (
    <div className='home'>
      <Banner picban={imageBanner1} titleBanner='Chez vous, partout et ailleurs' />
    </div>
  )
}

export default Home