import React, { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled, MdSpeakerNotes } from "react-icons/md";
import { Link, Navigate, useParams } from "react-router";
import { authContext } from "../Firebase/AuthProvider";
import RequestModal from "./RequestModal";

const SingleCardDetails = () => {
  const [food, setFood] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const { user } = useContext(authContext);

  const { image, _id, foodName, date, notes, location, post = {} } = food;
  const { name, photo } = post;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  return (
    <div className="container mx-auto space-y-4 ">
      <h1 className="text-5xl text-green-400 text-center font-bold mt-6">
        Food Details
      </h1>
      <div className="flex items-center justify-center">
        <div className=" shadow-sm w-2/3 p-4">
          <div className="flex gap-5 p-1 rounded-lg bg-gray-100 items-center mb-4">
            <h1>
              <img
                className="w-12 h-12 rounded-full"
                src={photo}
                alt="Donar img"
              />
            </h1>

            <h1 className="font-bold">{name}</h1>
          </div>
          <div className="flex justify-center">
            <img
              className="w-[800px] h-[400px] object-cover rounded-lg "
              src={image}
              alt="Shoes"
            />
          </div>
          <div className="flex gap-5 items-center bg-gray-100 rounded-lg mt-4 p-4">
            <h1>
              <img
                className="h-12 w-12 rounded-full"
                src={user?.photoURL}
                alt="user img"
              />
            </h1>
            <h1 className="font-bold uppercase">{user?.displayName}</h1>
          </div>
          <div className="">
            <div className="flex items-center  justify-between mt-4 p-4">
              <h2 className="card-title text-4xl text-blue-900 font-bold uppercase">
                {foodName}
              </h2>
              <p className="text-xl">
                <span className="text-gray-400">ID No</span> : {_id}
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="flex gap-2 items-center text-xl">
                <FaLocationDot className="text-blue-500" /> {location}
              </h1>
              <p className="flex gap-2 items-center text-xl">
                <MdAccessTimeFilled className="text-red-500" />
                {date}
              </p>
              <div>
                <h1 className="text-xl flex items-center gap-2">
                  <MdSpeakerNotes className="text-green-500" />{" "}
                  <input
                    type="text"
                    placeholder={notes}
                    className="input border-2 rounded-lg px-2 border-blue-100"
                  />
                </h1>
              </div>
            </div>

            <div className="card-actions ">
              <button
                onClick={() => setOpenModal(true)}
                className="btn btn-primary w-full mt-4"
              >
                Request Food
              </button>
              <RequestModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                food={food}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetails;
