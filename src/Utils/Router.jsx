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

import SingleCardDetails from "../Components/SingleCardDetails";
import UpdateFood from "../Components/UpdateFood";
import RequestModal from "../Components/RequestModal";

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
        element:<PrivateRoute> <MyFoodRequest />,</PrivateRoute>,
        
        
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
        , 
      },
      {
        path:"updateFood/:id",
        element:<UpdateFood/>,
        loader: ({params})=> fetch(`http://localhost:3000/food/${params.id}`)
      },
      {
        path:"requestModal",
        element:<RequestModal/>
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
