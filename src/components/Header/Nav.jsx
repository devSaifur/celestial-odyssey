import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default Nav;
