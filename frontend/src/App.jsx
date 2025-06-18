import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Resume from './pages/Resume.jsx'
import { Toaster } from 'react-hot-toast';
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: '#243647',
            color: '#fff',
          },
        }}
      />
    </>
  )
}