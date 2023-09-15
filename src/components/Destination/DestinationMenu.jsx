import { NavLink } from 'react-router-dom'
import { useData } from '../../context/useData'
import clsx from 'clsx'

function DestinationMenu() {
  const { destinations } = useData()

  return (
    <ul className="my-8 flex justify-center gap-6 font-normal uppercase text-light-blue lg:justify-start">
      {destinations.map((destination) => {
        return (
          <li key={destination.name}>
            <NavLink
              className={({ isActive }) =>
                clsx(
                  'tracking-[2.7px]',
                  {
                    'border-b-4 pb-2 font-medium text-white': isActive,
                  },
                  {
                    'hover:border-b-4 hover:border-gray-500 hover:pb-2':
                      !isActive,
                  }
                )
              }
              to={destination.name}
            >
              <span>{destination.name}</span>
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default DestinationMenu
