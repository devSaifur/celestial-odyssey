import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function CrewDescription() {
  const { id } = useParams()
  const { currentCrew } = useCurrentData(id)

  return (
    <div className="mx-auto flex max-w-[20.5rem] flex-col gap-4 text-center sm:order-1 sm:max-w-md lg:min-w-[45rem] lg:text-start">
      <h2 className="font-serif text-base uppercase text-gray-400 sm:text-2xl lg:text-3xl">
        {currentCrew.role}
      </h2>
      <h1 className="font-serif text-2xl uppercase sm:text-4xl lg:text-6xl">
        {currentCrew.name}
      </h1>
      <p className="lg:max-w-md">{currentCrew.bio}</p>
    </div>
  )
}

export default CrewDescription
