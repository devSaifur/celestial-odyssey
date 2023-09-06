function DestinationDescription({ title, description, distance, travelTime }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>Avg. distance</h3>
      <h2>{distance}</h2>
      <h3>Est. travel time</h3>
      <h2>{travelTime}</h2>
    </div>
  )
}

export default DestinationDescription
