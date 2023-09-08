import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <button className="text-button-home my-10 h-48 w-48 rounded-full bg-light-blue font-serif uppercase tracking-[1.25px] text-dark-blue max-lg:mx-auto lg:ml-auto lg:mr-4 lg:mt-auto">
      <Link to="/destination">Explore</Link>
    </button>
  )
}

export default HomeButton
