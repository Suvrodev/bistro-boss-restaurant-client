import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
   useQuery,
   useMutation,
   useQueryClient,
   QueryClient,
   QueryClientProvider,
 } from '@tanstack/react-query'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';
const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
   <div className='max-w-7xl mx-auto'>
      <AuthProvider>
         <HelmetProvider>
            <React.StrictMode>
            <QueryClientProvider client={queryClient}>
               <RouterProvider router={router} />
            </QueryClientProvider>
            </React.StrictMode>
         </HelmetProvider>
      </AuthProvider>
   </div>
)
