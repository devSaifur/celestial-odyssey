import { useParams } from 'react-router-dom'
import { useCurrentData } from '../../hooks/useCurrentData'

function CrewDescription() {
  const { id } = useParams()
  const { currentCrew } = useCurrentData(id)

  return (
    <div className="mx-auto my-16 flex max-w-[20.5rem] flex-col gap-4 text-center sm:order-1">
      <h2 className="uppercase">{currentCrew.role}</h2>
      <h1 className="uppercase">{currentCrew.name}</h1>
      <p>{currentCrew.bio}</p>
    </div>
  )
}

export default CrewDescription
