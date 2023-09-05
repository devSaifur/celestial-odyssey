import { useContext } from 'react'
import { DataContext } from './DataContext'

function useData() {
  const value = useContext(DataContext)

  if (value === undefined)
    throw new Error('DataContext was used outside of DataProvider')
  return value
}

export { useData }
