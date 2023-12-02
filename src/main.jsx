import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './index.css'
import Navbar from './components/v1/common/Navbar'
import Footer from './components/v1/common/Footer'
import About from './components/v1/About'
import Contact from './components/v1/Contact'
import Event from './components/v1/Event'
import Home from './components/v1/Home'
import Team from './components/v1/Team'
import Error from './components/v1/error/Error'

const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/event",
        element:<Event/>
      },
      {
        path:"/team",
        element:<Team/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);