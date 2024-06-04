import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Menu from "../pages/Home/Menu/Menu";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: 'menu/:category',
        element: <Menu></Menu>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
