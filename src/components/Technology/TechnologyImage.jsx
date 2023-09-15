import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function TechnologyImage() {
  const { id } = useParams()
  const { currentTechnology } = useCurrentData(id)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  useEffect(function () {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="lg:order-3 lg:ml-auto lg:mr-0 lg:max-w-lg">
      <img
        src={
          isSmallScreen
            ? currentTechnology.images.landscape
            : currentTechnology.images.portrait
        }
        alt={currentTechnology.name}
      />
    </div>
  )
}

export default TechnologyImage
