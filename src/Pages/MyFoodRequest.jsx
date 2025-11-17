import { useContext, useEffect, useState } from "react";
import { authContext } from "../Firebase/AuthProvider";

const MyFoodRequest = () => {
  const { user } = useContext(authContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/requests?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [user]);



  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-400 mb-5">My Food Requests</h1>

      <div className="">
        <table className="table shadow-lg  w-full ">
          <thead>
            <tr>
              <th className="">Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr className="" key={req._id}>
                <td className=""><h1 className="">{req.donorName}</h1></td>
                <td className=""><h1 className="">{req.pickupLocation}</h1></td>
                <td>{req.expireDate}</td>
                <td>{req.requestDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {requests.length === 0 && (
        <p className="text-gray-500 mt-4 text-center">
          You haven't requested any food yet.
        </p>
      )}
    </div>
  );
};

export default MyFoodRequest;
