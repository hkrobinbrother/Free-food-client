import React, { useContext, useState } from "react";
import { authContext } from "../Firebase/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { NavLink } from "react-router";

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext)
    const [error,setError] = useState("")
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setError("")
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        if(password.length < 6){
            setError("password must be 6 digit")
        }
        if(password!== conPassword){
            setError("password did't match")
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError("Password must be one upper case")
            return;
        }
        
        console.log(name,image,email,password,conPassword)

        handleRegister(email,password)
        .then(res=>{
            manageProfile(name,image)
        })
    }
    const showalert = ()=>{
        Swal.fire("Register Success");
        }
  return (
    <form action="" onSubmit={handleOnSubmit} className="flex items-center justify-center">
      <div className="items-center flex justify-between">
        
        <div className=" bg-base-100 w-full p-8  shadow-2xl">
          <div className="">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="name" />
              <label className="label">Photo Url</label>
              <input type="text" name="image" className="input" placeholder="photo Url" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <label className="label">Confirm Password</label>
              <input
                type="conPassword"
                name="conPassword"
                className="input"
                placeholder="Confirm Password"
              />

              <button onClick={showalert} className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <NavLink to="/login">You have all ready account? <button className="text-blue-600 font-bold">Login</button></NavLink>
            {error&&<p className="text-red-500">{error}</p>}
          </div>
          <h1></h1>
        </div>
      </div>
    </form>
  );
};

export default Register;
