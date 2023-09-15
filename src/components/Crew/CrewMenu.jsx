import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

function CrewMenu() {
  return (
    <ul className="mx-auto flex gap-4 sm:order-2 lg:ml-0 lg:mr-auto">
      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            clsx(
              'h-4 w-4 rounded-full border-none',
              {
                'bg-slate-50': isActive,
              },
              {
                ' bg-slate-600 transition-colors hover:bg-slate-400': !isActive,
              }
            )
          }
          to="1"
        ></NavLink>
      </li>

      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            clsx(
              'h-4 w-4 rounded-full border-none',
              {
                'bg-white': isActive,
              },
              {
                ' bg-slate-600 transition-colors hover:bg-slate-400': !isActive,
              }
            )
          }
          to="2"
        ></NavLink>
      </li>

      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            clsx(
              'h-4 w-4 rounded-full border-none',
              {
                'bg-white': isActive,
              },
              {
                ' bg-slate-600 transition-colors hover:bg-slate-400': !isActive,
              }
            )
          }
          to="3"
        ></NavLink>
      </li>

      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            clsx(
              'h-4 w-4 rounded-full border-none',
              {
                'bg-white': isActive,
              },
              {
                ' bg-slate-600 transition-colors hover:bg-slate-400': !isActive,
              }
            )
          }
          to="4"
        ></NavLink>
      </li>
    </ul>
  )
}

export default CrewMenu
