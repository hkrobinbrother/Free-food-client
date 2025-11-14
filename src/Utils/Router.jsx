import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AvailableFood from "../Pages/AvailableFood";
import AddFood from "../Pages/AddFood";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import AuthProvider from "../Firebase/AuthProvider";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import FoodModal from "../Components/FoodModal";
import SingleCardDetails from "../Components/SingleCardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
        loader:()=> fetch("http://localhost:3000/food")
      },
      {
        path: "availableFood",
        element: <AvailableFood />,
        loader:()=> fetch("http://localhost:3000/food"),
        // children:[
        //   {
        //     path:"/food/:id",
        //     element:<SingleCardDetails/>
        //   }
        // ]
      },
      {
        path: "addFood",
        element: <PrivateRoute><AddFood /></PrivateRoute>,
      },
      {
        path: "manageMyFood",
        element: <PrivateRoute><ManageMyFood />,</PrivateRoute>
      },
      {
        path: "myFoodRequest",
        element:<PrivateRoute> <MyFoodRequest />,</PrivateRoute>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"food/:id",
        element:<PrivateRoute><SingleCardDetails/></PrivateRoute>
      }
    ],
  },
]);
const Router = () => {
  return (
    <AuthProvider routes={<RouterProvider router={router} />}>
      
    </AuthProvider>
  );
};

export default Router;
