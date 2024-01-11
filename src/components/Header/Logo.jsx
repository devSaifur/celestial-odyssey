import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Logo() {
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
    <Link to="/">
      <div className="ml-6 sm:ml-8 lg:ml-12">
        {isSmallScreen ? (
          <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg">
            <g
              fill="none"
              fillRule="evenodd"
              transform="matrix(0.833333, 0, 0, 0.833333, 0.000133, 0.000006)"
            >
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        )}
      </div>
    </Link>
  )
}

export default Logo
