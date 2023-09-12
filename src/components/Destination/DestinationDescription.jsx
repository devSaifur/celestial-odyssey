import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function DestinationDescription() {
  const { id } = useParams()
  const { currentDestination } = useCurrentData(id)

  return (
    <div className="mx-auto flex flex-col items-center gap-6 text-center sm:max-w-lg lg:text-start">
      <div className="flex flex-col border-b border-b-gray-700 pb-6 sm:pb-12">
        <h1 className="font-serif text-heading-l uppercase">
          {currentDestination.name}
        </h1>
        <p className="mx-auto max-w-[20rem] sm:max-w-xl">
          {currentDestination.description}
        </p>
      </div>
      <div className="mx-auto flex flex-col gap-6 sm:flex-row sm:gap-16">
        <div className="">
          <h3 className="text-sm uppercase tracking-[2.36px] text-light-blue">
            Avg. distance
          </h3>
          <h2 className="font-serif text-heading-xs uppercase">
            {currentDestination.distance}
          </h2>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[2.36px] text-light-blue">
            Est. travel time
          </h3>
          <h2 className="font-serif text-heading-xs uppercase">
            {currentDestination.travel}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default DestinationDescription
