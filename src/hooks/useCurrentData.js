import { useData } from '../context/useData'

function useCurrentData(id) {
  const { destinations, crews, technology } = useData()

  const currentDestination = destinations.find(
    (destination) => destination.name === id
  )
  const currentCrew = crews.find((crew) => Number(crew.id) === Number(id))

  const currentTechnology = technology.find(
    (tech) => Number(tech.id) === Number(id)
  )

  return { currentDestination, currentCrew, currentTechnology }
}

export { useCurrentData }
