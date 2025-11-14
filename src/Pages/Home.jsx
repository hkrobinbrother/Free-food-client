import React from "react";
import Banner from "../Components/Banner";
import { NavLink, useLoaderData } from "react-router";
import BannerCard from "../Components/BannerCard";

const Home = () => {
  const limitedCard = useLoaderData();
  const limitedCards = limitedCard.slice(0, 6);

  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <h1 className="text-5xl mt-4 font-extrabold text-green-300">Featured Foods</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {limitedCards.map((food) => (
            <BannerCard key={food._id} food={food} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-6">
          <NavLink to="/availableFood">
            <button className="btn bg-amber-200 ">Show All</button>
          </NavLink>
      </div>
        </div>
    </div>
  );
};

export default Home;
