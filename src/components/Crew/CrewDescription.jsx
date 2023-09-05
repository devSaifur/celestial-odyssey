function CrewDescription({ name, role, bio }) {
  return (
    <div>
      <h2>{role}</h2>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  )
}

export default CrewDescription
