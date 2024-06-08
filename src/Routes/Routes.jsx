import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Menu from "../pages/Home/Menu/Menu";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import AdminRoute from "./AdminRoute";
import Users from "../pages/Dashboard/Users/Users";
import AddItems from './../pages/Dashboard/AddItems/AddItems';
import AllMeals from "../pages/Dashboard/AllMeals/AllMeals";
import Update from "../pages/Dashboard/AllMeals/Update/Update";
import MealDetails from "../pages/MealDetails/MealDetails";

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
        element: <SignUp></SignUp>,
      },
      {
        path: "menu/:category",
        element: <Menu></Menu>,
      },
      {
        path: 'meal/:id',
        element: <MealDetails></MealDetails>,
        // loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: 'addItems',
        element: <AddItems></AddItems>
      },
      {
        path: 'users',
        element: <Users></Users>
      },
      {
        path: 'allMeals',
        element: <AllMeals></AllMeals>
      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        // loader: ({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        
      }
    ],
  },
]);

export default router;
