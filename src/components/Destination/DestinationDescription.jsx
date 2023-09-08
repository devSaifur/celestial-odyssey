import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function DestinationDescription() {
  const { id } = useParams()
  const { currentDestination } = useCurrentData(id)

  return (
    <div>
      <h1>{currentDestination.title}</h1>
      <p>{currentDestination.description}</p>
      <h3>Avg. distance</h3>
      <h2>{currentDestination.distance}</h2>
      <h3>Est. travel time</h3>
      <h2>{currentDestination.travelTime}</h2>
    </div>
  )
}

export default DestinationDescription
