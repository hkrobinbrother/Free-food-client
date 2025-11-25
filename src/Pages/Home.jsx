import React, { useState } from "react";
import Banner from "../Components/Banner";
import { NavLink, useLoaderData } from "react-router";
import BannerCard from "../Components/BannerCard";

const Home = () => {
  const limitedCard = useLoaderData();
  
  const [selectedDate,setSelectedDate] = useState("")

 const nearestDateFood = selectedDate
  ? limitedCard
      .map(food => {
        if (!food.expireDate) return null;

        return {
          ...food,
          diff: Math.abs(
            new Date(food.expireDate).setHours(0, 0, 0, 0) -
              new Date(selectedDate).setHours(0, 0, 0, 0)
          ),
        };
      })
      .filter(Boolean) 
      .sort((a, b) => a.diff - b.diff)
  : limitedCard.slice(0, 6);
  return (
     <div>
      <Banner />

      <div className="container mx-auto">
        <h1 className="text-5xl mt-4 font-extrabold text-green-300">
          Featured Foods
        </h1>

        <input
          type="date"
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 my-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {nearestDateFood.slice(0, 6).map((food) => (
            <BannerCard key={food._id} food={food} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-6">
          <NavLink to="/availableFood">
            <button className="btn bg-amber-200">Show All</button>
          </NavLink>
        </div>
      </div>
    </div>
  
  );
};

export default Home;
