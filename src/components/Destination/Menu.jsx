import { NavLink } from 'react-router-dom'

function Menu({ menuName }) {
  return (
    <li>
      <NavLink to={menuName}>
        <span>{menuName}</span>
      </NavLink>
    </li>
  )
}

export default Menu
