import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <button className="lg:hover:shadow-button-home my-10 h-40 w-40 rounded-full bg-light-blue font-serif text-button-home uppercase tracking-[1.25px] text-dark-blue max-lg:mx-auto sm:h-60 sm:w-60 lg:my-14 lg:ml-auto lg:mr-4 lg:mt-auto lg:h-72 lg:w-72 lg:text-3xl lg:transition-shadow">
      <Link to="/destination/moon">Explore</Link>
    </button>
  )
}

export default HomeButton
