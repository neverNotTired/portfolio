import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}