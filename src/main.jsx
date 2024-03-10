import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './main.css'

import Home from './home';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/about",
    element: (<Home />),
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
