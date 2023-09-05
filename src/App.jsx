import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: 'destination',
    element: <Destination />,
    children: [
      {
        path: 'destination/:name',
      },
    ],
  },
  { path: 'crew', element: <Crew />, children: [{ path: 'crew/:id' }] },
  {
    path: 'technology',
    element: <Technology />,
    children: [{ path: 'technology/:name' }],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
