import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled, MdSpeakerNotes } from "react-icons/md";
import { Navigate, NavLink } from "react-router";

const FoodCard = ({food}) => {
    
const handleNavigateSingleCard = ()=>{
  Navigate(`/food/${food._id}`)
}
 
const {image,foodName,foodQuantity,date,notes,location,
status} = food

  return (
    <div className="w-10/12 mx-auto items-center">
      <div className="card bg-base-100 w-96 shadow-sm mt-6">
        <figure>

          <img
          className="object-cover w-[400px] h-[400px]"
            src={image}
            
           
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold px-4 py-2 bg-pink-300 rounded-lg text-center uppercase">Name : <span className="text-blue-900">{foodName}</span></h2>
          <div className="text-gray-400 text-xl items-center flex gap-2">
            <p>Quantity : <span>{foodQuantity}</span></p>
            <h1 className="flex items-center gap-2"><MdAccessTimeFilled className="text-red-400" /> <span className="">{date}</span></h1>
            
          </div>
          <div>
            <h1 className="flex gap-2 items-center"><FaLocationDot className="text-blue-400" />{location}</h1>
          </div>
          <div className="items-center font-bold">
            <h1 className="flex items-center gap-2"><MdSpeakerNotes className="text-green-300 items-center" />  {notes}</h1>
          </div>
          <div className="w-24 h-9 flex justify-center rounded-full  items-center bg-green-300 font-bold">
            {status}
          </div>
          <div className="">
            <NavLink
            to={`/food/${food._id}`}
            onClick={handleNavigateSingleCard}
            className="btn btn-primary w-full ">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
