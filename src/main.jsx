import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Features from './Components/Features/Features';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
