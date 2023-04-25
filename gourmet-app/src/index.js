import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Wishlist from "./Pages/Wishlist";
import ProtectedRoute from "./Components/ProtectedRoute";
import Authenticated from "./Pages/Authenticated";
import AuthRoute from "./Components/AuthRoute";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "contact",
    element: <ProtectedRoute Component={Contact} />,
  },
  {
    path: "menu",
    element: <ProtectedRoute Component={Menu} />,
  },
  {
    path: "wishlist",
    element: <ProtectedRoute Component={Wishlist} />,
  },
  {
    path: "auth-success",
    element: <AuthRoute Component={Authenticated} />,
  },
  {
    path: "cart",
    element: <ProtectedRoute Component={Cart} />,
  },
  {
    path: "profile",
    element: <ProtectedRoute Component={Profile} />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
