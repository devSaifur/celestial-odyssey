import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function CrewImage() {
  const { id } = useParams()
  const { currentCrew } = useCurrentData(id)

  return (
    <div className="mx-auto min-w-[20.5rem] border-b border-b-gray-600 sm:order-3 sm:border-b-0 lg:mx-0 lg:flex lg:min-w-[44.5rem] lg:basis-1/2 lg:justify-center">
      <img
        className="mx-auto max-w-[15rem] sm:max-h-[35.75rem] sm:min-w-max lg:mx-0"
        src={currentCrew.images.webp}
        alt={currentCrew.name}
      />
    </div>
  )
}

export default CrewImage
