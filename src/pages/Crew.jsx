import { Outlet } from 'react-router-dom'
import CrewDescription from '../components/Crew/CrewDescription'
import CrewMenu from '../components/Crew/CrewMenu'
import Title from '../components/Title'
import Main from '../components/Crew/Main'

function Crew() {
  return (
    <>
      <Main>
        <Title num="02" title="Meet your crew" />
        <Outlet />
        <CrewMenu />
        <CrewDescription />
      </Main>
    </>
  )
}

export default Crew
