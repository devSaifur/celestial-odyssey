import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function TechnologyImage() {
  const { id } = useParams()
  const { currentTechnology } = useCurrentData(id)

  return (
    <div>
      <img
        src={currentTechnology?.images.portrait}
        alt={currentTechnology?.name}
      />
    </div>
  )
}

export default TechnologyImage
