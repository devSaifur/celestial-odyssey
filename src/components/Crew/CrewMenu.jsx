import { NavLink } from 'react-router-dom'

function CrewMenu() {
  return (
    <div className="mx-auto flex gap-4 sm:order-2">
      <div>
        <NavLink to="1">1</NavLink>
      </div>
      <div>
        <NavLink to="2">2</NavLink>
      </div>
      <div>
        <NavLink to="3">3</NavLink>
      </div>
      <div>
        <NavLink to="4">4</NavLink>
      </div>
    </div>
  )
}

export default CrewMenu
