import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function CrewImage() {
  const { id } = useParams()
  const { currentCrew } = useCurrentData(id)

  return (
    <div className="mx-auto min-w-[20.5rem] border-b sm:order-last sm:border-b-0">
      <img
        className="mx-auto max-w-[15rem]"
        src={currentCrew.images.webp}
        alt={currentCrew.name}
      />
    </div>
  )
}

export default CrewImage
