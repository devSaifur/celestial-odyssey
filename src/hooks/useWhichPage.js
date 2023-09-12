import { useLocation } from 'react-router-dom'

function useWhichPage() {
  const location = useLocation()
  const currentPath = location.pathname

  const isHomePage = currentPath === '/'
  const isDestinationPage = currentPath.includes('/destination')
  const isCrewPage = currentPath.includes('/crew')
  const isTechnologyPage = currentPath.includes('/technology')

  return { isHomePage, isDestinationPage, isCrewPage, isTechnologyPage }
}

export { useWhichPage }
