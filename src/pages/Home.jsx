import React from 'react'
import Banner from '../components/Banner/Banner'
import imageBanner1 from '../assets/banner1.jpg'
import Card from '../components/Card/Card'

function Home({apparts}) {

  console.log(apparts)

  return (
    <div className='home'>
      <Banner picban={imageBanner1} titleBanner='Chez vous, partout et ailleurs' />
      <div className="cards">
        {
          apparts.map((appart) => (
            <Card key={appart.id} picCard={appart.cover} titleCard={appart.title} logementId={appart.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home