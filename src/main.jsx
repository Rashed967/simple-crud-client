import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Teachers from './components/Teachers.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/teachers",
    element : <Teachers />,
    loader : () => fetch('http://localhost:5000/teachers')
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
