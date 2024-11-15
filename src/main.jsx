import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home.jsx';
import LogIn from './components/LogIn.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<LogIn></LogIn>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>,
      },
      {
        path:'profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
