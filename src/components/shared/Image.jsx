function Image({ src, name }) {
  return (
    <div>
      <img src={src} alt={name} />
    </div>
  )
}

export default Image
