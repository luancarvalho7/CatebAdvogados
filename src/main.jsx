import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

import { Home } from './pages/home/home.jsx';
import { ActArea } from './pages/actArea/actArea.jsx';
import { About } from './pages/about/about.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/area/:id",
        element: <ActArea />
      },
      {
        path: "/sobre",
        element: <About />
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

