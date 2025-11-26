import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Firebase/AuthProvider";
import PostData from "../Components/PostData";


const ManageMyFood = () => {
  const { user } = useContext(authContext);

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (!user?.email) return;
    fetch(`${import.meta.env.VITE_API_URL}/food/byEmail/${user.email}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [user]);
  console.log(foods);

  const handleDeleted = (id) => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/food/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-2xl items-center text-green-400 font-bold">
        My Added Posts :{" "}
        <span className="px-6   rounded-full items-center bg-blue-200 text-blue-800">
          {foods.length}
        </span>
      </h1>
      <table className="table">
        <thead>
          <tr className="">
            <th>Image</th>
            <th>Name</th>
            <th>Comment</th>
            <th>Last Date</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <PostData food={food} handleDeleted={handleDeleted}  />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFood;
