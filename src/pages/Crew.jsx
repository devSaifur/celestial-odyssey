import Description from '../components/shared/Description'
import Header from '../components/Header/Header'
import Menu from '../components/shared/Menu'
import PageContainer from '../components/shared/PageContainer'
import PageTitle from '../components/shared/PageTitle'
import CrewImage from '../components/Crew/CrewImage'

function Crew() {
  return (
    <PageContainer>
      <Header />
      <PageTitle />
      <CrewImage />
      <Menu />
      <Description />
    </PageContainer>
  )
}

export default Crew
