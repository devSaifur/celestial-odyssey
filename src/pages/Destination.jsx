import { Outlet } from 'react-router-dom'
import DestinationMenu from '../components/Destination/DestinationMenu'
import DestinationDescription from '../components/Destination/DestinationDescription'
import Title from '../components/shared/Title'
import Row from '../components/shared/Row'

function Destination() {
  return (
    <>
      <Row>
        <Title num="01" title="Pick your destination" />
        <Outlet />
      </Row>
      <Row>
        <DestinationMenu />
        <DestinationDescription />
      </Row>
    </>
  )
}

export default Destination
