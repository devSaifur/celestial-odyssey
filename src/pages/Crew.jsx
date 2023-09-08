import CrewDescription from '../components/Crew/CrewDescription'
import CrewMenu from '../components/Crew/CrewMenu'
import PageTitle from '../components/shared/PageTitle'
import { Outlet } from 'react-router-dom'

function Crew() {
  return (
    <>
      <PageTitle />
      <Outlet />
      <CrewMenu />
      <CrewDescription />
    </>
  )
}

export default Crew
