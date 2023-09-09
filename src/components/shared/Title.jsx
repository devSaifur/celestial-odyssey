function Title({ num, title }) {
  return (
    <div className="pb-6 text-center uppercase tracking-[2.7px] sm:text-start">
      <p>
        <span className="mr-2 font-semibold text-gray-600">{num}</span>{' '}
        <span>{title}</span>
      </p>
    </div>
  )
}

export default Title
