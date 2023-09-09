import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function DestinationImage() {
  const { id } = useParams()
  const { currentDestination } = useCurrentData(id)

  return (
    <div className="mx-auto max-w-[10.625rem] sm:max-w-[18.75rem] lg:min-w-[27.815rem]">
      <img src={currentDestination.images.webp} alt={currentDestination.name} />
    </div>
  )
}

export default DestinationImage
