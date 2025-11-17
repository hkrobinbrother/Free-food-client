/* eslint-disable no-unused-vars */
import {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../Firebase/AuthProvider";

const RequestModal = ({ open, onClose, food }) => {
   const { user } = useContext(authContext);
  const navigate = useNavigate();

  if (!open) return null;

  // Current date time
  const now = new Date();
  const formatted = now.toISOString().slice(0, 16).replace("T", " ");

  const handleRequest = () => {
    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      donorName: food.post?.name,
      pickupLocation: food.location,
      expireDate: food.date,
      requestDate: formatted,

      requesterEmail: user.email,
      requesterName: user.displayName,
    };

    fetch("http://localhost:3000/requests", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then(() => {
        onClose();
        navigate("/myFoodRequest");
      });
  };


  return (
     <dialog open className="modal">
      <div className="modal-box max-w-md">
        <h2 className="text-xl font-bold mb-3">Confirm Food Request</h2>

        <p className="mb-4 uppercase">Food Name: <b>{food.foodName}</b></p>
        <p className="mb-4">Expire Date: {food.date}</p>
        <p className="mb-4">Location: <span className="uppercase">{food.location}</span></p>
        <p>Request Date: {formatted}</p>

        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
          <button className="btn btn-primary" onClick={handleRequest}>
            Request
          </button>
        </div>
      </div>
    </dialog> 
  );
};

export default RequestModal;

