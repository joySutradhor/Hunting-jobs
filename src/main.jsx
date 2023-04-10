import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeContainer from './Components/HomeContainer/HomeContainer';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ViewDetails from './Components/ViewDetails/ViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomeContainer></HomeContainer>,
        loader: () => fetch('data.json')
      },
      {
        path: "/viewdetails",
        element: <ViewDetails></ViewDetails>,

      }, 
      {
        path : "/appliedjobs",
        element : <AppliedJobs></AppliedJobs>
      }
    ]
  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
