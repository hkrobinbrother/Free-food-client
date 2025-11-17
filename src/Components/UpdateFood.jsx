import React, { useContext } from "react";
import { data, useLoaderData, useNavigate } from "react-router";
import { Swal } from "sweetalert2/dist/sweetalert2";
import { authContext } from "../Firebase/AuthProvider";

const UpdateFood = () => {
  const updateFood = useLoaderData();
  const {_id, foodName, image, notes, location, date, foodQuantity } = updateFood;

  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleUpdateFood = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodName = form.foodName.value;
    const image = form.image.value;
    const email = form.email.value;
    const foodQuantity = form.foodQuantity.value;
    const date = form.date.value;
    const notes = form.notes.value;
    const location = form.location.value;

    const updateFood = {
        
      foodName,
      image,
      post: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      foodQuantity,
      date,
      notes,
      location,
    };
    // form.reset("")
    console.log(updateFood);

    // send data in backend
    try {
      fetch(`http://localhost:3000/food/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "successfully Updated!",
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
        Update Foods
      </h1>

      {/* from */}
      <form onSubmit={handleUpdateFood}>
        <div className="flex gap-4">
          <div className="space-y-2 mt-2 md:w-1/2">
            <label className="label">Food Name</label>
            <input
              type="text"
              name="foodName"
              defaultValue={foodName}
              className="input w-full "
              placeholder="Food Name"
            />
          </div>
          <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Food Image</label>
            <input
              type="url"
              name="image"
              defaultValue={image}
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
              defaultValue={foodQuantity}
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
              defaultValue={date}
              className="input w-full"
              placeholder="Expire Date"
            />
          </div>
          <div className=" space-y-2 mt-2 md:w-1/2">
            <label className="label">Pickup Location</label>

            <input
              type="text"
              name="location"
              defaultValue={location}
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
              defaultValue={notes}
              className="input w-full "
              placeholder="Additional Notes"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Food"
          className="btn bg-green-400 w-full mt-4 font-bold "
        />
      </form>
    </div>
  );
};

export default UpdateFood;
