import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function DestinationDescription() {
  const { id } = useParams()
  const { currentDestination } = useCurrentData(id)
  console.log(currentDestination)

  return (
    <div className="mx-auto grid max-w-[20rem] gap-4 text-center sm:max-w-lg lg:text-start">
      <h1 className="font-serif text-heading-l uppercase">
        {currentDestination.name}
      </h1>
      <p>{currentDestination.description}</p>
      <div className="mx-auto flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="">
          <h3>Avg. distance</h3>
          <h2>{currentDestination.distance}</h2>
        </div>
        <div>
          <h3>Est. travel time</h3>
          <h2>{currentDestination.travel}</h2>
        </div>
      </div>
    </div>
  )
}

export default DestinationDescription
