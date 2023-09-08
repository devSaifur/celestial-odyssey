import PageTitle from '../components/shared/PageTitle'
import { Outlet } from 'react-router-dom'
import DestinationMenu from '../components/Destination/DestinationMenu'
import DestinationDescription from '../components/Destination/DestinationDescription'

function Destination() {
  return (
    <>
      <PageTitle />
      <Outlet />
      <DestinationMenu />
      <DestinationDescription />
    </>
  )
}

export default Destination
