import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import ErrorPage from "./ErrorPage";
import Home from "./Pages/Home";
import AllTrainers from "./Pages/AllTrainers/AllTrainers";
import TrainerDetails from "./Pages/AllTrainers/TrainerDetails";
import TrainerBooked from "./Pages/AllTrainers/TrainerBooked";
import BecomeTrainer from "./Pages/AllTrainers/BecomeTrainer";
import AllClasses from "./Pages/AllClasses";
import ClassTrainerDetails from "./Pages/ClassTrainerDetails";
import Community from "./Pages/Community/Community";
import CommunityDetails from "./Pages/Community/CommunityDetails";
import DashBoardLayOut from "./Pages/DashBoard/DashBoardLayOut";
import AllNewsLetter from "./Pages/DashBoard/AdminRoute/AllNewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainers/${params.id}`),
      },
      {
        path: "/become-trainer",
        element: <BecomeTrainer />,
      },
      {
        path: "/all-classes",
        element: <AllClasses />,
      },
      {
        path: "/class-trainer-details/:id",
        element: <ClassTrainerDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allClass/${params.id}`),
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/community_details/:id",
        element: <CommunityDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/community-details/${params.id}`),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashBoardLayOut />,
    children: [
      {
        path: "all-newsletter-subscriber",
        element: <AllNewsLetter />,
      },
    ],
  },
]);
export default router;
