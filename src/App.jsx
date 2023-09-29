import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import DestinationImage from './components/Destination/DestinationImage'
import CrewImage from './components/Crew/CrewImage'
import TechnologyImage from './components/Technology/TechnologyImage'

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
