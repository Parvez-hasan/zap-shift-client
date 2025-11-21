import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import CovarRage from "../Pages/CovaRage/CovarRage";
import Error from "../Pages/Home/Error/Error";
import AboutUs from "../Pages/AbouUs/AboutUs";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    element: <Error></Error>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: "covarRage",
          Component : CovarRage,
          loader: () => fetch('/serviceCenter.json').then(res => res.json())
        },
        {
          path: "aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/*",
          element: <Error></Error>
        }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login

      },
      {
        path: "register",
         Component: Register
        }
      
    ]
  }
]);