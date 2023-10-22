import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Teachers from './components/Teachers.jsx'
import Update from './components/Update.jsx'

// create routes 
const route = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/teachers",
    element : <Teachers />,
    loader : () => fetch('http://localhost:5000/teachers')
  },
  {
    path : "/update/:id",
    element : <Update />,
    loader : ({params}) => fetch(`http://localhost:5000/teachers/${params.id}`) 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route} />
  </React.StrictMode>,
)
