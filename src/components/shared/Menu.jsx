import { useLocation } from 'react-router-dom'
import { useData } from '../../context/useData'
import DestinationMenu from '../Destination/DestinationMenu'
import CrewMenu from '../Crew/CrewMenu'
import TechnologyMenu from '../Technology/TechnologyMenu'

function Menu() {
  const location = useLocation()
  const pathName = location.pathname
  const { destinations } = useData()

  if (pathName === '/destination') {
    return (
      <ul>
        {destinations.map((destination) => (
          <DestinationMenu
            menuName={destination.name}
            menuId={destination.id}
            key={destination.id}
          />
        ))}
      </ul>
    )
  } else if (pathName === '/crew') {
    return <CrewMenu />
  } else if (pathName === '/technology') {
    return <TechnologyMenu />
  }
}

export default Menu
