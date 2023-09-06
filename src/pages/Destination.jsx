import Menu from '../components/shared/Menu'
import Header from '../components/Header/Header'
import PageContainer from '../components/shared/PageContainer'
import PageTitle from '../components/shared/PageTitle'
import Description from '../components/shared/Description'
import { Outlet } from 'react-router-dom'

function Destination() {
  return (
    <PageContainer>
      <Header />
      <PageTitle />
      <Outlet />
      <Menu />
      <Description />
    </PageContainer>
  )
}

export default Destination
