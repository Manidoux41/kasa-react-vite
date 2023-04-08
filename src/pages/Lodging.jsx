import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'

function Lodging({apparts}) {

  const {appartId} = useParams()
  const appart = apparts.find((appart) => appart.id === appartId)
  
  return appart ?
    (
    <div className='lodging'>
      <Carousel picProps={appart.pictures} />
    </div>
  ) : 
  (
    <div className='lodging'>
      <h1>Appartement introuvable</h1>
    </div>
  )
}

export default Lodging