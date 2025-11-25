import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import CovarRage from "../Pages/CovaRage/CovarRage";
import Error from "../Pages/Home/Error/Error";
import AboutUs from "../Pages/AbouUs/AboutUs";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivatRouter from "./PrivatRouter";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";

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
           path: 'rider',
           element: <PrivatRouter><Rider></Rider></PrivatRouter>
        },
        {
          path: 'send-parcel',
          element: <PrivatRouter><SendParcel></SendParcel></PrivatRouter>,
          loader: () => fetch('/serviceCenter.json').then(res => res.json())

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
  },
  {
   path: 'dashboard',
   element: <PrivatRouter><DashBoardLayout></DashBoardLayout></PrivatRouter>,
   children: [
    {
      path: 'my-parcels',
      Component: MyParcels
    }
   ]
  }
]);