import TechnologyDescription from '../components/Technology/TechnologyDescription'
import TechnologyMenu from '../components/Technology/TechnologyMenu'
import PageTitle from '../components/shared/PageTitle'
import { Outlet } from 'react-router-dom'

function Technology() {
  return (
    <>
      <PageTitle />
      <Outlet />
      <TechnologyMenu />
      <TechnologyDescription />
    </>
  )
}

export default Technology
