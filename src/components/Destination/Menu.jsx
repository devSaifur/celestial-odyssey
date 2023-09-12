import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

function Menu({ menuName }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          clsx('tracking-[2.7px]', {
            'border-b-4 pb-2 font-medium text-white': isActive,
          })
        }
        to={menuName}
      >
        <span>{menuName}</span>
      </NavLink>
    </li>
  )
}

export default Menu
