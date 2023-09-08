import Logo from './Logo'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="flex min-h-[5rem] items-center justify-between sm:min-h-[6rem]">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
