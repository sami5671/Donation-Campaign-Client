import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";

import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import DonationDetails from "./Components/DonationDetails/DonationDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    ErrorPage: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
        loader: () => fetch("/public/cardinfo.json"),
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/DonationCard/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("../donationcard.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
