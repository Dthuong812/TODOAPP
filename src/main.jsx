import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage';
import Todo from './pages/Todo';

const router = createBrowserRouter([{
  path:"/",
  element:<App></App>,
  errorElement:<ErrorPage></ErrorPage>,
  children :[
    {
      index: true,
      element:<Todo></Todo>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
