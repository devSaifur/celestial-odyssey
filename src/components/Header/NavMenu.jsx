import { Link } from 'react-router-dom'

function NavMenu({ isOpen }) {
  return (
    <ul
      className={`${
        isOpen ? 'visible' : 'invisible'
      } absolute mr-6 flex gap-8 bg-dark-blue px-14 py-10 uppercase sm:visible sm:static`}
    >
      <li>
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/destination">
          <span>Destination</span>
        </Link>
      </li>
      <li>
        <Link to="/crew">
          <span>Crew</span>
        </Link>
      </li>
      <li>
        <Link to="/technology">
          <span>Technology</span>
        </Link>
      </li>
    </ul>
  )
}

export default NavMenu
