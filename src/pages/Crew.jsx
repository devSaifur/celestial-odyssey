import CrewDescription from '../components/Crew/CrewDescription'
import CrewMenu from '../components/Crew/CrewMenu'
import { Outlet } from 'react-router-dom'
import Title from '../components/shared/Title'
import Row from '../components/shared/Row'

function Crew() {
  return (
    <>
      <Title num="02" title="Meet your crew" />
      <Outlet />

      <Row>
        <CrewMenu />
        <CrewDescription />
      </Row>
    </>
  )
}

export default Crew
