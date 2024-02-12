import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersContextProvider } from './contexts/FiltersContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </React.StrictMode>,
)
