import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import PageContainer from './ui/PageContainer'
const Destination = lazy(() => import('./pages/Destination'))
const Crew = lazy(() => import('./pages/Crew'))
const Technology = lazy(() => import('./pages/Technology'))
const DestinationImage = lazy(
  () => import('./components/Destination/DestinationImage')
)
const CrewImage = lazy(() => import('./components/Crew/CrewImage'))
const TechnologyImage = lazy(
  () => import('./components/Technology/TechnologyImage')
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'destination',
        element: (
          <Suspense fallback={<PageContainer variant="destination" />}>
            <Destination />
          </Suspense>
        ),
        children: [
          {
            path: ':id',
            element: (
              <Suspense>
                <DestinationImage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'crew',
        element: (
          <Suspense fallback={<PageContainer variant="crew" />}>
            <Crew />
          </Suspense>
        ),
        children: [
          {
            path: ':id',
            element: (
              <Suspense>
                <CrewImage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'technology',
        element: (
          <Suspense fallback={<PageContainer variant="technology" />}>
            <Technology />
          </Suspense>
        ),
        children: [
          {
            path: ':id',
            element: (
              <Suspense>
                <TechnologyImage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
