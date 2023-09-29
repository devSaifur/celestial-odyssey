import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Loader from './ui/Loader'

const AppLayout = lazy(() => import('./ui/AppLayout'))
const Home = lazy(() => import('./pages/Home'))
const Destination = lazy(() => import('./pages/Destination'))
const DestinationImage = lazy(() =>
  import('./components/Destination/DestinationImage')
)
const Crew = lazy(() => import('./pages/Crew'))
const CrewImage = lazy(() => import('./components/Crew/CrewImage'))
const Technology = lazy(() => import('./pages/Technology'))
const TechnologyImage = lazy(() =>
  import('./components/Technology/TechnologyImage')
)

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'destination',
        element: <Destination />,
        children: [{ path: ':id', element: <DestinationImage /> }],
      },
      {
        path: 'crew',
        element: <Crew />,
        children: [{ path: ':id', element: <CrewImage /> }],
      },
      {
        path: 'technology',
        element: <Technology />,
        children: [{ path: ':id', element: <TechnologyImage /> }],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
