import clsx from 'clsx'

function NavOpen({ handleNav, isOpen }) {
  return (
    <button
      onClick={handleNav}
      className={clsx({
        hidden: isOpen,
        'absolute right-6 top-[-0.5rem] z-50 sm:hidden': !isOpen,
      })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        </g>
      </svg>
    </button>
  )
}

export default NavOpen
