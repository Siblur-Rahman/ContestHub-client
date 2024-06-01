import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './provirders/AuthProvirder';
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
    <ToastContainer/>
  </React.StrictMode>,
)
