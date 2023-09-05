import { useLocation } from 'react-router-dom'

function PageTitle() {
  const location = useLocation()
  const pathName = location.pathname

  if (pathName === '/destination') {
    return (
      <div>
        <p>
          <span>01</span> <span>Pick your destination</span>
        </p>
      </div>
    )
  } else if (pathName === '/crew') {
    return (
      <div>
        <p>
          <span>02</span> <span>Meet your crew</span>
        </p>
      </div>
    )
  } else if (pathName === '/technology') {
    return (
      <div>
        <p>
          <span>03</span> <span>Space launch 101</span>
        </p>
      </div>
    )
  }
}

export default PageTitle
