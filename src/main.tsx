import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let raf = 0
const updateVh = () => {
  const height = window.visualViewport?.height ?? window.innerHeight
  const vh = height * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const scheduleUpdate = () => {
  if (raf) cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    updateVh()
    raf = 0
  })
}

updateVh()
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', scheduleUpdate)
  window.visualViewport.addEventListener('scroll', scheduleUpdate)
} else {
  window.addEventListener('resize', scheduleUpdate)
  window.addEventListener('orientationchange', scheduleUpdate)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
