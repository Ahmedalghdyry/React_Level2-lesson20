import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Page2 from "./Page2";
import { Dataprovider } from "./Context/Datacontext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Page2",
    element: <Page2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dataprovider>
      <RouterProvider router={router} />
    </Dataprovider>
  </React.StrictMode>
);
