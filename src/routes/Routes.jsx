import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from '../pages/Authentication/Register';
import Login from "../pages/Authentication/Login";
import AddContest from "../pages/Dashboard/CreatorDashboard/AddContest";
import PrivateRoute from './PrivateRoute';
import ErrorPage from "../pages/ErrorPage";
import DetailsContest from "../pages/DetailsContest";
import AllContests from "../pages/AllContests";
import Dashboard from "../layout/Dashboard";
import MyProfile from "../pages/Dashboard/UserDashboard/MyProfile";
import MyParticipatedContest from "../pages/Dashboard/UserDashboard/MyParticipatedContest";
import MyWinningContest from "../pages/Dashboard/UserDashboard/MyWinningContest";
import ManageUser from "../pages/Dashboard/AdminDashboard/ManageUser";
import ManageContests from "../pages/Dashboard/AdminDashboard/ManageContests";
import MyCreatedContest from "../pages/Dashboard/CreatorDashboard/MyCreatedContest";
import UpdateContest from "../pages/Dashboard/CreatorDashboard/UpdateContest";
import ContestSubmitted from "../pages/Dashboard/CreatorDashboard/ContestSubmitted";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />,
          loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/contests`),
        },
        {
          path:"/register",
          element: <Register />,
        },
        {
          path:"login",
          element: <Login />,
          loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/contests`),
        },
        {
          path:"/allcontests",
          element:<AllContests/>
        },
        {
          path: '/detailsContest/:id',
          element: (
            <PrivateRoute>
              <DetailsContest />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_URL}/contest/${params.id}`),
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        //admi Routes
        {
          path:"manageuser",
          element:<ManageUser/>
        },
        {
          path:"managecontests",
          element:<ManageContests/>
        },
        //user Routes
        {
          path:"myprofile",
          element:<MyProfile/>
        },
        {
          path:"myparticipatedcontest",
          element:<MyParticipatedContest/>
        },
        {
          path:"mywinningcontest",
          element:<MyWinningContest/>
        },
        // Creator Routes
        {
          path:'mycreatedcontest',
          element:<MyCreatedContest/>
        },
        {
          path:"addcontest",
          element:<AddContest/>
        },
        {
          path: 'update/:id',
          element: (
            <PrivateRoute>
              <UpdateContest />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_URL}/contest/${params.id}`),
        },
        {
          path:'submitted',
          element:<ContestSubmitted/>
        }
      ]
    }
  ]);
export default router