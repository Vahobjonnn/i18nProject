import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout/Layout";
import "./i18/i18n"
const router = createBrowserRouter([
  

  {
    path: "/",
    element:<Layout/>,

    
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default App;
