import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Main from "./pages/main.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

import Notfound from "./pages/Notfound.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Veriff from "./pages/Veriff.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/*",
    element:<Notfound />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/signup",
    element:<Signup />
  },
  {
    path:"/home",
    element:<Main />
  },
  {
    path:"/verify",
    element:<Veriff />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
