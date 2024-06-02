import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from '../pages/Authentication/Register';
import Login from "../pages/Authentication/Login";
import AddContest from "../pages/AddContest";
import MyAddedContests from "../pages/MyAddedContests";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          path:"/addcontest",
          element:<AddContest/>
        },
        {
          path:"/myaddedcontests",
          element:<MyAddedContests/>
        }
      ]
    },
  ]);
export default router