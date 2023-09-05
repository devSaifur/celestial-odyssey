import Header from '../components/Header/Header'
import HomeButton from '../components/Home/HomeButton'
import HomeMain from '../components/Home/HomeMain'
import HomeTitle from '../components/Home/HomeTitle'
import PageContainer from '../components/shared/PageContainer'

function Home() {
  return (
    <PageContainer>
      <Header />
      <HomeMain>
        <HomeTitle />
        <HomeButton />
      </HomeMain>
    </PageContainer>
  )
}

export default Home
