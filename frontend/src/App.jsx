import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import { Toaster } from 'react-hot-toast';
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
        <Route
          path="/project/:documentId"
          element={<ProjectDetail />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/blog/:documentId"
          element={<BlogDetail />}
        />
        <Route path="/blog" element={<Blog />} />
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