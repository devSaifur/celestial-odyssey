import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Main from './Main'
import PageContainer from '../components/shared/PageContainer'

function AppLayout() {
  return (
    <PageContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </PageContainer>
  )
}

export default AppLayout
