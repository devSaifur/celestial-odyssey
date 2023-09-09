import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

function Main({ children }) {
  const location = useLocation()
  const pathName = location.pathname
  const homepage = pathName === '/'

  return (
    <main
      className={clsx('flex flex-col px-8 lg:mb-24 lg:flex-row lg:px-48', {
        'lg:mt-auto': homepage,
      })}
    >
      {children}
    </main>
  )
}

export default Main
