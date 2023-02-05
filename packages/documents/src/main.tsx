import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DocsApp from './docs/DocsApp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/docs/" />
  },
  {
    path: '/docs/*',
    element: <DocsApp />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
