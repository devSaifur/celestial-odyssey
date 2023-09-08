import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function DestinationImage() {
  const { id } = useParams()
  const { currentDestination } = useCurrentData(id)

  return (
    <div>
      <img src={currentDestination.images.webp} alt={currentDestination.name} />
    </div>
  )
}

export default DestinationImage
