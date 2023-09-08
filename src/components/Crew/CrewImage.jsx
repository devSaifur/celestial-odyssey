import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function CrewImage() {
  const { id } = useParams()
  const { currentCrew } = useCurrentData(id)

  return (
    <div>
      <img src={currentCrew.images.webp} alt={currentCrew.name} />
    </div>
  )
}

export default CrewImage
