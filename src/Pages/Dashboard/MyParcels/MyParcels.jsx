import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";

const MyParcels = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSeceure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myparcels", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`parcels?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2>all of my parcels: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>cost</th>
              <th>payment status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
           {
            parcels.map ((parcel , index) => <tr key={parcel._id}>
              <th>{index + 1}</th>
              <td>{parcel.parcelName}</td>
              <td>{parcel.cost}</td>
              <td>Blue</td>
            </tr>)
           }
            
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
