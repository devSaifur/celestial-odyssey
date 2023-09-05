import Menu from '../components/shared/Menu'
import Header from '../components/Header/Header'
import PageContainer from '../components/shared/PageContainer'
import PageTitle from '../components/shared/PageTitle'
import Model from '../components/Destination/Model'
import Description from '../components/shared/Description'

function Destination() {
  return (
    <PageContainer>
      <Header />
      <PageTitle />
      <Model />
      <Menu />
      <Description />
    </PageContainer>
  )
}

export default Destination
