import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
export default router;
