import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function CrewDescription() {
  const { id } = useParams()
  const { currentCrew } = useCurrentData(id)

  return (
    <div>
      <h2>{currentCrew.role}</h2>
      <h1>{currentCrew.name}</h1>
      <p>{currentCrew.bio}</p>
    </div>
  )
}

export default CrewDescription
