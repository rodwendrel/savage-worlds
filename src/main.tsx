import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Hammer from './pages/Sledgehammer';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/sledge",
    element: <Hammer />
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> 
    <RouterProvider router={router} />  
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
