import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


let counter = 1;

// const root = createRoot(document.getElementById('root'))

function refresh() {
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App counter = {counter}/>
  </StrictMode>,
)
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
