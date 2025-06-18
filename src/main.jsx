import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header';
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  
    <>
      <Header />
      <App />
    </>
  
)

