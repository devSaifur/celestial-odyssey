import clsx from 'clsx'
import { useWhichPage } from '../hooks/useWhichPage'

function PageContainer({ children }) {
  const { isHomePage, isDestinationPage, isCrewPage, isTechnologyPage } =
    useWhichPage()

  return (
    <div
      className={clsx(
        'h-screen overflow-hidden bg-cover font-sans text-white lg:flex lg:flex-col',
        {
          'bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop': isHomePage,
        },
        {
          'bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop':
            isDestinationPage,
        },
        { 'bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop': isCrewPage },
        {
          'bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop':
            isTechnologyPage,
        }
      )}
    >
      {children}
    </div>
  )
}

export default PageContainer
