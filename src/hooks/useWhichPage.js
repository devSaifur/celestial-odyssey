import { useLocation } from 'react-router-dom'

function useWhichPage() {
  const location = useLocation()
  const currentPath = location.pathname

  const homePage = currentPath === '/'
  const destinationPage = currentPath.includes('/destination')
  const crewPage = currentPath.includes('/crew')
  const technologyPage = currentPath.includes('/technology')

  return { homePage, destinationPage, crewPage, technologyPage }
}

export { useWhichPage }
