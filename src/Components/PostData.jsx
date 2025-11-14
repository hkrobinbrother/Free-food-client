import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router";

const PostData = ({ food, handleDeleted }) => {
  console.log(food);
  const { foodName, image, notes, location, date, foodQuantity } = food;

  //   deleted the post

  const handleDeletedConf = (id) => {
    toast(
      (t) => (
        <div className="flex gap-2 items-center">
          <h1>Are you sure?</h1>
          <div className="flex gap-3" >
            <button
              onClick={() => {
                handleDeleted(id);
                toast.dismiss(t.id);
              }}
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg cursor-pointer"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-blue-700 text-white px-4 py-2 font-bold rounded-lg cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      
    );
  };

  return (
    <tr>
      <td>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="food" />
            </div>
          </div>
        </div>
      </td>

      <td>
        <h1 className="bg-blue-200 px-4 py-2 rounded-full uppercase">
          {foodName}
        </h1>
      </td>

      <td>
        <h1 className="bg-purple-200 px-4 py-2 rounded-full uppercase">
          {notes.substring(0, 15)}..
        </h1>
      </td>

      <td>
        <h1 className="bg-red-200 px-4 py-2 rounded-full uppercase">{date}</h1>
      </td>

      <td>
        <h1 className="bg-amber-100 px-4 py-2 rounded-full uppercase">
          {foodQuantity}
        </h1>
      </td>

      <td>
        <h1 className="bg-green-200 px-4 py-2 rounded-full uppercase">
          {location}
        </h1>
      </td>

      <td className="flex gap-2 items-center justify-center">
        <button
          onClick={() => handleDeletedConf(food._id)}
          className="text-2xl cursor-pointer text-red-400"
        >
          <RiDeleteBin6Fill />
        </button>
        <Link to={`{}`} className="text-2xl text-blue-400">
          <FaEdit />
        </Link>
      </td>
    </tr>
  );
};

export default PostData;
