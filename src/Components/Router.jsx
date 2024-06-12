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
import AllTrainerss from "./Pages/DashBoard/AdminRoute/AllTrainerss";
import PrivateRoute from "./Provider/PrivateRoute";
import AppliedTrainer from "./Pages/DashBoard/AdminRoute/AppliedTrainer";
import Profile from "./Pages/DashBoard/Profile";
import MyProfile from "./Pages/MyProfile";
import AddClass from "./Pages/DashBoard/AdminRoute/AddClass";
import AddNewForum from "./Pages/DashBoard/AdminRoute/AddNewForum";
import RecommendedClasses from "./Pages/DashBoard/MemberRoute/RecommendedClasses";
import ActiveLogPage from "./Pages/DashBoard/MemberRoute/ActiveLogPage";
import PaymentPage from "./Pages/AllTrainers/PaymentPage";
import AddNewSlot from "./Pages/DashBoard/TrainerRoute/AddNewSlot";

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
          fetch(`https://gym-hero-server.vercel.app/trainers/${params.id}`),
      },

      {
        path: "/trainer-booked/:id/:slot",
        element: <TrainerBooked />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentPage></PaymentPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/become-trainer",
        element: (
          <PrivateRoute>
            <BecomeTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-classes",
        element: <AllClasses />,
      },
      {
        path: "/class-trainer-details/:id",
        element: <ClassTrainerDetails />,
        loader: ({ params }) =>
          fetch(`https://gym-hero-server.vercel.app/allClass/${params.id}`),
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/community_details/:id",
        element: <CommunityDetails />,
        loader: ({ params }) =>
          fetch(
            `https://gym-hero-server.vercel.app/community-details/${params.id}`
          ),
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
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
        index: true,
        element: (
          <PrivateRoute>
            <AllNewsLetter />
          </PrivateRoute>
        ),
      },
      {
        path: "all-trainers",
        element: <AllTrainerss />,
      },
      {
        path: "applied-trainers",
        element: (
          <PrivateRoute>
            <AppliedTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "Add-new-forum",
        element: <AddNewForum />,
      },
      {
        path: "Add-new-slot",
        element: <AddNewSlot />,
      },
      {
        path: "active-log-user",
        element: <ActiveLogPage />,
      },
      {
        path: "recommended-classes",
        element: <RecommendedClasses />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
