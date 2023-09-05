import { useLocation } from 'react-router-dom'
import { useData } from '../../context/useData'
import DestinationDescription from '../Destination/DestinationDescription'
import CrewDescription from '../Crew/CrewDescription'
import TechnologyDescription from '../Technology/TechnologyDescription'

function Description() {
  const { destinations, crews, technology } = useData()
  const location = useLocation()
  const pathName = location.pathname

  if (pathName === '/destination') {
    return (
      <>
        {destinations.map((destination) => (
          <DestinationDescription
            title={destination.name}
            description={destination.description}
            distance={destination.distance}
            travelTime={destination.travel}
            key={destination.id}
          />
        ))}
      </>
    )
  } else if (pathName === '/crew') {
    return (
      <>
        {crews.map((crew) => (
          <CrewDescription
            role={crew.role}
            name={crew.name}
            bio={crew.bio}
            key={crew.id}
          />
        ))}
      </>
    )
  } else if (pathName === '/technology') {
    return (
      <>
        {technology.map((tech) => (
          <TechnologyDescription
            name={tech.name}
            description={tech.description}
            key={tech.id}
          />
        ))}
      </>
    )
  }
}

export default Description
