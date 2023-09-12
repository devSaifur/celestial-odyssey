import { useData } from '../../context/useData'
import Menu from './Menu'

function DestinationMenu() {
  const { destinations } = useData()

  return (
    <ul className="my-8 flex justify-center gap-6 font-normal uppercase text-light-blue lg:justify-start">
      {destinations.map((destination) => (
        <Menu menuName={destination.name} key={destination.id} />
      ))}
    </ul>
  )
}

export default DestinationMenu
