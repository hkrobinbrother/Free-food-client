import React, { useContext } from "react";
import { NavLink } from "react-router";
import { authContext } from "../Firebase/AuthProvider";

const Navbar = () => {
  const { user,handleLogOut } = useContext(authContext);
  return (
    <div className="min-h-20 bg-blue-200 items-center  ">
      <div className="w-10/12 mx-auto items-center ">
        <div
          className=" flex justify-between items-center pt-4
        "
        >
          <div className="text-4xl font-extrabold text-green-600">
            FREE FOOD
          </div>
          <div className="space-x-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-extrabold"
                  : "text-gray-500 text-xl font-extrabold  "
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-extrabold"
                  : "text-gray-500 text-xl font-extrabold  "
              }
              to="/availableFood"
            >
              Available Food
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-extrabold"
                  : "text-gray-500 text-xl font-extrabold  "
              }
              to="/addFood"
            >
              Add Food
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-extrabold"
                  : "text-gray-500 text-xl font-extrabold  "
              }
              to="/manageMyFood"
            >
              Manage My Foods
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 text-xl font-extrabold"
                  : "text-gray-500 text-xl font-extrabold  "
              }
              to="/myFoodRequest"
            >
              My Food Request
            </NavLink>
          </div>
          <div>
            {user?.email ? (
              <div className="flex items-center gap-2">
                <button onClick={handleLogOut} className="btn bg-green-400">logOut</button>
                <img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="" />
              </div>
            ) : (
              <NavLink to="/login">
                <button className="btn bg-green-400 ">Login</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
