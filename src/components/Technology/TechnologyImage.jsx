import { useData } from '../../context/useData'
import Image from '../shared/Image'

function TechnologyImage() {
  const { technology } = useData()

  return (
    <>
      {technology.map((tech) => (
        <Image src={tech.images.portrait} name={tech.name} key={tech.id} />
      ))}
    </>
  )
}

export default TechnologyImage
