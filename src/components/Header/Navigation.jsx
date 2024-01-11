import { useState } from 'react'
import NavClose from './NavClose'
import NavMenu from './NavMenu'
import NavOpen from './NavOpen'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  function handleNav() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <div className="relative">
      <NavOpen handleNav={handleNav} isOpen={isOpen} />
      <NavClose handleNav={handleNav} isOpen={isOpen} />
      <NavMenu isOpen={isOpen} />
    </div>
  )
}

export default Navigation
