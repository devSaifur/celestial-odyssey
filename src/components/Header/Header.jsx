import Logo from './Logo'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="flex min-h-[5rem] items-center justify-between text-white sm:min-h-[6rem] lg:mt-8">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
