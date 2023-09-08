import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function TechnologyDescription() {
  const { id } = useParams()
  const { currentTechnology } = useCurrentData(id)

  return (
    <div>
      <h2>The Terminology...</h2>
      <h1>{currentTechnology.name}</h1>
      <p>{currentTechnology.description}</p>
    </div>
  )
}

export default TechnologyDescription
