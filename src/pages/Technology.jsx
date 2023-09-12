import TechnologyDescription from '../components/Technology/TechnologyDescription'
import TechnologyMenu from '../components/Technology/TechnologyMenu'
import { Outlet } from 'react-router-dom'
import Title from '../components/Title'
import Main from '../components/Technology/Main'

function Technology() {
  return (
    <>
      <Main>
        <Title title="Space launch 101" num="03" />
        <div className="mx-auto flex flex-col items-center gap-2 sm:gap-4 lg:mx-0 lg:flex-row lg:gap-8 lg:pl-48">
          <Outlet />
          <TechnologyMenu />
          <TechnologyDescription />
        </div>
      </Main>
    </>
  )
}

export default Technology
