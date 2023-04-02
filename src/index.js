import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ListPortfolio from "./pages/ListPortfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "list",
    element: <ListPortfolio />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
