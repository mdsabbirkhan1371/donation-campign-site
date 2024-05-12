import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import Home from './Components/Home/Home.jsx'
import Donation from './Components/Donation/Donation.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
