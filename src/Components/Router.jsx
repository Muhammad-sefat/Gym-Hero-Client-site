import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import ErrorPage from "./ErrorPage";
import Home from "./Pages/Home";
import AllTrainers from "./Pages/AllTrainers/AllTrainers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    ErrorPage: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-trainers",
        element: <AllTrainers />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
export default router;
