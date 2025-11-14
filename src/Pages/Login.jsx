import React, { useContext, useState } from "react";
import { authContext } from "../Firebase/AuthProvider";
import { NavLink } from "react-router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () => {
  const { handleGoogleLogin, handleLogin, handleLogOut } =
    useContext(authContext);
    const [error,setError] = useState("")

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    handleLogin(email, password)
    .then(res=>{})
    .catch(err=>{
        setError(err.message)
    })
  };
  const loginPopup = ()=>{
    Swal.fire("login successful");
  }

  return (
    <div>
      {/* <button onClick={handleGoogleLogin}>Google Login</button>
    new to the website ? plg Register
    <NavLink to="/register">Register</NavLink> */}
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="flex items-center justify-center"
      >
        <div className="items-center flex justify-between">
          <div className=" bg-base-100 w-full p-8  shadow-2xl">
            <div className="">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <button onClick={loginPopup} className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <div className="flex flex-col">
                <button
                  className="btn bg-amber-300"
                  onClick={handleGoogleLogin}
                >
                  Google Login
                </button>
                <button className="btn bg-red-300" onClick={handleLogOut}>
                  LogOut
                </button>
                new to the website ? plg Register <br />
                <NavLink className="text-blue-600 font-semibold" to="/register">Register</NavLink>
                
              {error && <p className="text-red-400">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
