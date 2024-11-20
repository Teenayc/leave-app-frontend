import {createBrowserRouter,createHashRouter, Navigate, redirect} from "react-router-dom";
import {Login} from "./views/Authentication/Login.jsx";
import {NotFoundPage} from "./views/NotFoundPage.jsx";
import {Layout} from "./components/Layout.jsx";
import {GuestLayout} from "./components/GuestLayout.jsx";
import Application from "./views/Application/Application.jsx";
import Admin from "./views/Application/Admin.jsx";

const router = createHashRouter ([

  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Application/>,
      },
      {
        path: '/admin',
        element: <Admin/>
      },
    ]
  },

  {
    path: '/',
    element: <GuestLayout/>,
    children:[

      {
        path: '/v1/login',
        element: <Login/>
      },
    ]
  },

  {
    path: '*',
    element: <NotFoundPage/>
  },

])

export default router;
