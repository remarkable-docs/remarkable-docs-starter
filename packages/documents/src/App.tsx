import { Navigate, Route, Routes } from 'react-router-dom'
import DocsApp from './DocsApp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/docs/introduction" />} />
      <Route path="/docs/*" element={<DocsApp />} />
    </Routes>
  )
}
