import TechnologyDescription from '../components/Technology/TechnologyDescription'
import TechnologyMenu from '../components/Technology/TechnologyMenu'
import { Outlet } from 'react-router-dom'

function Technology() {
  return (
    <>
      <Outlet />
      <TechnologyMenu />
      <TechnologyDescription />
    </>
  )
}

export default Technology
