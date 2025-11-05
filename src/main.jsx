import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './Routers/routers.jsx'
import './global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
