import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageContainer({ children }) {
  const [currentBg, setCurrentBg] = useState('')

  const location = useLocation()
  const currentPath = location.pathname

  useEffect(
    function () {
      if (currentPath === '/') {
        setCurrentBg('bg-home-mobile md:bg-home-tablet lg:bg-home-desktop')
      } else if (currentPath === '/destination') {
        setCurrentBg(
          'bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop'
        )
      } else if (currentPath === '/crew') {
        setCurrentBg('bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop')
      } else if (currentPath === '/technology') {
        setCurrentBg(
          'bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop'
        )
      }
    },
    [currentPath]
  )

  return (
    <div
      className={
        currentBg +
        ' text-white h-screen overflow-hidden bg-cover px-5 py-4 font-sans lg:flex lg:flex-col'
      }
    >
      {children}
    </div>
  )
}

export default PageContainer
