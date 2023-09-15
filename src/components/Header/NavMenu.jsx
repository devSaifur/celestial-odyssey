import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { useWhichPage } from '../../hooks/useWhichPage'

function NavMenu({ isOpen }) {
  const { isHomePage, isDestinationPage, isCrewPage, isTechnologyPage } =
    useWhichPage()

  return (
    <nav>
      <ul
        className={clsx(
          'uppercase sm:static sm:min-h-[6rem] sm:flex-row sm:items-center sm:gap-6 sm:px-12 lg:px-36 lg:before:absolute lg:before:left-[-32rem] lg:before:block lg:before:w-3/4 lg:before:border lg:before:border-gray-500', // global
          {
            // only when the nav in open on the small screen
            'fixed right-0 top-0 flex h-screen w-3/4 flex-col gap-8 pl-16 pt-32 backdrop-blur-xl':
              isOpen,
            'hidden sm:flex lg:backdrop-blur-xl': !isOpen, // nav is closed by default so It's also setting the bg that's only for homepage
            'sm:bg-dark-blue': !isHomePage, // setting default bg for big screens which are not homepage
          }
        )}
      >
        <li>
          <NavLink
            to="/"
            className={clsx(
              {
                'sm:border-b-4 sm:py-8': isHomePage,
              },
              {
                'hover:border-b-4 hover:border-gray-500 lg:py-8': !isHomePage,
              }
            )}
          >
            <span
              className={clsx(
                "tracking-[2.7px] before:text-center before:align-baseline before:font-semibold lg:before:content-['00']",
                {
                  "before:font-semibold before:content-['00']": isOpen,
                }
              )}
            >
              {' '}
              Home
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/destination/moon"
            className={clsx(
              {
                'sm:border-b-4 sm:py-8': isDestinationPage,
              },
              {
                'hover:border-b-4 hover:border-gray-500 lg:py-8':
                  !isDestinationPage,
              }
            )}
          >
            <span
              className={clsx(
                "tracking-[2.7px] before:text-center before:align-baseline before:font-semibold lg:before:content-['01']",
                {
                  "before:font-semibold before:content-['01']": isOpen,
                }
              )}
            >
              {' '}
              Destination
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/crew/1"
            className={clsx(
              {
                'sm:border-b-4 sm:py-8': isCrewPage,
              },
              {
                'hover:border-b-4 hover:border-gray-500 lg:py-8': !isCrewPage,
              }
            )}
          >
            <span
              className={clsx(
                "tracking-[2.7px] before:text-center before:align-baseline before:font-semibold lg:before:content-['02']",
                {
                  "before:font-semibold before:content-['02']": isOpen,
                }
              )}
            >
              {' '}
              Crew
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/technology/1"
            className={clsx(
              {
                'sm:border-b-4 sm:border-blue-100 sm:py-8': isTechnologyPage,
              },
              {
                'hover:border-b-4 hover:border-gray-500 lg:py-8':
                  !isTechnologyPage,
              }
            )}
          >
            <span
              className={clsx(
                "tracking-[2.7px] before:text-center before:align-baseline before:font-semibold lg:before:content-['03']",
                {
                  "before:font-semibold before:content-['03']": isOpen,
                }
              )}
            >
              {' '}
              Technology
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
