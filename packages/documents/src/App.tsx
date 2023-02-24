import { Navigate, Route, Routes } from 'react-router-dom'
import DocsApp from './DocsApp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/introduction" />} />
      <Route path="/*" element={<DocsApp />} />
    </Routes>
  )
}
