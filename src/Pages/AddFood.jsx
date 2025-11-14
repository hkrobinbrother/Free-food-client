import React, { useContext } from "react";

import Swap from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import { data, useNavigate } from "react-router";
import { authContext } from "../Firebase/AuthProvider";

const AddFood = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleAddFood = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodName = form.foodName.value;
    const image = form.image.value;
    const email = form.email.value;
    const foodQuantity = form.foodQuantity.value;
    const date = form.date.value;
    const notes = form.notes.value;
    const location = form.location.value;

    const newFood = {
      foodName,
      image,
      post:{
        email,name:user?.displayName,photo:user?.photoURL
      },
      foodQuantity,
      date,
      notes,
      location,
    };
    // form.reset("")
    console.log(newFood);

    // send data in backend
    try {
      fetch("http://localhost:3000/food", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "successfully added!",
              text: "Do you want to continue",
              icon: "successful",
              confirmButtonText: "Close",
            });
          }
        });
      navigate("/manageMyFood");
    } catch (err) {
      console.log(err);
      if (!data.insertedId) {
        Swal.fire({
          title: "successfully added!",
          text: "Do you want to continue",
          icon: "successful",
          confirmButtonText: "Close",
        });
      }
    }
  };

  return (
    <div className="container mx-auto   bg-orange-100 mt-8 rounded-lg p-4 space-y-6">
      <h1 className="text-5xl text-center font-extrabold text-green-400">
        Add Foods
      </h1>

      {/* from */}
      <form onSubmit={handleAddFood}>
        <div className="flex gap-4">
          <div className="space-y-2 mt-2 md:w-1/2">
            <label className="label">Food Name</label>
            <input
              type="text"
              name="foodName"
              className="input w-full "
              placeholder="Food Name"
            />
          </div>
          <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Food Image</label>
            <input
              type="url"
              name="image"
              className="input w-full"
              placeholder="Food Image"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Email</label>

            <input
              type="email"
              name="email"
              className="input w-full "
              placeholder="Email"
              defaultValue={user?.email}
              disabled={true}
            />
          </div>
           <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Food Quantity</label>

            <input
              type="number"
              name="foodQuantity"
              className="input w-full "
              placeholder="Food Quantity"
            />
          </div>
        </div>
        <div className="flex gap-4">
         
          <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Expire Date </label>
            <input
              type="date"
              name="date"
              className="input w-full"
              placeholder="Expire Date"
            />
          </div>
          <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Pickup Location</label>

            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Pickup Location"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" space-y-2 mt-2 md:w-full">
            <label className="label">Additional Notes</label>
            <input
              type="text"
              name="notes"
              className="input w-full "
              placeholder="Additional Notes"
            />
          </div>
          
        </div>
        <input
          type="submit"
          value="Add Food"
          className="btn bg-green-400 w-full mt-4 font-bold"
        />
      </form>
    </div>
  );
};

export default AddFood;
