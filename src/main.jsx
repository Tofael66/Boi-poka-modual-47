import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Component/Roots/Roots.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Homes from './Homes/Homes.jsx';
import DashBord from './Dashbord/DashBord.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage> ,
    element: <Roots></Roots>,
    children: [
      {
        path: "/" ,
        element: <Homes></Homes>
      } ,
      {
        path: "/dashbord" ,
        element: <DashBord></DashBord>
      } ,
      {
        path:"/books/:bookId" ,
        element: <BookDetails></BookDetails>
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
