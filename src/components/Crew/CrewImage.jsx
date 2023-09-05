import { useData } from '../../context/useData'
import Image from '../shared/Image'

function CrewImage() {
  const { crews } = useData()

  return (
    <>
      {crews.map((crew) => (
        <Image src={crew.images.webp} name={crew.name} key={crew.id} />
      ))}
    </>
  )
}

export default CrewImage
