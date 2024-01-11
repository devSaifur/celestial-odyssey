import clsx from 'clsx'
import { useWhichPage } from '../hooks/useWhichPage'

function Title({ num, title }) {
  const { isTechnologyPage } = useWhichPage()

  return (
    <div
      className={clsx(
        'max-h-12 pb-6 text-center text-base uppercase tracking-[2.7px] sm:text-start sm:text-xl lg:text-3xl',
        { 'sm:ml-10 lg:ml-48': isTechnologyPage }
      )}
    >
      <p>
        <span className="mr-2 font-semibold text-gray-600">{num}</span>{' '}
        <span>{title}</span>
      </p>
    </div>
  )
}

export default Title
