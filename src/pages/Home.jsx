import HomeButton from '../components/Home/HomeButton'
import HomeTitle from '../components/Home/HomeTitle'
import Main from '../components/Home/Main'
import PageContainer from '../ui/PageContainer'

function Home() {
  return (
    <PageContainer>
      <Main>
        <HomeTitle />
        <HomeButton />
      </Main>
    </PageContainer>
  )
}

export default Home
