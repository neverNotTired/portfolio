import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Resume from './pages/Resume.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}