import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

function TechnologyMenu() {
  return (
    <div className="flex gap-2 py-8 sm:gap-4 lg:order-1 lg:flex-col">
      <div>
        <NavLink
          className={({ isActive }) =>
            clsx(
              'flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-dark-blue sm:h-14 sm:w-14 lg:h-20 lg:w-20',
              { 'bg-white text-dark-blue': isActive }
            )
          }
          to="1"
        >
          1
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            clsx(
              'flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-dark-blue sm:h-14 sm:w-14 lg:h-20 lg:w-20',
              { 'bg-white text-dark-blue': isActive }
            )
          }
          to="2"
        >
          2
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            clsx(
              'flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-dark-blue sm:h-14 sm:w-14 lg:h-20 lg:w-20',
              { 'bg-white text-dark-blue': isActive }
            )
          }
          to="3"
        >
          3
        </NavLink>
      </div>
    </div>
  )
}

export default TechnologyMenu
