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
import Statistics from './Components/Statistics/Statistics';
import Error from './Components/Error/Error';
import Blog from './Components/Blog/Blog';


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
      },
      {
        path : "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path : "/blog",
        element: <Blog></Blog>
      }
    ]
  },
  
  {
    path: "*" ,
    element : <Error></Error>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
