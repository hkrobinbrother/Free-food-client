import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../Components/FoodCard";

const AvailableFood = () => {
  const foods = useLoaderData();
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold items-center  mt-4 text-green-400">
          Available Foods{" "}
          <span className="px-6  bg-blue-300 rounded-full text-blue-600">
            {foods.length}
          </span>
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
