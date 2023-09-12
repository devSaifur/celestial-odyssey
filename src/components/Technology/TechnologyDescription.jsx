import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function TechnologyDescription() {
  const { id } = useParams()
  const { currentTechnology } = useCurrentData(id)

  return (
    <div className="flex flex-col items-center gap-2 px-8 text-center lg:order-2 lg:min-w-[36rem] lg:max-w-lg lg:items-start lg:gap-4 lg:text-start">
      <h2 className="text-sm uppercase tracking-[2.36px] text-light-blue sm:text-base">
        The Terminology...
      </h2>
      <h1 className="font-serif text-2xl uppercase sm:text-4xl lg:text-6xl">
        {currentTechnology.name}
      </h1>
      <p className="max-w-sm">{currentTechnology.description}</p>
    </div>
  )
}

export default TechnologyDescription
