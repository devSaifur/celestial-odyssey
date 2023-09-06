import { useData } from '../../context/useData'
import Image from '../shared/Image'

function DestinationImage() {
  const { destinations } = useData()

  return (
    <>
      {destinations.map((destination) => (
        <Image
          src={destination.images.webp}
          name={destination.name}
          key={destination.id}
        />
      ))}
    </>
  )
}

export default DestinationImage
