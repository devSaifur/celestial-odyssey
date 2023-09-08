import { useState, useEffect } from 'react'
import { useWhichPage } from '../../hooks/useWhichPage'

function PageContainer({ children }) {
  const [currentBg, setCurrentBg] = useState('')
  const { homePage, destinationPage, crewPage, technologyPage } = useWhichPage()

  useEffect(
    function () {
      if (homePage) {
        setCurrentBg('bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop')
      } else if (destinationPage) {
        setCurrentBg(
          'bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop'
        )
      } else if (crewPage) {
        setCurrentBg('bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop')
      } else if (technologyPage) {
        setCurrentBg(
          'bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop'
        )
      }
    },
    [homePage, destinationPage, crewPage, technologyPage, setCurrentBg]
  )

  return (
    <div
      className={
        currentBg +
        ' h-screen overflow-hidden bg-cover font-sans text-white lg:flex lg:flex-col'
      }
    >
      {children}
    </div>
  )
}

export default PageContainer
