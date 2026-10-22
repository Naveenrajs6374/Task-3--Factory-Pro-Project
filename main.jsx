import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const DESIGN_WIDTH = 1920
const FIT_MIN_WIDTH = 1025 

const baseDpr = window.devicePixelRatio 


function fitToScreen() {
  const width = document.documentElement.clientWidth

  if (width < FIT_MIN_WIDTH) {
    document.body.style.zoom = ''
    return
  }

  const zoomFactor = window.devicePixelRatio / baseDpr 
  const scale = (width * zoomFactor) / DESIGN_WIDTH
  document.body.style.zoom = scale
}

fitToScreen()
window.addEventListener('resize', fitToScreen)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)