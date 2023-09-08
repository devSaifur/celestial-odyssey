import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

function NavMenu({ isOpen }) {
  return (
    <nav>
      <ul
        className={clsx(
          'sm:static sm:min-h-[6rem] sm:flex-row sm:items-center sm:gap-6 sm:bg-dark-blue sm:px-12 ',
          {
            'fixed right-0 top-0 flex h-screen w-3/4 flex-col gap-8 pl-16 pt-32 uppercase backdrop-blur-xl':
              isOpen,
            'hidden sm:flex': !isOpen,
          }
        )}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx({ 'sm:border-b-4 sm:border-blue-100 sm:py-8': isActive })
            }
          >
            <span className="tracking-[2.7px]">
              {isOpen && <span className="font-semibold">00 </span>}
              Home
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination/moon"
            className={({ isActive }) =>
              clsx({ 'sm:border-b-4 sm:border-blue-100 sm:py-8': isActive })
            }
          >
            <span className="tracking-[2.7px]">
              {isOpen && <span className="font-semibold">01 </span>}
              Destination
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew/1"
            className={({ isActive }) =>
              clsx({ 'sm:border-b-4 sm:border-blue-100 sm:py-8': isActive })
            }
          >
            <span className="tracking-[2.7px]">
              {isOpen && <span className="font-semibold">02 </span>}
              Crew
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology/1"
            className={({ isActive }) =>
              clsx({ 'sm:border-b-4 sm:border-blue-100 sm:py-8': isActive })
            }
          >
            <span className="tracking-[2.7px]">
              {isOpen && <span className="font-semibold">03 </span>}
              Technology
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
