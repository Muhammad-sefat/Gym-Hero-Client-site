import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import ErrorPage from "./ErrorPage";
import Home from "./Pages/Home";
import AllTrainers from "./Pages/AllTrainers/AllTrainers";
import TrainerDetails from "./Pages/AllTrainers/TrainerDetails";
import TrainerBooked from "./Pages/AllTrainers/TrainerBooked";

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
      {
        path: "/trainer-details/:id",
        element: <TrainerDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainers/${params.id}`),
      },
      {
        path: "/trainer-booked/:id",
        element: <TrainerBooked />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
export default router;
