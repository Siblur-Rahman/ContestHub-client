import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from '../pages/Authentication/Register';
import Login from "../pages/Authentication/Login";
import AddContest from "../pages/AddContest";
import PrivateRoute from './PrivateRoute';
import UpdateContest from "../pages/UpdateContest";
import ErrorPage from "../pages/ErrorPage";
import DetailsContest from "../pages/DetailsContest";
import AllContests from "../pages/AllContests";
import UserDashboard from "../layout/UserDashboard";
import MyProfile from "../pages/Dashboard/UserDashboard/MyProfile";

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
          path:"/addcontest",
          element:<AddContest/>
        },
        {
          path: '/update/:id',
          element: (
            <PrivateRoute>
              <UpdateContest />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_URL}/contest/${params.id}`),
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
      path:'userdashboard',
      element:<UserDashboard></UserDashboard>,
      children:[
        {
          path:"myprofile",
          element:<MyProfile/>
        }
      ]
    }
  ]);
export default router