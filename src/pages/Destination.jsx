import { Outlet } from 'react-router-dom'
import DestinationMenu from '../components/Destination/DestinationMenu'
import DestinationDescription from '../components/Destination/DestinationDescription'
import Title from '../components/Title'
import Row from '../components/Destination/Row'
import Main from '../components/Destination/Main'

function Destination() {
  return (
    <>
      <Main>
        <Row>
          <Title num="01" title="Pick your destination" />
          <Outlet />
        </Row>
        <Row>
          <DestinationMenu />
          <DestinationDescription />
        </Row>
      </Main>
    </>
  )
}

export default Destination
