import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Component/Home/Home';
import Login from './Component/Home/LogIn';
import LogIn from './Component/LogIn/LogIn';
import Orders from './Component/Orders';
import Profile from './Component/Profile';
import AuthProvider from './Component/Provider/AuthProvider';
import Register from './Component/Register/Register';
import './index.css';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/log-in',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path : '/logIn',
        element : <LogIn></LogIn>
      },
      {
        path: '/order',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
