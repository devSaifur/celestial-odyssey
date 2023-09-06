import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <button className="text-button-l my-10 h-36 w-36 rounded-full bg-light-blue uppercase text-dark-blue max-lg:mx-auto lg:ml-auto lg:mr-4 lg:mt-auto">
      <Link to="/destination">Explore</Link>
    </button>
  )
}

export default HomeButton
