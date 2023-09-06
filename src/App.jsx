import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

import DestinationImage from './components/Destination/DestinationImage'

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="destination" element={<Destination />}>
        <Route index path=":name" element={<DestinationImage />} />
      </Route>
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Routes>
  )
}

export default App
