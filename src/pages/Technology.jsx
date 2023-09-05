import Description from '../components/shared/Description'
import Header from '../components/Header/Header'
import Menu from '../components/shared/Menu'
import PageContainer from '../components/shared/PageContainer'
import PageTitle from '../components/shared/PageTitle'
import TechnologyImage from '../components/Technology/TechnologyImage'

function Technology() {
  return (
    <PageContainer>
      <Header />
      <PageTitle />
      <TechnologyImage />
      <Menu />
      <Description />
    </PageContainer>
  )
}

export default Technology
