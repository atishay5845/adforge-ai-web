import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'

createRoot(document.getElementById('root')! as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)