import { Link } from 'react-router-dom'

function DestinationMenu({ menuName, menuId }) {
  return (
    <li>
      <Link to={menuId}>
        <span>{menuName}</span>
      </Link>
    </li>
  )
}

export default DestinationMenu
