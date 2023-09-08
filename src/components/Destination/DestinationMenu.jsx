import { useData } from '../../context/useData'
import Menu from './Menu'

function DestinationMenu() {
  const { destinations } = useData()

  return (
    <ul>
      {destinations.map((destination) => (
        <Menu menuName={destination.name} key={destination.id} />
      ))}
    </ul>
  )
}

export default DestinationMenu
