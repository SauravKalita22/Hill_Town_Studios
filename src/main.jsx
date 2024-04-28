import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import OurServices from './Components/OurServices.jsx'
import Blog from './Components/Blog.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ContactUs from './Components/ContactUs.jsx'
import OurWork from './Components/OurWork.jsx'
import BookOnline from './Components/BookOnline.jsx'
import Layout from './Layout.jsx'
import  {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/OurServices",
    element: <Layout><OurServices /></Layout>,
  },
  {
    path: "/OurWork",
    element: <Layout><OurWork /></Layout>,
  },
  {
    path: "/BookOnline",
    element: <Layout><BookOnline/></Layout>,
  },
  {
    path: "/Blog",
    element: <Layout><Blog /></Layout>,
  },
  {
    path: "/AboutUs",
    element: <Layout><AboutUs /></Layout>,
  },
  {
    path: "/ContactUs",
    element: <Layout><ContactUs /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
