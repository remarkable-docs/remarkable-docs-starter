import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = document.getElementById('root') as HTMLElement

const element = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

if (root.childElementCount) {
  ReactDOM.hydrateRoot(root, element)
} else {
  ReactDOM.createRoot(root).render(element)
}
