import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { MdFastfood, MdReviews } from "react-icons/md";
import { GiHotMeal, GiMeal } from "react-icons/gi";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
//   const isAdmin = true;

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 p-4 min-h-screen bg-[#5271FF] text-white text-xl">
        <img src="../../public/logo.png" alt="" />
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li></li>
              <li>
                <NavLink to="/dashboard/profile">
                  <FaHome></FaHome>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Meal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allMeals">
                  <MdFastfood></MdFastfood>
                  Manage Meals
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allReviews">
                  <MdReviews></MdReviews>
                  All Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/serveMeals">
                  <GiHotMeal></GiHotMeal>
                  Serve Meals
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/serveMeals">
                  <GiMeal></GiMeal>
                  Upcoming Meals
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
