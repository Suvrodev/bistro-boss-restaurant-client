import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
   <div className='max-w-7xl mx-auto'>
      <HelmetProvider>
          <React.StrictMode>
             <RouterProvider router={router} />
          </React.StrictMode>
      </HelmetProvider>
   </div>
)
