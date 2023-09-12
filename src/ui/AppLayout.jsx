import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import PageContainer from './PageContainer'

function AppLayout() {
  return (
    <PageContainer>
      <Header />
      <Outlet />
    </PageContainer>
  )
}

export default AppLayout
