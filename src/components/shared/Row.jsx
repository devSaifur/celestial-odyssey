import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

function Row({ children }) {
  const pathName = useLocation().pathname
  const crewPage = pathName.includes('crew')

  return (
    <div className={clsx({ 'flex-col sm:flex': crewPage })}>{children}</div>
  )
}

export default Row
