import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donated from './components/Donated/Donated';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donated></Donated>,
        loader : ()=> fetch("../api.json")
      },
      {
        path:"/donationDetail/:id",
        element: <DonationDetails></DonationDetails>,
        loader : ()=> fetch("../api.json")
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
