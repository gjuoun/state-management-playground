import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  console.log("render layout");

  return (
    <div>
      Layout

      <div>
        <Outlet/>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
]);


export const App = () => {
  return <RouterProvider router={router} />;
};
