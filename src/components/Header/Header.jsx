import Logo from './Logo'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
